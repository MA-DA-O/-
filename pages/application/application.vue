<template>
	<view>
		<!-- 菜单 (悬浮,预先隐藏)-->
		<me-tabs v-if="isShowSticky" v-model="tabIndex" :fixed="true" :tabs="tabs" @change="tabChange"></me-tabs>
		
		 <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :up="upOption" @scroll="scroll" @topclick="topClick">		
			<!-- 菜单 (在mescroll-uni中不能使用fixed,否则iOS滚动时会抖动, 所以需在mescroll-uni之外存在一个一样的菜单) -->
			<view id="tabInList">
				<me-tabs v-model="tabIndex" :tabs="tabs" @change="tabChange"></me-tabs>
			</view>
			
			<!-- 搜索  -->
			<view class="cu-bar bg-white search" :class="scrolltop ? 'fixed' : ''" :style="[{top:CustomBar + 'px'}]">
				<view class="search-form round">
					<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
					<text class="cuIcon-search"></text>
				</view>
			</view>	
					
			<view class="add-customer mat15 flex-between">
				<text>共{{total}}条</text>
				<view>
					<button class="mini-btn" type="primary" size="mini" @click="goto('/pages/addApplication/addApplication')"><text class="cuIcon-add mar-icon"></text>添加</button>
				</view>
			</view>
			
			<!-- 数据列表 -->
			<index-list :list="chargeList"></index-list>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import {apiSearch} from "@/api/mock.js"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				upOption: {
					// 如果用mescroll-uni 则需要onScroll: true, 且需要 @scroll="scroll"; 而mescroll-body最简单只需在onPageScroll处理即可
					// onScroll: true // 是否监听滚动事件, 默认false (配置为true时,可@scroll="scroll"获取到滚动条位置和方向)
				},
				tabs:[
					{name:'全部', num:1, y:0, curPageLen:0, hasNext:true},
					{name:'审批中', num:1, y:0, curPageLen:0, hasNext:true},
					{name:'已通过', num:1, y:0, curPageLen:0, hasNext:true},
					{name:'已拒绝', num:1, y:0, curPageLen:0, hasNext:true}
					],
				tabIndex: 0, // 当前菜单下标
				preIndex: 0, // 前一个菜单下标
				navTop: null, // nav距离到顶部的距离 (如计算不准确,可直接写死某个值)
				isShowSticky: false, // 是否悬浮
				TabCur: 0,
				scrollLeft: 0,
				CustomBar: this.CustomBar,
				listCurID: '',
				chargeList: [{
					name: '小王',
					IDNumber: '202004020002',
					department: '担保一部',
					cusName: '江南服装厂',
					time: '2020-07-13',
					status: 1
				},
				{
					name: '小王',
					IDNumber: '202004020002',
					department: '担保一部',
					cusName: '江南服装厂',
					time: '2020-07-13',
					status: 2
				},
				{
					name: '小王',
					IDNumber: '202004020002',
					department: '担保一部',
					cusName: '江南服装厂',
					time: '2020-07-13',
					status: 4
				}],
				total: 1,
				scrolltop: false
			};
		},
		mounted() {
			this.chargeList.map(e =>{
				e.status = this.core.auditStatus(e.status)
			})
			console.log(this.chargeList)
		},
		methods: {
			changeTab(index){
				this.TabCur = index;
			},
			/*下拉刷新的回调 */
			downCallback() {
				// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
				// loadSwiper();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				this.mescroll.resetUpScroll()
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				//联网加载数据
				if(this.isChangeTab){
					this.mescroll.hideUpScroll(); // 切换菜单,不显示mescroll进度, 显示系统进度条
					uni.showLoading();
				}
				let keyword = this.tabs[this.tabIndex].name;
				apiSearch(page.num, page.size, keyword).then(curPageData=>{
					//联网成功的回调
					
					// 当前tab数据
					let curTab = this.tabs[this.tabIndex]
					
					//设置列表数据
					if(page.num == 1) curTab.goods = []; //如果是第一页需手动制空列表
					curTab.goods=curTab.goods.concat(curPageData); //追加新数据
					
					// 数据渲染完毕再隐藏加载状态 this.$nextTick在iOS真机不触发,需改成setTimeout
					// this.$nextTick(()=>{
					setTimeout(()=>{
						// 需先隐藏加载状态
						this.mescroll.endSuccess(curPageData.length);
						// 再记录当前页的数据
						curTab.num = page.num; // 页码
						curTab.curPageLen = curPageData.length; // 当前页长
						curTab.hasNext = this.mescroll.optUp.hasNext; // 是否还有下一页
						
						// 设置nav到顶部的距离 (需根据自身的情况获取navTop的值, 这里放到列表数据渲染完毕之后)
						// 也可以放到onReady里面,或者菜单顶部的数据(轮播等)加载完毕之后..
						if(!this.navTop) this.setNavTop()
						// 保持tab悬浮,列表数据显示第一条
						if(this.isChangeTab){
							this.isChangeTab = false;
							uni.hideLoading();
							if(this.isShowSticky) this.mescroll.scrollTo(this.navTop, 0)
						}
					},20)
				}).catch(()=>{
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			},
			// 设置nav到顶部的距离 (滚动条为0, 菜单顶部的数据加载完毕获取到的navTop数值是最精确的)
			setNavTop(){
				let view = uni.createSelectorQuery().select('#tabInList');
				view.boundingClientRect(data => {
					console.log('tabInList基本信息 = ' + JSON.stringify(data));
					this.navTop = data.top // 到屏幕顶部的距离
				}).exec();
			},
			// mescroll-uni的滚动事件 (需在up配置onScroll:true才生效)
			// 而mescroll-body最简单只需在onPageScroll处理即可
			scroll(){
				console.log('滚动条位置 = ' + this.mescroll.getScrollTop() + ', navTop = ' + this.navTop);
				// 菜单悬浮的原理: 监听滚动条的位置大于某个值时,控制顶部菜单的显示和隐藏
				if (this.mescroll.getScrollTop() >= this.navTop) {
					this.isShowSticky = true // 显示悬浮菜单
				} else {
					this.isShowSticky = false // 隐藏悬浮菜单
				}
			},
			// 点击回到顶部按钮时,先隐藏悬浮菜单,避免闪动
			topClick(){
				this.isShowSticky = false
			},
			// 切换菜单
			tabChange (index) {
				// 记录前一个菜单的数据
				let preTab = this.tabs[this.preIndex]
				preTab.y = this.mescroll.getScrollTop(); // 滚动条位置
				this.preIndex = index;
				// 当前菜单的数据
				let curTab = this.tabs[index]
				if (!curTab.goods) {
					// 没有初始化,则初始化
					this.isChangeTab = true;
					this.mescroll.resetUpScroll()
				} else{
					// 初始化过,则恢复之前的列表数据
					this.mescroll.setPageNum(curTab.num + 1); // 恢复当前页码
					this.mescroll.endSuccess(curTab.curPageLen, curTab.hasNext); // 恢复是否有下一页或显示空布局
					this.$nextTick(()=>{
						this.mescroll.scrollTo(curTab.y, 0) // 恢复滚动条的位置
					})
				}
			}
		},
		// 使用mescroll-body最简单只需在onPageScroll处理即可
		onPageScroll(e){
			console.log('滚动条位置 = ' + e.scrollTop + ', navTop = ' + this.navTop);
			if (e.scrollTop >= this.navTop) {
				this.isShowSticky = true // 显示悬浮菜单
			} else {
				this.isShowSticky = false // 隐藏悬浮菜单
			}
		}
	}
</script>

<style lang="scss" scoped>
.cu-bar .search-form{
	border: 2rpx solid #00B9FF;
	border-radius: 20rpx;
	background-color: #fff;
	margin: 0 50rpx;
	height: 72rpx;
	line-height: 72rpx;
	margin-top: 20rpx;
	input{
		height: 72rpx;
		line-height: 72rpx;
		padding: 0 40rpx;
	}
	.cuIcon-search{
		margin: 0 20rpx;
	}
}
.add-customer{
	padding: 0 50rpx;
	button{
		background-color: #00B9FF;
		border-radius: 30rpx;
		.mar-icon{
			margin-right: 10rpx;
		}
	}
}
</style>

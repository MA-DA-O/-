<template>
	<view>
		<me-tabs v-model="TabCur" :tabs="workTabList" @change="changeTab"></me-tabs>
		
		<navigator hover-class='none' :url="'/pages/' + item.name +'/' + item.name" class="nav-li" navigateTo
		 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in workTypeList" :key="index" v-if="TabCur == index">
			<view class="work-type" :class="item.type">
				<text class="work-cus-text">{{item.title}}</text>
			</view>	
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				workTabList:[{
					name: '基础应用'
				},
				{
					name: '业务应用'
				}],
				workTypeList: [{
					title: '客户资源管理系统',
					name: 'customer',
					type: 'customer'
				},
				{
					title: '担保业务管理系统 ',
					name: 'guarantee',
					type: 'guarantee'
				}],
				TabCur: 0,
				scrollLeft: 0
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			changeTab(index){
				this.TabCur = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.customer{
		background: url(../../static/img/btn_1.png) no-repeat;
	}
	.guarantee{
		background: url(../../static/img/btn_2.png) no-repeat;
	}
	.work-type{
		width: 650rpx;
		height: 160rpx;
		position: relative;
		background-size: 100%;
		cursor: pointer;
		top: 30rpx;
		left: 50%;
		transform: translate(-50%,0);
		.work-cus-text{
			position: absolute;
			top: 50%;
			left: 60rpx;
			transform: translate(0,-50%);
			font-size: 28rpx;
			color: #666;
		}
	}
</style>

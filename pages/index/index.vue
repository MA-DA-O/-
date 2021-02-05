<template>
	<view class="home-view">
		<view class="flex-column mat40">
			<text class="home-title">贷款金额(元)</text>
			<text class="home-pirce mat15">300,000</text>
		</view>
		
		<view class="cu-list grid mat100" :class="['col-' + stagridCol,gridBorder?'':'no-border']">			
			<view class="cu-item bg-guarantee" v-for="(item,index) in applyList" :key="index">
				<navigator hover-class='none' :url="'/pages/' + item.url +'/' + item.url" class="nav-li" navigateTo
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]">
					<image :style="item.style" :src="item.img"></image>
					<text>{{item.name}}</text>
				</navigator>
			</view>				
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				applyList: [{
					url: 'apply',
					name: '认证申请',
					img: '../../static/img/apply.png',
					style: 'width: 200rpx;height: 200rpx;'
				}, {
					url: 'history',
					name: '申请记录',
					img: '../../static/img/his.png',
					style: 'width: 200rpx;height: 200rpx;'
				}],
				stagridCol: 2,
				gridBorder: false,
			};
		},
		onLoad() {

		},
		mounted() {
			
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
.mat100{
	margin-top: 200rpx;
}
.home-title{
	font-size: 28rpx;
	font-weight: 700;
}
.home-pirce{
	font-size: 36rpx;
	font-weight: 700;
}
</style>

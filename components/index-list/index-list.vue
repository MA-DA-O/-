<!-- 商品列表组件 <good-list :list="xx"></good-list> -->
<template>
	<view class="good-list">
		<view class="charge" v-for="(item,index) in list" :key="index" :id="'index-' + item.name" :data-index="item.name">
			<view class="charge-title flex-between">
				<text>{{item.name}}的贷款申请</text>
			</view>
			<view class="charge-text">
				<view>
					<text>业务编号：</text>
					<text class="mgl30">{{item.IDNumber}}</text>
				</view>
				<view>
					<text>所在部门：</text>
					<text class="mgl30">{{item.department}}</text>
				</view>
				<view>
					<text>客户名称：</text>
					<text class="mgl30">{{item.cusName}}</text>
				</view>
				<view class="flex-between">
					<text class="time-text">{{item.time}}</text>
					<text class="status-text" :style="'background-color:'+item.status.bgColor+';color:'+item.status.textColor">{{item.status.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.good-list{
		background-color: #fff;
		
		.good-li{
			display: flex;
			align-items: center;
			padding: 20upx;
			border-bottom: 1upx solid #eee;
			
			.good-img{
				width: 160upx;
				height: 160upx;
				margin-right: 20rpx;
			}
			
			.flex-item{
				flex: 1;
				
				.good-name{
					font-size: 26upx;
					line-height: 40upx;
					height: 80upx;
					margin-bottom: 20upx;
					overflow: hidden;
				}
				.good-price{
					font-size: 26upx;
					color: red;
				}
				.good-sold{
					font-size: 24upx;
					margin-left: 16upx;
					color: gray;
				}
				
			}
		}
	}
.charge{
	margin: 0 50rpx;
	border-radius: 20rpx;
	padding: 0 30rpx;
	box-shadow: 0 0 16rpx #ccc;
	margin-top: 40rpx;
	.charge-title{
		padding: 16rpx 0;
		border-bottom: 4rpx solid #F2F2F2;
		color: #000;
		font-weight: bold;
		.charge-status{
			color: #ccc;
		}
	}
	.charge-text{
		padding: 16rpx 0;
		color: #707070;
		.time-text{
			color: #ccc;
		}
		.status-text{
			font-size: 28rpx;
			padding: 8rpx 12rpx;
			border-radius: 10rpx;
		}
	}
}
</style>

<!-- 商品列表组件 <good-list :list="xx"></good-list> -->
<template>
	<view class="good-list">
		<view class="charge" v-for="(item,index) in list" :key="index" :id="'index-' + item.name" :data-index="item.name">
			<view class="charge-title flex-between">
				<text>{{item.name}}</text>
				<text class="charge-status">{{item.status}}</text>
			</view>
			<view class="charge-text">
				<text>{{item.IDNumber}}</text>
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
		.charge-status{
			color: #ccc;
		}
	}
	.charge-text{
		padding: 16rpx 0;
		color: #707070;
	}
}
</style>

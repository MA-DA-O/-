<template>
	<view>
		<view class="bg-img bg-mask flex-justify-center align-center" style="background-image: url('../../static/img/user-bg.png');height: 300rpx;">
			<view class="padding-xl text-white">
				<view class="cu-avatar xl round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
				<view class="padding-text text-lg">
					登录
				</view>
			</view>
		</view>
		<view class="cu-list menu sm-border card-menu margin-top box-sha">
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" url="../personalInfo/personalInfo" open-type="navigate">
					<text class="margin-right-xs">个人信息</text>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" url="../bindPhone/bindPhone" open-type="navigate">
					<text class="margin-right-xs">绑定手机</text>
				</navigator>
			</view>
			<view class="cu-item">
				<view class="content padding-tb-sm">
					<text class="margin-right-xs">通知提醒</text>
				</view>
				<view class="action">
					<switch @change="SwitchSex" :class="skin?'checked':''" :checked="skin?true:false"></switch>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu sm-border card-menu margin-top box-sha">
			<view class="cu-item arrow">
				<view class="content">
					<text class="margin-right-xs">版本更新</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">已是最新版本</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" url="../aboutUs/aboutUs" open-type="navigate">
					<text class="margin-right-xs">关于我们</text>
				</navigator>
				<view class="action">
					<text class="text-grey text-sm">担保公司</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				skin: false
			}
		},
		onLoad() {

		},
		methods: {
			SwitchSex(e) {
				this.skin = e.detail.value
			},
		}
	}
</script>

<style  lang="scss" scoped>
page{
	background-color: #F5F5F5;
}
.box-sha{
	box-shadow: 0 0 16rpx #ccc;
}
.padding-text{
	padding: 10rpx 0;
	text-align: center;
}
</style>

<template>
	<view class="bindPhone">
		<view class="phoneInput">
			<input class="form-input" placeholder-class="form-input-placeholder" v-model="bindForm.phone" placeholder="请输入手机号" />
		</view>
		<view class="phoneInput flex-between mat15">
			<input class="form-input" placeholder-class="form-input-placeholder" v-model="bindForm.code" placeholder="请输入验证码" />
			<text class="code_hr"></text>
			<text>获取验证码</text>
		</view>
		<view class="mat40">
			<navigator url="/pages/user/user" open-type="switchTab">
				<button class="cu-btn block bg-blue margin-tb-sm lg round" @click="bindPhoneClick">立即绑定</button>
			</navigator>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			bindForm: {
				phone: '',
				code: ''
			}
		}
	},
	methods: {
		bindPhoneClick(){

		}
	}
}
</script>

<style lang="scss" scoped>
.bindPhone{
	padding: 200rpx 90rpx 0 90rpx;
	.phoneInput{
		border: 2rpx solid #E6E6E6;
		border-radius: 40rpx;
		height: 80rpx;
		padding: 0 40rpx;
		display: flex;
		align-items: center;
	}
	.code_hr{
		width: 2rpx;
		height: 40rpx;
		background-color: #f5f5f5;
	}
}
</style>

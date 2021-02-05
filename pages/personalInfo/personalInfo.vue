<template>
	<view class="evan-form-show">
		<view class="bottom-border flex-between">
			<view class="left-border"><text class="mgl10">基本信息</text></view>
			<text class="btn-col">保存</text>
		</view>
		<uni-forms :value="formData" ref="form" validate-trigger="bind" err-show-type="toast">
			<uni-forms-item name="name" required label="姓名">
				<uni-easyinput type="text" :inputBorder="true" v-model="formData.name" placeholder="请输入姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="sex" label="性别">
				<uni-data-checkbox v-model="formData.sex" :localdata="sex"></uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item required name="sex" label="部门">
				<uni-easyinput type="text" :inputBorder="true" v-model="formData.name" placeholder="请输入姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="sex" label="职位">
				<uni-easyinput type="text" :inputBorder="true" v-model="formData.name" placeholder="请输入姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="sex" label="工号">
				<uni-easyinput type="text" :inputBorder="true" v-model="formData.name" placeholder="请输入姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="time" label="生日">
				<uni-datetime-picker v-model="formData.time" :timestamp="true" @change="datetimeChange"></uni-datetime-picker>
			</uni-forms-item>
			<uni-forms-item required name="phone" label="办公电话">
				<uni-easyinput type="text" :inputBorder="true" v-model="formData.phone" placeholder="请输入姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="email" label="公司邮箱">
				<uni-easyinput type="text" :inputBorder="true" v-model="formData.email" placeholder="请输入邮箱"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item required name="email" label="备用邮箱">
				<uni-easyinput type="text" :inputBorder="true" v-model="formData.email" placeholder="请输入邮箱"></uni-easyinput>
			</uni-forms-item>
			
		
			<!-- 直接使用组件自带submit、reset 方法，小程序不生效 -->
			<!-- 			<button class="button" form-type="submit">Submit</button>
				<button class="button" form-type="reset">Reset</button> -->
		
			<view class="example">
				<button class="button" @click="submitForm('form')">校验表单</button>
				<button class="button" @click="validateField('form')">只校验用户名和邮箱项</button>
				<button class="button" @click="clearValidate('form','name')">移除用户名的校验结果</button>
				<button class="button" @click="clearValidate('form')">移除全部表单校验结果</button>
				<button class="button" @click="resetForm">重置表单</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
import utils from '@/components/evan-form/utils.js'
export default{
	data(){
		return{
			formData: {
				time: '',
				name: '',
				age: '',
				email: "",
				sex: '',
				hobby: [],
				remarks: "",
				country: -1,
				weight: 0
			},
			sex: [{
				text: '男',
				value: '0'
			}, {
				text: '女',
				value: '1'
			}, {
				text: '未知',
				value: '2'
			}],
			hobby: [{
				text: '足球',
				value: 0
			}, {
				text: '篮球',
				value: 1
			}, {
				text: '游泳',
				value: 2
			}],
			range: ['中国', '美国', '澳大利亚'],
			show: false,
			rules: {
				name: {
					rules: [{
						required: true,
						errorMessage: '请输入用户名',
					}, {
						minLength: 3,
						maxLength: 15,
						errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
					}]
				},
				age: {
					rules: [{
						required: true,
						errorMessage: '请输入年龄',
					}, {
						format: 'number',
						errorMessage: '年龄必须是数字',
					}, {
						minimum: 18,
						maximum: 30,
						errorMessage: '年龄应该大于 {minimum} 岁，小于 {maximum} 岁',
					}]
				},
				weight: {
					rules: [{
						format: 'number',
						errorMessage: '体重必须是数字',
					}, {
						minimum: 100,
						maximum: 200,
						errorMessage: '体重应该大于 {minimum} 斤，小于 {maximum} 斤',
					}]
				},
				email: {
					rules: [{
						format: 'email',
						errorMessage: '请输入正确的邮箱地址',
					}]
				},
				checked: {
					rules: [{
						format: 'bool',
					}]
				},
				sex: {
					rules: [{
						format: "string"
					}]
				},
				hobby: {
					rules: [{
						format: "array"
					}, {
						validateFunction: function(rule, value, data, callback) {
							if (value.length < 2) {
								callback('请至少勾选两个兴趣爱好')
							}
							return true
						}
					}]
				}
			},
			
			info: {
				gender: 0
			},
			genderText: 0,
			// genderList: ['男','女']
			genderList: [{
				name: '男',
				value: 1
			},
			{
				name: '女',
				value: 2
			}]
		}
	},
	onLoad() {
		uni.showLoading()
		// this.formData 应该包含所有需要校验的表单
		// 模拟异步请求数据
		setTimeout(() => {
			this.formData = {
				name: 'LiMing',
				time: '',
				age: 1,
				email: "",
				sex: '0',
				hobby: [0, 2],
				remarks: "热爱学习，热爱生活",
				country: 2,
				weight: 120
			}
			uni.hideLoading()
		}, 500)
	},
	onReady() {
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		change(name, value) {
			this.$refs.form.setValue(name, value)
		},
	
		/**
		 * 手动提交
		 * @param {Object} form
		 */
		submitForm(form) {
			console.log(this.formData);
			this.$refs[form].submit()
				.then((res) => {
					console.log('表单的值：', res);
					uni.showToast({
						title: '验证成功'
					})
				}).catch((errors) => {
					console.error('验证失败：', errors);
				})
		},
	
		/**
		 * 手动重置表单
		 */
		resetForm() {
			this.$refs.form.resetFields()
		},
		/**
		 * 部分表单校验
		 * @param {Object} form
		 */
		validateField(form) {
			this.$refs[form].validateField(['name', 'email']).then((res) => {
				uni.showToast({
					title: '验证成功'
				})
				console.log('表单的值：', res);
			}).catch((errors) => {
				console.error('验证失败：', errors);
			})
		},
	
		/**
		 * 清除表单校验
		 * @param {Object} form
		 * @param {Object} name
		 */
		clearValidate(form, name) {
			if (!name) name = []
			this.$refs[form].clearValidate(name)
		},
		datetimeChange(e) {
			this.formData.time = e
		}
	}
	// methods: {
	// 	genderChange(e,genderList){
	// 		this.genderText = e.detail.value
	// 		this.info.gender = genderList[this.genderText].value
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
.btn-col{
	color: #00B9FF;
}

/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 28rpx;
		line-height: inherit;
	}

	.example {
		padding: 0 30rpx 30rpx;
	}

	.example-info {
		padding: 30rpx;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 28rpx;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 30rpx;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 30rpx;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 28rpx;
		line-height: 40rpx;
	}

	.example-info-text {
		font-size: 28rpx;
		line-height: 40rpx;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 30rpx;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 36rpx;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 12rpx;
		height: 96rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.example {
		padding: 0 20rpx 20rpx;
	}

	.uni-input-border,
	.uni-textarea-border {
		width: 100%;
		font-size: 28rpx;
		color: #666;
		border: 2rpx #e5e5e5 solid;
		border-radius: 40rpx;
		box-sizing: border-box;
	}

	.uni-input-border {
		padding: 0 40rpx;
		height: 70rpx;
	}

	.uni-textarea-border {
		padding: 20rpx;
		height: 160rpx;
	}

	.label-box {
		margin-right: 20rpx;
	}

	.transform-scale {
		transform: scale(0.7);
	}

	.button {
		margin: 20rpx auto;
	}
</style>

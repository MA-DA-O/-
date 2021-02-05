<template>
	<view class="evan-form-show">
		<view class="bottom-border">
			<view class="left-border"><text class="mgl10">基本信息</text></view>
		</view>			
		<!-- 个人客户 -->
		<uni-forms :value="personageForm" ref="personageForm" validate-trigger="bind" err-show-type="toast">
			<uni-forms-item name="name" required label="客户姓名">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.name" placeholder="请输入客户姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="idCard" required label="身份证号">
				<uni-easyinput type="idcard" :inputBorder="true" maxlength="18" v-model="personageForm.idCard" placeholder="请输入身份证号"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="age" required label="年龄">
				<uni-easyinput type="number" maxlength="3" :inputBorder="true" v-model="personageForm.age" placeholder="请输入年龄"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="phone" required label="联系方式">
				<uni-easyinput type="tel" maxlength="11" :inputBorder="true" v-model="personageForm.phone" placeholder="请输入手机号"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="gender" required label="性别">
				<uni-data-checkbox v-model="personageForm.gender" :localdata="genderList"></uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="maritalStatus" required label="婚姻状况">
				<picker @change="maritalChange" :value="maritalStatusVal" :range="maritalList" :range-key="'name'">
					<view class="picker-view flex-between">
						<text>{{maritalStatusVal != '' ? maritalList[maritalStatusVal].name : '请选择'}}</text>
						<text class="cuIcon-unfold lg text-gray"></text>
					</view>
				</picker>
			</uni-forms-item>
			<uni-forms-item name="education" required label="学历">
				<picker @change="educationChange" :value="educationVal" :range="educationList" :range-key="'name'">
					<view class="picker-view flex-between">
						<text>{{educationVal ? educationList[educationVal].name : '请选择'}}</text>
						<text class="cuIcon-unfold lg text-gray"></text>
					</view>
				</picker>
			</uni-forms-item>
			<uni-forms-item name="employer" required label="工作单位">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.employer" placeholder="请输入单位名称"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="position" required label="职务">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.position" placeholder="请输入职务名称"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="workingYears" required label="从业年限(年)">
				<uni-easyinput type="number" maxlength="3" :inputBorder="true" v-model="personageForm.workingYears" placeholder="请输入从业年限"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="socialSecurityNum" required label="社保编号">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.socialSecurityNum" placeholder="请输入社保编号"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="livingSituation" required label="居住情况">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.livingSituation" placeholder="请输入居住情况"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="addr" required label="联系地址">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.addr" placeholder="请输入联系地址"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="residenceAddr" required label="户籍地址">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.residenceAddr" placeholder="请输入户籍地址"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="businessSource" required label="业务来源">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.businessSource" placeholder="请输入业务来源"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="emergencyLinkman" required label="紧急联系人">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.emergencyLinkman" placeholder="请输入紧急联系人"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="emergencyLinkmanRelationship" required label="紧急联系人关系">
				<uni-easyinput type="text" :inputBorder="true" v-model="personageForm.emergencyLinkmanRelationship" placeholder="请输入紧急联系人关系"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="emergencyLinkmanPhone" required label="紧急联系人电话">
				<uni-easyinput type="tel" :inputBorder="true" v-model="personageForm.emergencyLinkmanPhone" placeholder="请输入紧急联系人电话"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>		
		
		<button class="button" @click="submitForm('personageForm')">保存</button>
	</view>
</template>

<script>
	import utils from '@/components/evan-form/utils.js'
	export default {
		data() {
			return {
				customerId: '',
				genderList: [{
					text: '男',
					value: 1
				},
				{
					text: '女',
					value: 2
				}],//性别列表
				maritalList: [{
					name: '未婚',
					value: 0
				},
				{
					name: '已婚',
					value: 1
				},
				{
					name: '离异',
					value: 2
				},
				{
					name: '再婚',
					value: 3
				}],//婚姻状况列表
				educationList: [{
					name: '本科',
					value: 0
				},
				{
					name: '大专',
					value: 1
				},
				{
					name: '高职',
					value: 2
				},
				{
					name: '中专',
					value: 3
				},
				{
					name: '其他',
					value: 4
				}],//学历列表
				maritalStatusVal: '',//婚姻状况列表下标
				educationVal: '', //学历列表下标
				personageForm: {
					name: '', //客户姓名
					idCard: '', //身份证号
					age: '',//年龄
					phone: '', //联系方式
					gender: 1,//性别
					maritalStatus: '',//婚姻状况
					education: '', //学历
					employer: '', //工作单位
					position: '', //职务
					workingYears: '', //从业年限
					socialSecurityNum: '',//社保编号
					livingSituation: '', //居住情况
					addr: '', //联系地址
					residenceAddr: '', //户籍地址
					businessSource: '', //业务来源
					emergencyLinkman: '', //紧急联系人
					emergencyLinkmanRelationship: '', //紧急联系人关系
					emergencyLinkmanPhone: '', //紧急联系人电话				
				},//个人form
				personageRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入客户姓名',
						}]
					},
					idCard: {
						rules: [{
							required: true,
							errorMessage: '请输入身份证号',
						},{
							validateFunction: function(rule, value, data, callback) {
								let pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
								if (!pattern.test(value)) {
									callback('请输入正确的身份证号')
								}
								return true
							}
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '请输入年龄',
						}]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '请输入手机号码',
						},{
							validateFunction: function(rule, value, data, callback) {
								let pattern = /^1[3456789]\d{9}$/
								if (!pattern.test(value)) {
									callback('请输入正确的手机号码')
								}
								return true
							}
						}]						
					},
					maritalStatus: {
						rules: [{
							required: true,
							errorMessage: '请选择婚姻状况',
						},]
					},
					education: {
						rules: [{
							required: true,
							errorMessage: '请选择学历',
						},]
					},
					employer: {
						rules: [{
							required: true,
							errorMessage: '请输入工作单位',
						},]
					},
					position: {
						rules: [{
							required: true,
							errorMessage: '请输入职务',
						},]
					},
					workingYears: {
						rules: [{
							required: true,
							errorMessage: '请输入从业年限',
						},]
					},
					socialSecurityNum: {
						rules: [{
							required: true,
							errorMessage: '请输入社保编号',
						},]
					},
					livingSituation: {
						rules: [{
							required: true,
							errorMessage: '请输入居住情况',
						},]
					},
					addr: {
						rules: [{
							required: true,
							errorMessage: '请输入联系地址',
						},]
					},
					residenceAddr: {
						rules: [{
							required: true,
							errorMessage: '请输入户籍地址',
						},]
					},
					businessSource: {
						rules: [{
							required: true,
							errorMessage: '请输入业务来源',
						},]
					},
					emergencyLinkman: {
						rules: [{
							required: true,
							errorMessage: '请输入紧急联系人',
						},]
					},
					emergencyLinkmanRelationship: {
						rules: [{
							required: true,
							errorMessage: '请输入紧急联系人关系',
						},]
					},
					emergencyLinkmanPhone: {
						rules: [{
							required: true,
							errorMessage: '请输入紧急联系人电话',
						},{
							validateFunction: function(rule, value, data, callback) {
								let pattern = /^1[3456789]\d{9}$/
								if (!pattern.test(value)) {
									callback('请输入正确的手机号码')
								}
								return true
							}
						}]
					},
				},
				hideRequiredAsterisk: false
			}
		},
		onReady() {
			this.$refs.personageForm.setRules(this.personageRules)
		},
		onLoad(option) {
			 if(option.id){
				this.customerId = option.id
				this.getMsg()
			 }
		},
		methods: {
			// 获取详情信息
			getMsg(){
				this.$http.get('/api-crms/customer/applet/get/customer',{
					type: 0
				}).then(res => {
					//   个人表单赋值
					this.personageForm = res.data
					if(res.data.manager){
						this.manager = res.data.manager
						this.employeeMsg.map((e,index) =>{
							if(e.id == res.data.manager){
								this.managerVal = index
							}
						})
					}
				}).catch(function (error) {});
			},
			//性别选择
			genderChange(e) {
				this.personageForm.gender = e.detail.value
			},
			//婚姻状况选择
			maritalChange(e) {
				this.maritalStatusVal = e.detail.value
				this.personageForm.maritalStatus = this.maritalList[e.detail.value].value
			},
			//学历选择
			educationChange(e) {
				this.educationVal = e.detail.value
				this.personageForm.education = this.educationList[e.detail.value].value
			},
			//提交表单
			submitForm(form) {
				this.$refs[form].submit()
					.then((res) => {
						if(this.customerId){
							//编辑个人
							this.$http.post('/api-crms/customer/applet/update/personal',this.personageForm).then(res => {
								uni.showToast({title: '编辑成功'})
								this.goto('/pages/customer/customer')
							}).catch(function (error) {});
						}else{
							//新增个人
							this.$http.post('/api-crms/customer/applet/save/personal',this.personageForm).then(res => {
								uni.showToast({title: '添加成功'})
								this.goto('/pages/customer/customer')
							}).catch(function (error) {});
						}
					}).catch((errors) => {})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.evan-form-show {
		padding: 0 30rpx;
		background-color: #fff;

		.form-input {
			font-size: 28rpx;
			color: #333;
			text-align: right;
			width: 100%;
			box-sizing: border-box;
			height: 60rpx;
			&.textarea{
				height: 240rpx;
				padding: 24rpx 0;
				text-align: left;
			}
		}

		.form-input-placeholder {
			font-size: 28rpx;
			color: #999;
		}

		&__button {
			width: 100%;
			height: 88rpx;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			font-size: 36rpx;
			color: #fff;
			margin-top: 20rpx;
			background-color: #2D87D5;

			&::before,
			&::after {
				border: none;
			}
		}

		.customize-form-item {
			&__label {
				font-size: 28rpx;
				color: #333;
				margin-bottom: 16rpx;
			}

			&__radio {
				display: flex;
				align-items: center;
				margin-bottom: 16rpx;

				&__text {
					font-size: 28rpx;
					color: #333;
				}
			}
		}
	}
</style>

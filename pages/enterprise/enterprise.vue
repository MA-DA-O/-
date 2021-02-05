<template>
	<view class="evan-form-show">
		<view class="bottom-border">
			<view class="left-border"><text class="mgl10">基本信息</text></view>
		</view>		
			
		<!-- 企业客户 -->
		<uni-forms :value="enterpriseForm" ref="enterpriseForm" validate-trigger="bind" err-show-type="toast">
			<uni-forms-item name="name" required label="客户姓名">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.name" placeholder="请输入客户姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="socialUnifiedCode" required label="社会统一代码">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.socialUnifiedCode" placeholder="请输入社会统一代码"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="phone" required label="联系电话">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.phone" placeholder="请输入联系电话"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="registerTime" required label="注册时间">
				<picker mode="date" :value="enterpriseForm.registerTime" @change="bindDateChange">
					<view class="picker-view flex-between">
						<text>{{enterpriseForm.registerTime ? enterpriseForm.registerTime : '请选择'}}</text>
						<text class="cuIcon-unfold lg text-gray"></text>
					</view>
				</picker>
			</uni-forms-item>
			<uni-forms-item name="registeredCapital" required label="注册资金(万元)">
				<uni-easyinput type="digit" :inputBorder="true" v-model="enterpriseForm.registeredCapital" placeholder="请输入注册资金"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="empNum" required label="员工人数">
				<uni-easyinput type="number" :inputBorder="true" v-model="enterpriseForm.empNum" placeholder="请输入员工人数"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="registerAddr" required label="注册地址">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.registerAddr" placeholder="请输入注册地址"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="linkman" required label="联系人">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.linkman" placeholder="请输入联系人"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="linkPhone" required label="联系人电话">
				<uni-easyinput type="number" :inputBorder="true" v-model="enterpriseForm.linkPhone" placeholder="请输入联系人电话"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="businessAddr" required label="经营地址">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.businessAddr" placeholder="请输入经营地址"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="businessSource" required label="业务来源">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.businessSource" placeholder="请输入业务来源"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="businessScope" required label="经营范围">
				<uni-easyinput type="textarea" :inputBorder="true" v-model="enterpriseForm.businessScope" placeholder="请输入经营范围"></uni-easyinput>
			</uni-forms-item>
			<!-- 法人信息 -->
			<view class="bottom-border mab15">
				<view class="left-border"><text class="mgl10">法人信息</text></view>
			</view>
			<uni-forms-item name="legalName" required label="姓名">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.legalName" placeholder="请输入法人姓名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="legalGender" required label="性别">
				<uni-data-checkbox v-model="enterpriseForm.legalGender" :localdata="genderList"></uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="legalIdNumber" required label="身份证号码">
				<uni-easyinput type="idcard" :inputBorder="true" v-model="enterpriseForm.legalIdNumber" placeholder="请输入身份证号码"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="legalHukouAddr" required label="户口所在地">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.legalHukouAddr" placeholder="请输入户口所在地"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="legalPhone" required label="联系电话">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.legalPhone" placeholder="请输入联系电话"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="legalHomeAddr" required label="家庭地址">
				<uni-easyinput type="text" :inputBorder="true" v-model="enterpriseForm.legalHomeAddr" placeholder="请输入家庭地址"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="isExistRelated" required label="是否存在关联人">
				<uni-data-checkbox v-model="enterpriseForm.isExistRelated" :localdata="isExistList"></uni-data-checkbox>
			</uni-forms-item>
		</uni-forms>
		
		<view v-if="enterpriseForm.isExistRelated == 1">				
			<block v-for="(item,index) in list" :key="index">
				<uni-forms :value="item" ref="item" validate-trigger="bind" err-show-type="toast">
				<view class="bottom-border mab15">
					<view class="left-border"><text class="mgl10">关联人{{index+1}}</text></view>
				</view>
				<uni-forms-item required name="type" label="关联人类型">
					<uni-data-checkbox v-model="item.type" :localdata="cusTypeList"></uni-data-checkbox>
				</uni-forms-item>
				<!-- 个人关联人 -->
				<view v-if="item.type == 0">
					<uni-forms-item name="relatedName" required label="关联人名称">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.relatedName" placeholder="请输入关联人名称"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="phone" required label="联系电话">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.phone" placeholder="请输入联系电话"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="maritalStatus" required label="婚姻状况">
						<picker @change="relatedMaritalChange($event,item)" :value="item.maritalStatusVal" :range="maritalList" :range-key="'name'">
							<view class="picker-view flex-between">
								<text>{{item.maritalStatusVal ? maritalList[item.maritalStatusVal].name : '请选择'}}</text>
								<text class="cuIcon-unfold lg text-gray"></text>
							</view>
						</picker>
					</uni-forms-item>
					<uni-forms-item name="idCard" required label="身份证号码">
						<uni-easyinput type="idcard" :inputBorder="true" v-model="item.idCard" placeholder="请输入身份证号码"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="age" required label="年龄">
						<uni-easyinput type="number" :inputBorder="true" v-model="item.age" placeholder="请输入年龄"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="gender" required label="性别">
						<uni-data-checkbox v-model="item.gender" :localdata="genderList"></uni-data-checkbox>
					</uni-forms-item>
					<uni-forms-item name="address" required label="联系地址">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.address" placeholder="请输入联系地址"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="relatedEducation(index)" required label="学历">
						<picker @change="educationChange" :value="item.educationVal" :range="educationList" :range-key="'name'">
							<view class="picker-view flex-between">
								<text>{{item.educationVal ? educationList[item.educationVal].name : '请选择'}}</text>
								<text class="cuIcon-unfold lg text-gray"></text>
							</view>
						</picker>
					</uni-forms-item>
					<uni-forms-item name="employer" required label="工作单位">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.employer" placeholder="请输入工作单位"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="position" required label="职务">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.position" placeholder="请输入职务"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="relationship" required label="关联关系">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.employer" placeholder="请输入关联关系"></uni-easyinput>
					</uni-forms-item>
				</view>
				<!-- 企业关联人 -->
				<view v-if="item.type == 1">
					<uni-forms-item name="relatedName" required label="关联人名称">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.relatedName" placeholder="请输入关联人名称"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="address" required label="联系住址">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.address" placeholder="请输入联系住址"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="socialUnifiedCode" required label="社会统一代码">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.socialUnifiedCode" placeholder="请输入社会统一代码"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="registeredCapital" required label="注册资金(万元)">
						<uni-easyinput type="digit" :inputBorder="true" v-model="item.registeredCapital" placeholder="请输入注册资金"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="registeredTime" required label="注册时间">
						<picker mode="date" :value="item.registeredTime" @change="relatedtimeChange($event,item)">
							<view class="picker-view flex-between">
								<text>{{item.registeredTime ? item.registeredTime : '请选择'}}</text>
								<text class="cuIcon-unfold lg text-gray"></text>
							</view>
						</picker>
					</uni-forms-item>
					<uni-forms-item name="industry" required label="所属行业">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.industry" placeholder="请输入所属行业"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="legalPersonName" required label="法人姓名">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.legalPersonName" placeholder="请输入法人姓名"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="phone" required label="联系电话">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.phone" placeholder="请输入联系电话"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="relationship" required label="关联关系">
						<uni-easyinput type="text" :inputBorder="true" v-model="item.relationship" placeholder="请输入关联关系"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="shareholdersSituation" required label="股东情况">
						<uni-easyinput type="textarea" :inputBorder="true" v-model="item.shareholdersSituation" placeholder="请输入关联关系"></uni-easyinput>
					</uni-forms-item>				
				</view>
				<view class="foot-btn btn-rig pad-bt">
					<button class="mini-btn round def-btn mar-lr" type="primary" size="mini" @click="saveContact(item)">保存</button>
					<button class="mini-btn round" type="warn" size="mini" @click="deleteContact(index,item)">删除</button>
				</view>
				</uni-forms>
			</block>
		</view>
		<uni-pagination v-if="enterpriseForm.isExistRelated == 1" title="标题文字" show-icon="true" :total="total" :current="page" @change="pageChange"></uni-pagination>
		<button v-if="enterpriseForm.isExistRelated == 1" class="cu-btn block bg-blue margin-tb-sm lg round" @click="addContact">新增关联人</button>
		<button class="button" @click="submitForm('personageForm')">保存</button>
	</view>
</template>

<script>
	import uniPagination from '@/components/uni-pagination/uni-pagination.vue'
	export default {
		components: {uniPagination},
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
				legalgenderList: [{
					text: '男',
					value: 1
				},
				{
					text: '女',
					value: 2
				}],//法人性别列表
				isExistList: [{
					text: '否',
					value: 0
				},
				{
					text: '是',
					value: 1
				}],//是否存在关联人列表
				maritalStatusVal: '',//婚姻状况列表下标
				educationVal: '', //学历列表下标			
				enterpriseForm: {
					name: '', //客户姓名
					socialUnifiedCode: '', //社会统一代码
					phone: '', //联系电话
					registerTime: '',//注册时间
					registeredCapital: '',//注册资金
					empNum: '', //员工人数
					registerAddr: '', //注册地址
					linkman: '', //联系人
					linkPhone: '', //联系人电话
					businessAddr: '', //经营地址
					businessSource: '', //业务来源
					businessScope: '', //经营范围
					
					legalName: '', //法人姓名
					legalGender: 1, //性别
					legalIdNumber: '', //身份证号码
					legalHukouAddr: '', //户口所在地
					legalPhone: '', //联系电话	
					legalHomeAddr: '', //家庭地址	
					isExistRelated: 0, //是否存在联系人
				},//企业form
				enterpriseRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入客户姓名',
						}]
					},
					socialUnifiedCode: {
						rules: [{
							required: true,
							errorMessage: '请输入社会统一代码',
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
					registerTime: {
						rules: [{
							required: true,
							errorMessage: '请选择注册时间',
						},]
					},
					registeredCapital: {
						rules: [{
							required: true,
							errorMessage: '请输入注册资金',
						},{
							validateFunction: function(rule, value, data, callback) {
								let pattern = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
								if (!pattern.test(value)) {
									callback('请输入正确金额格式,可保留两位小数')
								}
								return true
							}
						}]
					},
					empNum: {
						rules: [{
							required: true,
							errorMessage: '请输入员工人数',
						}]
					},
					registerAddr: {
						rules: [{
							required: true,
							errorMessage: '请输入注册地址',
						}]
					},
					linkman: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人姓名',
						}]
					},
					linkPhone: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人手机号码',
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
					businessAddr: {
						rules: [{
							required: true,
							errorMessage: '请输入经营地址',
						}]
					},
					businessSource: {
						rules: [{
							required: true,
							errorMessage: '请输入业务来源',
						}]
					},
					businessScope: {
						rules: [{
							required: true,
							errorMessage: '请输入经营范围',
						}]
					},
					legalName: {
						rules: [{
							required: true,
							errorMessage: '请输入法人姓名',
						}]
					},
					legalIdNumber: {
						rules: [{
							required: true,
							errorMessage: '请输入法人身份证号',
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
					legalHukouAddr: {
						rules: [{
							required: true,
							errorMessage: '请输入法人户口所在地',
						}]
					},
					legalPhone: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人手机号码',
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
					legalHomeAddr: {
						rules: [{
							required: true,
							errorMessage: '请输入家庭地址',
						}]
					}
				},
				hideRequiredAsterisk: false,
				list: [{
					// 个人关联人
					type: 0,
					relatedName: '',//关联人名称
					phone: '',//联系电话
					maritalStatusVal: '',
					maritalStatus: '',//婚姻状况
					idCard: '',//身份证号码
					age: '',//年龄
					gender: 1,//性别
					address: '',//联系地址
					educationVal: '',
					education: '',//学历
					employer: '',//工作单位
					position: '',//职务
					relationship: '',//关联关系
					//企业关联人
					socialUnifiedCode: '',//社会统一代码
					registeredCapital: '',//注册资金
					registeredTime: '',//注册时间
					industry: '',//所属行业
					legalPersonName: '',//法人姓名
					shareholdersSituation: ''//股东情况
				}],//关联人列表
				listItemRules: {
					relatedName: {
						rules: [{
							required: true,
							errorMessage: '请输入关联人名称',
						}]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '请输入联系电话',
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
						}]
					},
					idCard: {
						rules: [{
							required: true,
							errorMessage: '请输入身份证号码',
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
					address: {
						rules: [{
							required: true,
							errorMessage: '请输入联系地址',
						}]
					},
					education: {
						rules: [{
							required: true,
							errorMessage: '请选择学历',
						}]
					},
					employer: {
						rules: [{
							required: true,
							errorMessage: '请输入工作单位',
						}]
					},
					position: {
						rules: [{
							required: true,
							errorMessage: '请输入职务',
						}]
					},
					relationship: {
						rules: [{
							required: true,
							errorMessage: '请输入关联关系',
						}]
					},
					socialUnifiedCode: {
						rules: [{
							required: true,
							errorMessage: '请输入社会统一代码',
						}]
					},
					registeredCapital: {
						rules: [{
							required: true,
							errorMessage: '请输入注册资金',
						},{
							validateFunction: function(rule, value, data, callback) {
								let pattern = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
								if (!pattern.test(value)) {
									callback('请输入正确金额格式,可保留两位小数')
								}
								return true
							}
						}]
					},
					registeredTime: {
						rules: [{
							required: true,
							errorMessage: '请选择注册时间',
						}]
					},
					industry: {
						rules: [{
							required: true,
							errorMessage: '请输入所属行业',
						}]
					},
					legalPersonName: {
						rules: [{
							required: true,
							errorMessage: '请输入法人姓名',
						}]
					},
					shareholdersSituation: {
						rules: [{
							required: true,
							errorMessage: '请输入股东情况',
						}]
					}
				},
				page: 1,
				pageSize: 10,
				total: 1,
				companyId: ''
			}
		},
		onReady() {
			this.$refs.enterpriseForm.setRules(this.enterpriseRules)
		},
		onLoad(option) {
			 if(option.id){
				this.customerId = option.id
				this.getMsg()
			 }
			 if(option.companyId){
				 this.companyId = option.companyId
				 this.getLinkList()
			 }
		},
		methods: {
			// 获取详情信息
			getMsg(){
				this.$http.get('/api-crms/customer/applet/get/customer',{
					type: 1
				}).then(res => {
					  //   企业表单赋值
					  this.enterpriseForm = res.data
				}).catch(function (error) {});
			},
			// 获取关联人列表
			getLinkList(){
				let params = {
					page: this.page,
					size: this.pageSize,
					customerId: this.companyId
				}
				this.$http.get('/api-crms/crms-company-personal/companyPersonalList',{params}).then(res => {
					this.list = res.data.list
					this.total = res.data.totalCount
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
			//关联人性别选择
			legalGenderChange(e) {
				this.personageForm.legalGender = e.detail.value
			},
			//是否有关联人
			isExistChange(e) {
				this.personageForm.isExistRelated = e.detail.value
			},
			//关联人婚姻状况选择
			relatedMaritalChange(e,item) {
				item.maritalStatusVal = e.detail.value
				item.maritalStatus = this.maritalList[e.detail.value].value
			},
			//分页选择
			pageChange(e){
				this.page = e.current
				this.getLinkList()
			},
			//注册时间选择
			bindDateChange(e) {
				this.enterpriseForm.registerTime = e.detail.value
			},
			//企业关联人注册时间选择
			relatedtimeChange(e,item) {
				item.registeredTime = e.detail.value
			},
			//提交表单
			submitForm(form) {
				this.$refs[form].submit()
					.then((res) => {
						if(this.customerId){
							//编辑企业
							let result = this.list.map(e => e.id)
							this.personageForm.relatedId = result
							this.$http.post('/api-crms/crms/customer/updateCompany',this.enterpriseForm).then(res => {
								uni.showToast({title: '编辑成功'})
								this.goto('/pages/customer/customer')
							}).catch(function (error) {});
						}else{
							//新增企业
							let result = this.list.map(e => e.id)
							this.personageForm.relatedId = result
							this.$http.post('/api-crms/crms/customer/saveCompany',this.personageForm).then(res => {
								uni.showToast({title: '添加成功'})
								this.goto('/pages/customer/customer')
							}).catch(function (error) {});
						}
					}).catch((errors) => {})
			},
			//添加关联人
			addContact(){
				let CONTACT_INFO = {
					type: 0,
					relatedName: '',
					phone: '',
					maritalStatusVal: '',
					maritalStatus: '',
					idCard: '',
					age: '',
					gender: '',
					address: '',
					educationVal: '',
					education: '',
					employer: '',
					position: '',
					relationship: '',
					
					socialUnifiedCode: '',
					registeredCapital: '',
					registeredTime: '',
					industry: '',
					legalPersonName: '',
					shareholdersSituation: ''
				}
				this.list.push({...CONTACT_INFO})
			},
			//保存关联人
			saveContact(item){
				// this.$refs[item].submit()
				// 	.then((res) => {
						this.$http.post('/api-crms/crms-company-personal/insertCompanyPersonal',item).then(res => {
							uni.showToast({title: '添加成功'})
							item.id = res.data[0].id
						}).catch(function (error) {});
					// }).catch((errors) => {})
			},
			//删除关联人
			deleteContact(index,item){
				let _this = this
				uni.showModal({
				    title: '提示',
				    content: '是否删除该关联人',
				    success: function (res) {
				        if (res.confirm) {
							if(item.id){
								let arr = []
								arr.push(item.id)
								this.$http.post('/api-crms/crms-company-personal/deleteCompanyPersonal',arr).then(res => {
									this.getLinkList()
								}).catch(function (error) {});
							}
				            _this.list.splice(index,1)
							_this.total = _this.total-1
							uni.showToast({title: '删除成功'})
				        } else if (res.cancel) {}
				    }
				});
			},
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

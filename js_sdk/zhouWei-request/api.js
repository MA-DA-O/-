// import $http from './requestConfig';
// // let host = 'http://192.168.31.140:8080';
// // let host = 'http://192.168.31.136:8080';

// let host = 'http://dq.huorantech.cn'

// export const login = p => post('/apiHrmsAuth/hrms/auth/userlogin/login', p); //登录
// export const phoneCode = p => get('/apiHrmsAuth/hrms/auth/userlogin/sendCode', p); //找回密码验证码

// export const verifyMobile = p => post('/apiHrmsAuth/hrms/auth/userlogin/verifyMobile', p); //忘记密码
// export const getBackPwd = p => post('/apiHrmsAuth/hrms/auth/userlogin/getBackPwd', p); //设置新密码
// export const querycustomerList = p => $http.get('/api-crms/crms/customer/queryList', p); //查询客户
// export const deleteCustomer = p => del('/api-crms/crms/customer/deleteCustomer', p); //删除客户
// export const queryDetails = p => get('/api-crms/crms/customer/queryDetails', p); //查询客户详情
// export const savePersonal = p => post('/api-crms/crms/customer/savePersonal', p); //添加个人客户
// export const saveCompany = p => post('/api-crms/crms/customer/saveCompany', p); //添加企业客户
// export const updateCompany = p => post('/api-crms/crms/customer/updateCompany', p); //编辑企业客户
// export const updatePersonal = p => post('/api-crms/crms/customer/updatePersonal', p); //编辑个人客户
// export const listEmployeeName = p => get('/api-hrms/hrms/employee/listEmployeeName', p); //查询所有的客户经理
// export const updatePwd = p => post('/apiHrmsAuth/hrms/auth/userlogin/updatePwd', p); //修改平台超管员密码
// export const loginLogList = p => get('/apiHrmsAuth/hrms/auth/systemLog/loginLogList', p); //平台日志列表
// export const rolePermissionList = p => get('/apiHrmsAuth/hrms/auth/permission/rolePermissionList', p); //角色权限列表
// export const queryPermission = p => get('/apiHrmsAuth/hrms/auth/permission/queryPermissionByRoleId', p); //查看角色权限
// export const saveRolePermission = p => post('/apiHrmsAuth/hrms/auth/permission/saveRolePermission', p); //新增角色权限
// export const updateRolePermission = p => post('/apiHrmsAuth/hrms/auth/permission/updateRolePermission', p); //编辑角色权限
// export const delRolePermission = p => post('/apiHrmsAuth/hrms/auth/permission/delRolePermission', p); //删除角色权限
// export const jurTree = p => get('/apiHrmsAuth/hrms/auth/permission/tree', p); //查询所有权限树形结构

// // 后台-人资-部门
// export const departmentTree = p => get('/api-hrms/hrms/dept/tree',p); //部门树形结构数据（显示部门）
// export const addDepartment = p => post('/api-hrms/hrms/dept/save', p); //新增一条部门信息
// export const deleteDepartment = p => del('/api-hrms/hrms/dept/delete', p); //删除部门信息（树结构）
// export const editDepartment = p => put('/api-hrms/hrms/dept/update', p); //根据id修改部门信息(编辑)
// export const dragDepartment = p => put('/api-hrms/hrms/dept/update/sort', p); //修改部门的拖拽排序（传id和排序）
// export const rulesAll = p => get('/api-hrms/hrms/position/listRoleIdAndName', p); //所有角色id+名称
// export const postAll = p => post('/api-hrms/hrms/position/listPositionIdAndName', p); //所有职位id+名称
// export const ruleJurisdiction = p => post('/api-hrms/hrms/employee/tree', p); //新增员工-角色对应的权限
// export const clickDepartment = p => get('/api-hrms/hrms/dept/children', p); //点击部门，搜索该部门名下的员工
// // 后台-人资-员工列表
// export const deleteStaff = p => del('/api-hrms/hrms/employee/delete', p); //根据id删除员工
// export const forbiddenStaff = p => get('/api-hrms/hrms/employee/forbidInfo', p); //禁用详情（为啥禁用）
// export const queryStaff = p => get('/api-hrms/hrms/employee/getEmployeeAndDeptById', p); //根据id查询员工的基本信息
// export const queryStaffName = p => get('/api-hrms/hrms/employee/getEmployeeById', p); //根据id查询员工姓名
// export const staffMessage = p => get('/api-hrms/hrms/employee/info', p); //根据id查询员工详细信息
// export const staffList = p => get('/api-hrms/hrms/employee/list', p); //查询列表
// export const staffResetPwd = p => get('/api-hrms/hrms/employee/reset', p); //员工重置密码
// export const addStaff = p => post('/api-hrms/hrms/employee/save', p); //新增员工
// export const startStaff = p => get('/api-hrms/hrms/employee/start', p); //启用员工
// export const stopStaff = p => post('/api-hrms/hrms/employee/stop', p); //禁用员工
// export const roleStaff = p => post('/api-hrms/hrms/employee/tree', p); //角色对应权限
// export const editStaff = p => post('/api-hrms/hrms/employee/update', p); //修改员工
// // 后台-员工-导入
// export const importStaff = p => post('/api-hrms/hrms/employee/excelImport',p); //导入员工（上传）
// // 后台-员工-导出
// export const excelStaffFile = `${host}/api-hrms/hrms/employee/excelExport`; //导出员工文件
// export const excelTemplateStaff = `${host}/api-hrms/hrms/employee/excelTemplate`; //导出员工模板
// // 后台-人资-职位
// export const deletePost = p => del('/api-hrms/hrms/position/delete', p); //删除职位信息
// export const searchPostId = p => get('/api-hrms/hrms/position/info', p); //职位id查询职位信息详情
// export const postList = p => get('/api-hrms/hrms/position/list', p); //职位列表+查询
// export const addPostMessage = p => post('/api-hrms/hrms/position/save', p); //新增职位信息
// export const editPostMessage = p => put('/api-hrms/hrms/position/update', p); //修改职位信息


// // 系统-新增角色权限
// export const newAddRolePermission = p => post('/apiHrmsAuth/hrms/auth/permission/saveRolePermission', p); //新增角色权限
// export const editRolePermission = p => post('/apiHrmsAuth/hrms/auth/permission/updateRolePermission', p); //修改角色权限
// export const getPermissionIds = p => get('/apiHrmsAuth/hrms/auth/permission/queryPermissionArrById', p); //已有权限的ids

// // 工作台--人力资源
// // 绑定手机号
// export const workBindPhone = p => get('/api-hrms/hrms/user/binding', p); 
// // 微信解绑
// export const wxUnbundle = p => get('/api-hrms/hrms/user/cancel', p); 
// // 验证码
// export const workPhoneAuthCord = p => get('/api-hrms/hrms/user/code', p); 
// // 用户信息
// export const workUserMsg = p => get('/api-hrms/hrms/user/info', p); 
// // 修改用户信息9
// export const woreEditUserMsg = p => post('/api-hrms/hrms/user/update', p); 
// // 修改密码
// export const workEditPwd = p => get('/api-hrms/hrms/user/updatePassword', p); 
// // 头像上传
// export const headImgUp = p => post('/api-hrms/hrms/user/uploadFile', p); 


// // 工作台--客户资源管理
// // 删除
// export const workClientDel = p => post('/api-crms/crms/workbench/delete', p); 
// // 详情
// export const workClientParticulars = p => get('/api-crms/crms/workbench/info', p); 
// // 客户信息列表展示
// export const workClientMsgList = p => get('/api-crms/crms/workbench/list', p); 
// // 获取当前客户部门经理--下属客户经理
// export const workClientManager= p => get('/api-crms/crms/workbench/manager', p); 
// // 不通过
// export const workClientNoPass = p => get('/api-crms/crms/workbench/noPass', p); 
// // 通过审核
// export const workClientPass = p => get('/api-crms/crms/workbench/pass', p); 
// // 新增企业类型客户
// export const workClientAddEnterprise = p => post('/api-crms/crms/workbench/saveCompany', p);
// // 新增企业类型客户新版接口
// export const insertCompany = p => post('/api-crms/crms/workbench/insertCompany', p); 
// // 新增个人类型客户
// export const workClientMsg = p => post('/api-crms/crms/workbench/savePersonal', p); 
// // 修改企业类型客户
// export const workEditClientEnterpriseMsg = p => post('/api-crms/crms/workbench/updateCompany', p); 
// // 修改企业类型客户新版接口
// export const updateCompanyNew = p => post('/api-crms/crms/workbench/updateCompanyNew', p); 
// // 修改个人类型客户
// export const workEditClientMsg = p => post('/api-crms/crms/workbench/updatePersonal', p); 


// // 登录微信扫码（图片）
// // export const WXCordImg = p => get('/apiHrmsAuth/hrms/auth/userlogin/wxLoginUrl', p); 
// // 微信回调授权码(不用管)
// export const WXAuthCord = p => get('/apiHrmsAuth/hrms/auth/userlogin/user/callback', p);  
// // 登录绑定手机号
// export const bindPhone = p => post('/apiHrmsAuth/hrms/auth/userlogin/bindPhoneAndOpenId', p);  
// // 登录手机验证码
// export const phoneAuthCord = p => get('/apiHrmsAuth/hrms/auth/userlogin/sendCode', p); 
// // 判断手机是否存在
// export const phoneExist = p => get('/apiHrmsAuth/hrms/auth/userlogin/isPhoneExist', p); 

// // 工作台--担保业务
// //业务申请列表
// export const businessApplyList = p => get('/api-guarantee/dg-apply-amount-info/businessApplicationList', p); 
// //新建业务
// export const businessApplication = p => post('/api-guarantee/dg-apply-amount-info/businessApplication', p); 
// // 获取所有客户的信息
// export const getAllClient = p => get('/api-crms/crms/customer/queryCompanyCodeAndName', p); 
// //客户编号/取得信息 
// export const companyInfoBySth = p => post('/api-guarantee/dg-apply-amount-info/companyInfoBySth', p);
// // 业务申请-查看
// export const businessApplyWatch = p => get('/api-guarantee/dg-apply-amount-info/businessApplicationDetail', p); 
// // 业务-修改
// export const businessApplyEdit = p => post('/api-guarantee/dg-apply-amount-info/updateBusinessApplication', p);
// // 业务申请-审核
// export const businessApplyAudit = p => post('/api-guarantee/dg-apply-amount-info/approvalBusinessApplication', p); 
// // 业务-撤销
// export const businessApplyRepeal = p => get('/api-guarantee/dg-apply-amount-info/revokeBusinessApplication', p);
// // 所有银行
// export const allBankName = p => get('/api-guarantee/dg-bank/bankList', p);

// // 担保调查列表
// export const guaranteeList = p => get('/api-guarantee/dg-guarantee-assign-user/guaranteeList', p);
// // 查看详情功能--领导/调查员
// export const guaranteeDetails = p => get('/api-guarantee/dg-guarantee-assign-user/guaranteeDetail', p);
// // 调查功能
// export const guaranteeSurvey = p => post('/api-guarantee/dg-guarantee-assign-user/investigateGuarantee', p);
// // 领导审核
// export const guaranteeleader = p => post('/api-guarantee/dg-guarantee-assign-user/approvalGuarantee', p);
// // 指派A/B角
// export const guaranteeDesignateAB = p => post('/api-guarantee/dg-guarantee-assign-user/assignCorners', p);

// // 指派--查询所有部门底下的员工---限制版
// // export const designateTrees = p => get('/api-hrms/hrms/dept/trees', p);

// // 指派树---不做限制版-仅工作会
// export const designateEmpTrees = p => get('/api-hrms//hrms/dept/empTrees', p);


// // 关联人列表
// export const getLinkmanList = p => get('/api-crms/crms-company-personal/companyPersonalList', p);
// // 查询关联人
// export const searchLinkmanList = p => get('/api-crms/crms-company-personal/selectCompanyPersonal', p);
// // 查询关联人新版
// export const NewsearchLinkmanList = p => get('/api-crms/crms-company-personal/selectCompanyPersonal', p);
// // 删除关联人
// export const delLinkmanList = p => post('/api-crms/crms-company-personal/deleteCompanyPersonal', p);
// // 删除关联人新版
// export const NewdelLinkmanList = p => post('/api-crms/crms-company-personal/deleteCompanyPersonal', p);
// // 新增关联人
// export const newLinkmanList = p => post('/api-crms/crms-company-personal/insertCompanyPersonal', p);
// // 新增关联人新版
// export const newLinkList = p => post('/api-crms/crms-company-personal/insertCompanyPersonal', p);
// // 编辑关联人
// export const editLinkmanList = p => post('/api-crms/crms-company-personal/updateCompanyPersonal', p);
// // 编辑关联人新版
// export const NeweditLinkmanList = p => post('/api-crms/crms-company-personal/updateCompanyPersonal', p);





// // 资产部--审核
// export const assetAudit = p => post('/api-guarantee/dg-assets-investigation/approvalAssets', p);
// // 资产部--查看
// export const assetWatch = p => get('/api-guarantee/dg-assets-investigation/assetsDetail', p);
// // 资产部--列表
// export const assetList = p => post('/api-guarantee/dg-assets-investigation/assetsList', p);
// // 资产部--指派
// export const assetAssign = p => post('/api-guarantee/dg-assets-investigation/assignCorners', p);
// // 资产部--调查
// export const assetSurvey = p => post('/api-guarantee/dg-assets-investigation/investigateAssets', p);

// // 信息部--列表
// export const messageList = p => get('/api-guarantee/dg-message-investigation/messageList', p);
// // 信息部详情
// export const messageDetail = p => get('/api-guarantee/dg-message-investigation/messageDetail', p);
// // 信息部--指派
// export const messageAssign = p => post('/api-guarantee/dg-message-investigation/assignCorners', p);
// // 信息部--调查
// export const messageSurvey = p => post('/api-guarantee/dg-message-investigation/investigateMessage', p);
// // 信息部审核
// export const messageAudit = p => post('/api-guarantee/dg-message-investigation/approvalMessage', p);

// // 合规调查-指派
// export const complianceAssign = p => get('/api-guarantee/compliance/investigation/assign', p);
// //  合规-审核
// export const complianceAudit = p => post('/api-guarantee/compliance/investigation/check', p);
// //  合规-列表
// export const complianceList = p => get('/api-guarantee/compliance/investigation/list', p);
// //  合规-查看详情
// export const complianceDetail = p => get('/api-guarantee/compliance/investigation/query', p);
// //  合规-调查
// export const complianceSurvey = p => post('/api-guarantee/compliance/investigation/survey', p);

// // 工作会-审议
// export const workAudit = p => post('/api-guarantee/work/conference/check', p);
// //工作会-所有审核意见
// export const workOpinion = p => get('/api-guarantee/work/conference/getAuditOpinion', p);
// // 工作会列表
// export const workList = p => get('/api-guarantee/work/conference/list', p);
// // 工作会-查看
// export const workDetail = p => get('/api-guarantee/work/conference/query', p);
// // 工作会-评委抽取
// export const workExtract = p => post('/api-guarantee/work/conference/theJudgesDrawn', p);

// // 贷审会-审议
// export const loansAudit = p => post('/api-guarantee/committee/consider/check', p);
// // 贷审会-列表
// export const loansList = p => get('/api-guarantee/committee/consider/list', p);
// // 贷审会-查看
// export const loansDetail = p => get('/api-guarantee/committee/consider/query', p);
// // 贷审会--获取抽取的评委
// export const loansJudge = p => get('/api-guarantee/committee/consider/theJudgesDrawn', p);




// /* 业务+担保 上传文件 */
// export const guaranteeUploadFile = p => post('/api-guarantee/dg-apply-amount-info/uploadFile', p); 
// /* 业务+担保 删除文件 */
// export const guaranteeDeleteFile = p => get('/api-guarantee/dg-apply-amount-info/deleteServerFile', p); 
// //担保函的接口
// export const guaranteeLetterList = p => post('/api-guarantee/dg-guarantee-letter-assign-user/guaranteeLetterList', p); //担保函列表
// export const updateStatus = p => post('/api-guarantee/dg-guarantee-letter-assign-user/updateStatus', p); //用户提交审核意见

// //回款确认
// export const paymentList = p => post('/api-guarantee/dg-payment-confirmation-consider/paymentConfirmationList', p); //回款确认列表
// export const updatePayment = p => post('/api-guarantee/dg-payment-confirmation-consider/updatePaymentConfirmation', p); //更新回款确认

// //放款通知
// export const loanNoticeList = p => post('/api-guarantee/dg-loan-notice/loanNoticeList', p); //放款通知列表
// export const updateLoanNotice = p => post('/api-guarantee/dg-loan-notice/updateLoanNotice', p); //放款通知确认


// export const auditProcessList = p => get('/api-guarantee/dg-audit-process/auditProcessList', p);//审核流程进程列表
// export const auditProcessPop = p => get('/api-guarantee/dg-audit-process/getProcessId', p);//审核流程进程--弹框

// //获取当前用户角色
// export const getNowRole = p => get('/api-guarantee/dg-apply-amount-info/getRoles', p);



// // 业务-导出
// export const businessExportList = `${host}/api-guarantee/dg-apply-amount-info/excelExport`; 
// // 担保-导出
// export const guaranteeExportList = `${host}/api-guarantee/dg-guarantee-assign-user/excelExport`; 
// // 资产-导出
// export const assetExportList = `${host}/api-guarantee/dg-assets-investigation/excelExport`; 
// // 信息-导出
// export const messageExportList = `${host}/api-guarantee/dg-message-investigation/excelExport`; 
// // 合规-导出
// export const complianceExportList = `${host}/api-guarantee/compliance/investigation/excelExport`; 
// // 工作会-导出
// export const workExportList = `${host}/api-guarantee/work/conference/excelExport`; 
// // 贷审会-导出
// export const loansExportList = `${host}/api-guarantee/committee/consider/excelExport`; 


// export const excelTemplate = `${host}/api-crms/crms/customer/excelTemplate`; //导出客户模板
// export const excelExport = `${host}/api-crms/crms/customer/excelExport`; //导出客户
// export const excelImport = `${host}/api-crms/crms/customer/excelImport`; //导入excal

// export const excelExportStaff = `${host}/api-crms/crms/customer/excelExport`; //导出客户
// export const excelImportStaff = `${host}/api-crms/crms/customer/excelImport`; //导入员工excal


// export const excelExportLetter = `${host}/api-guarantee/dg-guarantee-letter-assign-user/guaranteeLetterListExport`; //导出担保函列表
// export const exportGuaranteeLetter = `${host}/api-guarantee/dg-guarantee-letter-assign-user/exportGuaranteeLetter`; //导出担保函

// export const excelExportPayment = `${host}/api-guarantee/dg-payment-confirmation-consider/paymentConfirmationListExport`; //导出回款确认列表数据

// export const loanNoticeListExport = `${host}/api-guarantee/dg-loan-notice/loanNoticeListExport`; //导出放款通知列表数据
// export const exportLoanNotice = `${host}/api-guarantee/dg-loan-notice/exportLoanNotice`; //导出放款通知
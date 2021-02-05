function fMoney (s, n) {
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  let l = s.split('.')[0].split('').reverse()
  let r = s.split('.')[1]
  let t = ''
  for(let i = 0; i < l.length; i ++ ) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
}

function toDateTime (date, time) {
  if (!date) return ''
  date = date.toString()
  time = time ? time.toString() : ''
  let str = `${date.substr(0, 4)}-${date.substr(4, 2)}-${date.substr(6, 2)}`
  if (date.length == 14) {
    str += ` ${date.substr(8, 2)}:${date.substr(10, 2)}:${date.substr(12, 2)}`
  } else if (date.length == 6) {
    str = `${date.substr(0, 2)}:${date.substr(2, 2)}:${date.substr(4, 2)}`
  } else if (time) {
    str += ` ${time.substr(0, 2)}:${time.substr(2, 2)}:${time.substr(4, 2)}`
  }
  return str
}

function dateFormatFn(date){
	Y = date.getFullYear() + '-';
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	D = date.getDate() + ' ';
　　let newDate = Y+M+D
　　return newDate
}

function fMoney2 (m) {
  return parseFloat(m).toFixed(2)
}

// 数字转换大写中文
function fMoney3(money) {
  //汉字的数字
  let cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  let cnIntRadice = new Array('', '拾', '佰', '仟');//基本单位
  let cnIntUnits = new Array('', '万', '亿', '兆');//对应整数部分扩展单位
  let cnDecUnits = new Array('仟', '佰', '拾', ''); //对应小数部分单位
  let cnInteger = '元整';//整数金额时后面跟的字符
  // let
  let cnIntLast = '万'; //整数无小数点的单位
  let int;//金额整数部分
  let dot; //金额小数部分
  let chineseStr = ''; //输出的中文金额字符串
  let parts;    //分离金额后用的数组，预定义
  if (money == '') { return ''; }
  //转换为字符串，获取小数点后的值与整数分离
  money = money.toString();
  if (money.indexOf('.') == -1) {
      int = money;
      dot = '';
  } else {
      parts = money.split('.');//整数小数分离
      int = parts[0];
      dot = parts[1].substr(0, 4);//最多四位小数
  }
  //十进制转换，处理整数部分单位
  if (parseInt(int, 10) > 0) {
      let zeroCount = 0;
      let IntLen = int.length;
      for (let i = 0; i < IntLen; i++) {//循环整数部分，给每个位赋值，且判断是否整除4，添加额外赋值
          let n = int.substr(i, 1);
          let p = IntLen - i - 1;
          let q = p / 4;
          let m = p % 4;
          if (n == '0') {
          zeroCount++;
          } else {
          if (zeroCount > 0) {
              chineseStr += cnNums[0];
          }
          //归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
          }
          if (m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
          }
      }
      chineseStr += cnIntLast;
  }
  //小数部分
  if (dot != '') {
      let decLen = dot.length;
      for (let i = 0; i < decLen; i++) {
          let n = dot.substr(i, 1);
          if (n != '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
          }
      }
  }
  // if (chineseStr == '') {// 为0时，
  //     chineseStr += cnNums[0] + cnIntLast + cnInteger;
  // }
  // else if (dot == '') {//小数点为空值时
      chineseStr += cnInteger;
  // }
  return chineseStr;
}

function orderreleaseType (sts) {
  const status = {
    '0': '手动发布',
    '1': '定时发布',
  }
  return status[sts] || '未知状态'
}

function auditStatus (sts) {
  const status = {
    '1': {text: '审核中', bgColor: '#FCF0E5',textColor: '#E7BB8B'},
    '2': {text: '已通过', bgColor: '#E0F6EF',textColor: '#64C8A8'},
    '4': {text: '已拒绝', bgColor: '#FCEBE9',textColor: '#D07D76'},
  }
  return status[sts] || {text: '未知状态', bgColor: '#333', textColor: '#666'}
}

function businessType (sts) {
  const status = {
    '0': '已撤销',
    '1': '进行中',
    '2': '已完成',
    '3': '已否决',
  }
  return status[sts] || '未知状态'
}

function operationType (sts) {
  const status = {
    '0': '已发起',
    '1': '待处理',
    '2': '已处理',
    '3': '待提交',
    '4': '待定义',
  }
  return status[sts] || '未知状态'
}

function removeByValue(arr, val) {
  for(var i=0; i<arr.length; i++) {
      if(arr[i] == val) {
      arr.splice(i, 1);
      break;
      }
  }
}

// 判断对象值全为空
function objectValueAllEmpty(object){
	var isEmpty = true;
	Object.keys(object).forEach(function(x) {
	    if(object[x] != null && object[x] != ""){
		    isEmpty = false;
	    }
	});
    if(isEmpty){//值全为空
	    return true;
    }
	return false;
}

// 防抖
function debounce(func, wait) {
  let timer;
  return function() {
      let context = this; 
      let args = arguments; 
      if (timer) clearTimeout(timer);
      let callNow = !timer;
      timer = setTimeout(() => {
      timer = null;
      }, wait)
      if (callNow) func.apply(context, args);
  }
}

export default{
  fMoney,
  fMoney2,
  fMoney3,
  toDateTime,
  dateFormatFn,
  orderreleaseType,
  auditStatus,
  businessType,
  operationType,
  removeByValue,
  objectValueAllEmpty,
  debounce
}
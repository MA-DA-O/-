<template>
	<view class="uni-datetime-picker">
		<view @click="tiggerTimePicker">
			<slot>
				<view class="uni-datetime-picker-timebox uni-datetime-picker-flex">
					{{pickValue}}<view v-if="!pickValue" class="uni-datetime-picker-time">请选择<!-- 时间 --></view>
					<template>
						<uni-icons class="content-clear-icon is-textarea-icon" type="clear" :size="clearSize"
						 color="#c0c4cc" @click="onClear"></uni-icons>
					</template>
					<view class="uni-datetime-picker-down-arrow"></view>
				</view>
			</slot>
		</view>
		<view v-if="visible" class="uni-datetime-picker-mask" @click="initTimePicker"></view>
		<view v-if="visible" class="uni-datetime-picker-popup">
			<view class="uni-title">
				请选择<!-- 和时间 -->
			</view>
			
			<!-- <picker @change="bindPickerChange" :value="index" :range="array" :range-key="'name'" class="uni-datetime-picker-hyphen">

			</picker> -->
			
			<picker-view class="uni-datetime-picker-view" :indicator-style="indicatorStyle" :value="pickValue" @change="bindPickerChange">
				<picker-view-column class="uni-datetime-picker-colon">
					<view class="uni-datetime-picker-item" v-for="(item,index) in pickData" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
			<view class="uni-datetime-picker-btn">
				<!-- <view class="" @click="clearTime">重置</view> -->
				<view class="uni-datetime-picker-btn-group">
					<view class="uni-datetime-picker-cancel" @click="tiggerTimePicker">取消</view>
					<view class="" @click="setTime">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				pickName: '',
				years: [],
				year: 1900,
				indicatorStyle: `height: 50px;`,
			}
		},
		props: {
			pickData: {
				type: Object,
				default: []
			},
			pickValue: {
				type: [String, Number],
				default: ''
			},
			type: {
				type: String,
				default: 'datetime-local'
			},
			timestamp: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			}
		},
		watch: {
			value(newValue) {
				this.parseValue(this.value)
				this.initTime()
			}
		},
		created() {
			this.form = this.getForm('uniForms')
			this.formItem = this.getForm('uniFormsItem')

			if (this.formItem) {
				if (this.formItem.name) {
					this.rename = this.formItem.name
					this.form.inputChildrens.push(this)
				}
			}
		},
		mounted() {
			this.parseValue(this.value)
			if (this.value) {
				this.initTime()
			}

		},
		methods: {
			//切换遮罩层
			tiggerTimePicker() {
				this.visible = !this.visible
			},
			bindPickerChange(e){
				const val = e.detail.value
				this.pickValue = this.pickData[val[0]].value
				this.pickName =  this.pickData[val[0]].name
				console.log(this.pickValue)
			},
			onClear(){
				this.pickValue = '',
				this.pickName =  ''
			},
			setTime() {
				this.$emit('change', this.pickName)
				this.tiggerTimePicker()
			},
			/**
			 * 获取父元素实例
			 */
			getForm(name = 'uniForms') {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false
					parentName = parent.$options.name;
				}
				return parent;
			},
			parseDateTime(datetime) {
				let defaultDate = null
				if (!datetime) {
					defaultDate = new Date()
				} else {
					defaultDate = new Date(datetime)
				}
				this.year = defaultDate.getFullYear()
				if (this.year < this.minYear || this.year > this.maxYear) {
					const now = Date.now()
					this.parseDateTime(now)
					return
				}
				this.month = defaultDate.getMonth() + 1
				this.day = defaultDate.getDate()
				this.hour = defaultDate.getHours()
				this.minute = defaultDate.getMinutes()
				this.second = defaultDate.getSeconds()
			},
			parseValue(defaultTime) {
				if (Number(defaultTime)) {
					defaultTime = parseInt(defaultTime)
				}
				this.parseDateTime(defaultTime)
			},
			bindDateChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			bindTimeChange(e) {
				const val = e.detail.value
				this.hour = this.hours[val[0]]
				this.minute = this.minutes[val[1]]
				this.second = this.seconds[val[2]]
			},
			initTimePicker() {
				// if (!this.time) {
				// 	this.parseValue()
				// }
				this.parseValue(this.value)
				this.visible = !this.visible
			},
			clearTime() {
				this.time = ''
				this.tiggerTimePicker()
			},
			initTime() {
				this.time = this.createDomSting()
				if (!this.timestamp) {
					this.formItem && this.formItem.setValue(this.time)
					this.$emit('change', this.time)
				} else {
					this.formItem && this.formItem.setValue(this.createTimeStamp(this.time))
					this.$emit('change', this.createTimeStamp(this.time))
				}
			},
			createTimeStamp(time) {
				return Date.parse(new Date(time))
			},
			createDomSting() {
				const yymmdd = this.year +
									'-' +
									(this.month < 10 ? '0' + this.month : this.month) +
									'-' +
									(this.day < 10 ? '0' + this.day : this.day)
									//  +
									// ' ' +
									// (this.hour < 10 ? '0' + this.hour : this.hour) +
									// ':' +
									// (this.minute < 10 ? '0' + this.minute : this.minute) +
									// ':' +
									// (this.second < 10 ? '0' + this.second : this.second)

				return yymmdd
			}
		}
	}
</script>

<style>
	.uni-datetime-picker-view {
		width: 100%;
		height: 130px;
		margin-top: 60rpx;
	}

	.uni-datetime-picker-item {
		line-height: 100rpx;
		text-align: center;
	}
	
	.uni-title{
		text-align: center;
	}

	.uni-datetime-picker-btn {
		margin-top: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #00B9FF;
		cursor: pointer;
	}

	.uni-datetime-picker-btn-group {
		display: flex;
	}

	.uni-datetime-picker-cancel {
		margin-right: 60rpx;
	}

	.uni-datetime-picker-mask {
		position: fixed;
		bottom: 0px;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: rgba(0, 0, 0, 0.4);
		transition-duration: 0.3s;
		z-index: 998;
	}

	.uni-datetime-picker-popup {
		border-radius: 16rpx;
		padding: 60rpx;
		width: 540rpx;
		background-color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition-duration: 0.3s;
		z-index: 999;
	}

	.uni-datetime-picker-time {
		color: grey;
	}

	.uni-datetime-picker-colon::after {
		content: ':';
		position: absolute;
		top: 106rpx;
		right: 0;
	}

	.uni-datetime-picker-hyphen::after {
		content: '-';
		position: absolute;
		top: 106rpx;
		right: -4rpx;
	}

	.uni-datetime-picker-timebox {
		border: 2rpx solid #E5E5E5;
		border-radius: 40rpx;
		padding: 14rpx 40rpx;
		box-sizing: border-box;
		cursor: pointer;
		width: 80%;
		margin-left: 20%;
	}

	// 下箭头
	.uni-datetime-picker-down-arrow {
	    display :inline-block;
	    position: relative;
	    width: 40rpx;
	    height: 30rpx;
	}

	.uni-datetime-picker-down-arrow::after {
	    display: inline-block;
	    content: " ";
	    height: 18rpx;
	    width: 18rpx;
	    border-width: 0 2rpx 2rpx 0;
	    border-color: #E5E5E5;
	    border-style: solid;
	    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
	    transform-origin: center;
	    transition: transform .3s;
	    position: absolute;
	    top: 50%;
	    right: 10rpx;
	    margin-top: -10rpx;
	}
	.uni-datetime-picker-flex {
		display: flex;
		justify-content: space-between;
	}
</style>

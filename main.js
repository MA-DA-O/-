import Vue from 'vue'
import App from './App'
import cuCustom from 'colorui/components/cu-custom.vue'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import {goto} from "@/util/util.js"
import core from '@/util/core.js'
import '@/plugins/utils'
// 接口请求
import $http from '@/js_sdk/zhouWei-request/requestConfig';
Vue.prototype.$http = $http;

Vue.prototype.goto = goto;
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.prototype.core = core

Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

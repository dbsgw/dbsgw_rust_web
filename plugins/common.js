import Vue from 'vue'
import moment from 'moment'
import rules from '~/assets/js/rules'
// 日期
Object.defineProperty(Vue.prototype, '$moment', {value: moment})
// 验证
Object.defineProperty(Vue.prototype, '$rules', {value: rules})

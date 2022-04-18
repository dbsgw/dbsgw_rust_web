/**
 * @desc 基于ElementUI Form rules 进行使用, 参考官方文档: http://element-cn.eleme.io/#/zh-CN/component/form [自定义校验规则]
 * @example  rules: {
 *  ip: [
 *    {required: true, message: '请输入矩阵IP', trigger: 'blur'},
 *    {validator: this.$rules.ipAddress, trigger: 'blur'}
 *  ]
 * }
 *

 */
export default {

  /**
   * 校验 包括中文字、英文字母、数字和下划线
   * 登录账号校验
   */
  validateAccount (rule, value, callback) {
    let acount = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
    if (value && (!(acount).test(value))) {
      callback(new Error('账号不符合规范'))
    } else {
      callback()
    }
  },

  /**
   * IP地址校验
   */
  ipAddress (rule, value, callback) {
    if (value && value === '...') {
      callback(new Error('请输入IP地址'))
    } if (value && !(/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/).test(value)) {
      callback(new Error('IP地址不符合规范'))
    } else {
      callback()
    }
  },

  /**
   * 手机号码校验
   */
  phoneNumber (rule, value, callback) {
    if (value && (!(/^[1][34578]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11)) {
      callback(new Error('手机号码不符合规范'))
    } else {
      callback()
    }
  },

  /**
   * 电话号码校验
   */
  telephoneNumber (rule, value, callback) {
    if (value && (!(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/).test(value))) {
      callback(new Error('电话号码不符合规范'))
    } else {
      callback()
    }
  },
  /**
   * 身份证号码校验
   */
  idCard (rule, value, callback) {
    if (value && (!(/\d{17}[\d|x]|\d{15}/).test(value) || (value.length !== 15 && value.length !== 18))) {
      callback(new Error('身份证号码不符合规范'))
    } else {
      callback()
    }
  },

  /**
   * 正整数校验 不包含0
   */
  validatorInteger (rule, value, callback) {
    if (!/^\+?[0-9]*$/.test(value) || value === '0') {
      callback(new Error('只能填写正整数'))
    } else {
      callback()
    }
  },

  /** 数量校验 */
  validatorIntegerN (rule, value, callback) {
    if (!/^\+?[0-9]*$/.test(value)) {
      callback(new Error('只能填写整数类型'))
    } else {
      callback()
    }
  },
  /**
   * 金额校验 大于0或者正数，两位小数
   */
  validatorIntegerP (rule, value, callback) {
    if (!/^[0-9]\d{0,5}(\.\d{1,2})?$/.test(value)) {
      callback(new Error('0-999999范围可保留两位小数'))
    } else {
      callback()
    }
  },


  /**
   * 负整数校验
   */
  integerN (rule, value, callback) {
    if (value && !(/^-[1-9]\d*$/).test(value)) {
      callback(new Error('只能填写负整数'))
    } else {
      callback()
    }
  },

  /**
   * 英文字符校验
   */
  enText (rule, value, callback) {
    // let a = '',
    //   arr = value.split(" ")
    // for (let i = 0; i < arr.length; i++) { //删除行内空格
    //   a += arr[i];
    // }
    if (value && !(/^[A-Za-z]+$/).test(value)) {
      callback(new Error('只能填写英文字符'))
    } else {
      callback()
    }
  },
  /**
   * 中文字符英文字符校验
   */
  ChEnText (rule, value, callback) {
    if (value && !(/^[A-Za-z0-9]+$/).test(value)) {
      callback(new Error('只能填写数字和英文字符'))
    } else {
      callback()
    }
  },
  /**
   * 中文字符校验
   */
  cnText (rule, value, callback) {
    // let a = '',
    //   arr = value.split(" ")
    // for (let i = 0; i < arr.length; i++) { //删除行内空格
    //   a += arr[i];
    // }
    if (value && (/[^\u4e00-\u9fa5]/).test(value)) {
      callback(new Error('只能填写中文字符'))
    } else {
      callback()
    }
  },
  /**
   * 只能输入英文或者数字
   */
  enOrnunText (rule, value, callback) {
    if (value && !(/^[A-Za-z0-9]+$/).test(value)) {
      callback(new Error('只能填写英文或者数字'))
    } else {
      callback()
    }
  },
  /**
   * 20位数字国标编码校验，且为正整数
   */
  validateDeviceNo (rule, value, callback) {
    if (value && !(/^[1-9]\d*$/).test(value)) {
      callback(new Error('只能填写正整数'))
    } else {
      if (!/^[0-9]{20}$/.test(value)) {
        callback(new Error('请输入20位数字的编码！'))
      } else {
        callback()
      }
    }
  },
  /**
   *校验电脑Mac地址
   *以xx-xx-xx-xx-xx-xx的形式输入（xx为16进制数字）
   */
  validateMac (rule, value, callback) {
    let temp = /[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}/
    if (!temp.test(value)) {
      callback(new Error('请输入xx-xx-xx-xx-xx-xx形式的MAC地址！'))
    } else {
      callback()
    }
  },
  /**
   * 校验地址代码或者分组代码
   */
  validateCode (rule, value, callback) {
    let num = /^[1-9]\d*$/
    if (value && !(num).test(value)) {
      callback(new Error('只能填写正整数'))
    } else {
      let codeLen = value.toString().length
      console.log(codeLen)
      if (codeLen > 0 && codeLen % 3 !== 0) {
        callback(new Error('输入的长度必须是3的倍数'))
      } else if (codeLen > 18) {
        callback(new Error('输入的长度不能超过18位,请重新输入'))
      } else {
        callback()
      }
    }
  },
  /**
   * 校验是否输入的两位正整数
   * @param rule
   * @param value
   * @param callback
   */
  validateTwoNum (rule, value, callback) {
    let temp = /^[1-9]{2}$/
    if (!temp.test(value)) {
      callback(new Error('请输入两位正整数！'))
    } else {
      callback()
    }
  },
  /**
   * 校验邮箱是否合法
   * @param rule
   * @param value
   * @param callback
   */
  validateEMail (rule, value, callback) {
    // eslint-disable-next-line no-useless-escape
    let reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
    let regs = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!regs.test(value)) {
      callback(new Error('请输入正确的邮箱'))
    } else {
      callback()
    }
  },
  /**
   * 校验用户的密码
   * @param rule
   * @param value
   * @param callback
   */
  isPassword (rule, value, callback) {
    let reg = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,30}/
    if (!reg.test(value)) {
      callback(new Error('密码中必须包含字母、数字、特称字符，至少6位，最多30位！'))
    } else {
      callback()
    }
  },

  /**
   * 验证账号
   * @param rule
   * @param value
   * @param callback
   */
  isAccount (rule, value, callback) {
    let reg = /^[a-zA-Z0-9][a-zA-Z0-9_]{4,19}$/
    if (!reg.test(value)) {
      callback(new Error('5-20位字母、数字或下划线组合'))
    } else {
      callback()
    }
  },
  /**
   * 验证码长度校验
   */
  validateVerificationCode (rule, value, callback) {
    if (value.length !== 6) {
      callback(new Error('验证码应为6位数字'))
    } else {
      callback()
    }
  },

  /**
   * 校验分数区间 包含0
   */
  validatorIntegerGrade (rule, value, callback) {
    if (!/^\+?[0-9]*$/.test(value)) {
      callback(new Error('只能填写正整数'))
    } else {
      callback()
    }
  },

  /**
   * 社会信用代码格式
   */
  unifiedSocialCredit(rule, value, callback) {
    if (value && !(/[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}/).test(value)) {
      // /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/
      callback(new Error('统一社会信用代码格式有误！'))
    } else {
      callback()
    }
  }

}

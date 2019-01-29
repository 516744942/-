// components/joinbutton/joinbutton.js
const app = getApp()
const http = require('../../utils/http.js')
const buy = require('../../utils/buy.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: { // 属性名
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached: function() {
    this.setData({
      system: app.globalData.system,
      systemX: app.globalData.systemX
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    buyGift: function(e) {
      var self = this;
      buy.creatOrderGift(self, e, self.data.detail)
    }
  }
})
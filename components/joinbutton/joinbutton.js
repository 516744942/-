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

    }
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
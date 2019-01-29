// components/bottombutton/bottombutton.js
const app = getApp()
const common = require('../../utils/common.js')
const buy = require('../../utils/buy.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showType: { //  展示类型
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 1, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    join: { //  加入学院
      type: String, 
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    cou_id: { //  课程id
      type: Number,
      value: 1, 
      observer: function (newVal, oldVal, changedPath) {
       
      }
    },
    is_sale: { //  1免费 2收费
      type: Number,
      value: 0,
      observer: function (newVal, oldVal, changedPath) {
      }
    },
    ins_id: { //学院id
      type: Number,
      observer: function (newVal, oldVal, changedPath) {
      }
    },
    price: { //学院id
      type: Number,
      observer: function (newVal, oldVal, changedPath) {
      }
    },
    price: { //学院id
      type: Number,
      observer: function (newVal, oldVal, changedPath) {
      }
    },
    detail: { //学院id
      type: Object,
      observer: function (newVal, oldVal, changedPath) {
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    system:true,
    systemX:false
  },
  attached:function(){
    let self = this;
    self.setData({
      system: app.globalData.system,
      systemX: app.globalData.systemX
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goWrite: function (event) {
      let self = this;
      wx.navigateTo({
        url: '/pages/index/writecomment/writecomment?cou_id=' + self.data.cou_id,
        success: function (res) { }
      })
    },
    // 回到首页
    goBackHome: function (event) {
      wx.switchTab({
        url: '/pages/index/index',
        success: function (res) { }
      })
    },
    goSchool: function () {
      let self = this;
      app.globalData.ins_id = self.data.ins_id
      common.joinScool(self)
    },
   
    
  }
})

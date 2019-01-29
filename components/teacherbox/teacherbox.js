// components/teacherbox/teacherbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: { // 老师详情
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      // value:{}, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
      }
    },
    showType: { // 老师盒子类型
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value:1, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    img_url: "https://tianji-1256518868.cos.ap-shanghai.myqcloud.com/backend/frontend_15358796757861.jpg",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goPersonDetail: function (e) {
      let self = this;
      wx.navigateTo({
        url: '/pages/index/teacherdeatil/teacherdetail?tea_uid=' + e.currentTarget.id,
        success: function (res) { }
      })
    },
  }
})

// components/teacherbox/teacherbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: { // 老师详情
      type: Object
    },
    showType: { // 老师盒子类型
      type: Number,
      value: 1
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

// components/detaillabel/detaillabel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: { //  数组
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {}
    },
    showType: { //展示类型
      type: Number, 
      value: 1
    },
    boxStyle: { //展示类型
      type: String
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(e){
      let self = this;
      wx.navigateTo({
        url: '/pages/index/teacherdeatil/teacherdetail?tea_uid=' + e.currentTarget.id,
        success: function (res) { }
      })
    }
  }
})
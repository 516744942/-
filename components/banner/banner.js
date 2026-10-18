// components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    autoplay: { //  是否自动
      type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: true, // 属性初始值（可选），如果未指定则会根据类型选择一个

    },
    indicatorDots: { // 是否显示点
      type: Boolean,
      value: true
    },
    interval: { //时间间隔
      type: Number,
      value: 3000
    },
    circular: { //是否采用衔接滑动
      type: Boolean,
      value: true
    },
    duration: { //滑动时长
      type: Number,
      value: 500
    },
    bInfos: { //banner 数组
      type: Array,
      value: []
    },
    bannerHeight: { //banner图的高度
      type: String,
      value: '300rpx'
    },
    bannerWidth: { //banner图的宽度
      type: String,
      value: '100%'
    },
    borderRadius: { //banner边
      type: String,
      value: 0
    },
    bannerType: { //  banner 类型
      type: Number,
      value: 1
    }
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
    goBanerDetail: function(e) {
      let self = this;
      let id = e.currentTarget.id
      let gotype = e.currentTarget.dataset.type;
      if (this.data.bannerType == 1) {
        if (gotype == 4) {
          wx.navigateTo({
            url: '/pages/index/teacherdeatil/teacherdetail?tea_uid=' + id,
            success: function(res) {}
          })
        }
        if (gotype == 2) {
          wx.navigateTo({
            url: '/pages/mine/activity/activitydeatil/activitydetail?id=' + id,
            success: function(res) {}
          })
        }
        if (gotype == 3) {
          wx.navigateTo({
            url: '/pages/index/coursedetail/coursedetail?cou_id=' + id ,
            success: function(res) {}
          })
        }
      } else if (this.data.bannerType == 2) {
        if (gotype == 4) {
          wx.navigateTo({
            url: '/pages/index/teacherdeatil/teacherdetail?tea_uid=' + id,
            success: function(res) {}
          })
        }
        if (gotype == 3) {
          wx.navigateTo({
            url: '/pages/index/coursedetail/coursedetail?cou_id=' + id,
            success: function(res) {}
          })
        }
      }

    }
  }
})
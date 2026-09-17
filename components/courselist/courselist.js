const app = getApp()
// components/courselist/courselist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: { //  数组
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      observer: function(newVal, oldVal, changedPath) {
        // Remove redundant setData, as list.length can be computed in WXML directly or safely wrapper
      }
    },
    showType: { // 显示样式
      type: Number,
      value: 1,
      observer: function(newVal, oldVal, changedPath) {
      }
    },
    detailType: { // 1课程详情  2 活动详情
      type: Number,
      value: 1,
      observer: function (newVal, oldVal, changedPath) {
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    listLength:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 去
    goDeatil: function(e) {
      if (this.data.detailType==1){
        // 历史记录进 详情 有id
        console.log(e.currentTarget.dataset.son)
        if (e.currentTarget.dataset.son !=undefined){
          wx.navigateTo({
            url: '/pages/index/coursedetail/coursedetail?cou_id=' + e.currentTarget.id + '&son_id=' + e.currentTarget.dataset.son,
            success: function (res) { }
          })
        }else{
          wx.navigateTo({
            url: '/pages/index/coursedetail/coursedetail?cou_id=' + e.currentTarget.id,
            success: function (res) { }
          })
        }
        
      } else if (this.data.detailType == 2){
        wx.navigateTo({
          url: '/pages/mine/activity/activitydeatil/activitydetail?id=' + e.currentTarget.id,
          success: function (res) { }
        })
      }
      
    }
  }
})
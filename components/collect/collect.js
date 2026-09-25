// components/collect/collect.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    collect: { //  数组
      type: Number
    },
    cou_id: { // 显示样式
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    collect_status:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 收藏和取消
    collect: function(event) {
      let self = this;
      if (self.data.collect_status == false) {
        return;
      }
      self.setData({
        collect_status: false,
      });
      wx.request({
        url: app.globalData.baseUrl + '/institute/course-api/course-collect',
        method: 'POST',
        data: {
          token: app.globalData.token,
          token_type: 1,
          type: 1,
          cou_id: self.data.cou_id,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if (res.data.errmsg == "收藏成功") {
            self.setData({
              collect: 1,
            });
            wx.showToast({
              title: res.data.errmsg,
              icon: 'success',
              duration: 1000
            })
          } else if (res.data.errmsg == "取消收藏成功") {
            self.setData({
              collect: 2,
            });
            wx.showToast({
              title: res.data.errmsg,
              icon: 'success',
              duration: 1000
            })
          }
        }
      })
      self.setData({
        collect_status: true,
      });
    },
  }
})
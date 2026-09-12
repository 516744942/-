// components/rowscroll/rowscroll.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: { // 传入的数组
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    },
    showType: { // 传入的数组
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "header", // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    activeShow: { // 当前的索引
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    mb: { //margin-bottom
      type: Number,
      value: 40, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    schoolSeat: {
      type: Number,
      value: 1, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    toId: {
      type: String
    },

  },
  created: function() {
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
    // 头像模块 进入详情页面
    goPersonDetail: function(e) {
      let self = this;
      wx.navigateTo({
        url: '/pages/index/teacherdeatil/teacherdetail?tea_uid=' + e.currentTarget.id,
        success: function(res) {}
      })


    },
    joinSchool: function(e) {
      let self = this;
      if (self.data.schoolSeat == 1) {
        app.globalData.ins_id = e.currentTarget.id
        app.globalData.collegeIndex = e.currentTarget.dataset.index
        app.globalData.clickScool = true
        wx.switchTab({
          url: '/pages/college/college'
        })
      } else if (self.data.schoolSeat == 2) {
        var myEventDetail = {
          activeIndex: e.currentTarget.dataset.index
        } // detail对象，提供给事件监听函数
        var myEventOption = {} // 触发事件的选项
        this.triggerEvent('posterChange', myEventDetail, myEventOption)
      }

    },
    action(event) {
      this.setData({
        activeShow: event.currentTarget.dataset.index,
        color: event.currentTarget.dataset.color || false,
        join_status: event.currentTarget.dataset.join || false,
      })
      var myEventDetail = {
        activeIndex: this.data.activeShow,
        color: this.data.color,
        join_status: this.data.join_status
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('onchange', myEventDetail, myEventOption)
    },
    loadMore: function(e) {
      let self = this;
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('rowMore', myEventDetail, myEventOption)
    }
  }
})
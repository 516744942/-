// components/choicenav/choiceNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      observer: function (newVal, oldVal, changedPath) {
      }
    },
    activeIndex: {
      type: Number,
      value: 0
    },
    showType: {
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
    action(event) {
      this.setData({
        activeIndex: event.currentTarget.dataset.index
      })
      var myEventDetail = { activeIndex: this.data.activeIndex } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('onchange', myEventDetail, myEventOption)
    }
  }
})

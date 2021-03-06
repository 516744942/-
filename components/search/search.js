// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: { // 搜索的老师名字
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "搜索课程", // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
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
    // 模糊查询
    searchName:function(e){

    },
    comfirm: function (e) {
      let self = this;
      self.setData({
        key_word: e.detail.value,
      })
      var myEventDetail = { key_word: this.data.key_word } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('onchange', myEventDetail, myEventOption)
    },
    // 失去焦点
    searchblur: function (e) {
      let self = this;
      if (self.data.name == "") {
        self.setData({
          focus: false,
          page: 0,
          loading_state: true,
        })
      } else {
        self.setData({
          focus: true,
          page: 0,
          loading_state: true,
        })
      }
    }, 
  }
})

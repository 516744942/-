// components/lookmore/lookmore.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: { //  标题
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value:""
    },
    word: { // 副标题
      type: String, 
      value:"查看更多"
    },
    url: { // 路径链接
      type: String, 
      value:""
    },
    showType: { // 显示样式
      type: Number,
      value: 2
    },
    lookMore: { // 显示样式
      type: Boolean,
      value: false
    },
    bgColor: { // 显示样式
      type: String,
      value: '#fff'
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
    masterLlookMore: function (event) {
      let self = this;
      if (!self.data.lookMore){
        return;
      }
      wx.navigateTo({
        url: self.data.url,
        success: function (res) { 
          
        }
      })
    },
  }
})

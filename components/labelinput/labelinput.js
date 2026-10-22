// components/labelInput/labelInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    eachItem: { // 属性名
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {
        name:"请原谅我的自负",
        label:"用户名",
        image_ur:"../../images/mine/personalPage/icon/1.png"
      }, // 属性初始值（可选），如果未指定则会根据类型选择一个

    },

    canEdit: { //可以编辑
      type: Boolean,
      value: true
    },
    inputVaue: { //值
      type: String
    },
    hasLogo: { //有logo默认显示
      type: Boolean,
      value: false
    },

    editType: { //可以编辑的类型 1 进入编辑详情
      type: Number,
      value: 1
    },
    modelType: { //picker的类型 selector
      type: String,
      value: "date"
    },
    modelRange: { //picker的类型
      type: Array,
      value: []
    },
    infoType: { //进入详情的信息
      type: Number
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    choiceValue:"", //选择的值
  },

  /**
   * 组件的方法列表
   */
  methods: {
    godeatil: function (){
      let self =  this;
      if (self.data.canEdit){
        if (self.data.editType==1){
          wx.navigateTo({
            url: '/pages/mine/person/changeinfo/changeinfo?name=' + self.data.eachItem.name + '&' + 'type=' + self.data.infoType,
            success: function (res) { }
          })
        }
      }
    },
    bindDateChange: function (event) {
      let self = this;
      var myEventDetail = { value:event.detail.value} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      self.triggerEvent('choice', myEventDetail, myEventOption)
    },
  }
})

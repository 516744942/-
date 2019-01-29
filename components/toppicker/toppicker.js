// components/toppicker/toppicker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courseType: { // 课程得类型
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: -1, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    universityType: { // 课程得类型
      type: Number,
      value: -1,
      observer: function(newVal, oldVal, changedPath) {
      }
    },
    university: { // 学院
      type: Array,
      observer: function(newVal, oldVal, changedPath) {
      }
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    classType: [{
        value: 1,
        label: "免费推荐"
      },
      {
        value: 2,
        label: "会员课程"
      }

    ],
    university: [{
        vlue: 1,
        label: "name"
      },
      {
        vlue: 2,
        label: "name"
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPayTypePickerChange: function(e) {
      let self = this;
      self.setData({
        courseType: parseInt(e.detail.value),
        courseValue: self.data.classType[e.detail.value].value
      })
      var myEventDetail = { id: self.data.courseValue } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      self.triggerEvent('onchangeCourse', myEventDetail, myEventOption)
    },
    bindPayTypePickerChangec: function(e) {
      let self = this;
      self.setData({
        courseType: -1,
        courseValue:""
      })
      var myEventDetail = { id: self.data.courseValue } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      self.triggerEvent('onchangeCourse', myEventDetail, myEventOption)
    },
    bindTypePickerChangeT: function(e) {
      let self = this;
      self.setData({
        universityType: parseInt(e.detail.value),
        schoolId: self.data.university[e.detail.value].id
      })
      var myEventDetail = { id: self.data.schoolId } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      self.triggerEvent('onchangeSchool', myEventDetail, myEventOption)

    },
    bindTypePickerChangec: function(e) {
      let self = this;
      self.setData({
        universityType: -1,
        schoolId:""
      })
      var myEventDetail = { id: self.data.schoolId } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      self.triggerEvent('onchangeSchool', myEventDetail, myEventOption)
    }
  },


})
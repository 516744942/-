// components/rich/rich.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rich: { // 传入的富文本
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "asdsadasd"
    },
    hasp:{
      type: Number,
      value: 0
    },
    bgColor: {
      type: String,
      value: '#fff'
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

  }
})
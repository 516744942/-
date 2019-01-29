// components/movearea/movearea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: { // 移动区域的图片
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    text: { // 移动区域默认文字
      type: String, 
      value: '返回首页', 
      observer: function (newVal, oldVal, changedPath) {
      }
    },
    wordColor: { // 移动区域默认文字颜色
      type: String,
      value: '#FFFFFF',
      observer: function (newVal, oldVal, changedPath) {
        
      }
    },
    bgColor: { // 移动区域背景图片的颜色
      type: String,
      value: '#0000FF',
      observer: function (newVal, oldVal, changedPath) {
        
      }
    },
    leftPosition: { // 移动区域左边的距离
      type: String,
      value: '100%',
      observer: function (newVal, oldVal, changedPath) {
        
      }
    },
    topPosition: { // 移动区域距离上边的距离
      type: String,
      value: '40%',
      observer: function (newVal, oldVal, changedPath) {
        
      }
    },
    topPlace: { // 整体区域的上边距离
      type: String,
      value: '80',
      observer: function (newVal, oldVal, changedPath) {
        
      }
    },
    goType:{ // 详情类型 ，默认回到首页
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
    moveStatus:true,
    percent:""
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
    this.getHight()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getHight: function () {
      let self = this;
      wx.getSystemInfo({
        success: function (res) {
          // 可使用窗口宽度、高度
          // 计算主体部分高度,单位为px
          self.setData({
            // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
            move_height: (res.windowHeight ),
            move_width: res.windowWidth,//移动的屏幕宽度
          })
        }
      })
    },
    // 移动球回到两边
    move: function (e) {
      let self = this;
      if (self.data.moveStatus == true) {
        return;
      }
      self.setData({
        moveStatus: true
      })
      var x = e.changedTouches[0].clientX;
      var y = e.changedTouches[0].clientY;
      if (self.data.topPosition.indexOf('%') != -1) {
        this.data.percent = parseFloat(self.data.topPosition) / 100
      } else {
        this.data.percent = parseFloat(self.data.topPosition) / 2 / this.data.move_height
      }
      // var y1 = e.currentTarget.offsetTop;
      if (x < self.data.move_width / 2) {
        self.setData({
          x: -self.data.move_width,
          y: y - self.data.move_height * parseFloat(self.data.percent) - parseInt(self.data.topPlace)-25
        })
      } else {
        self.setData({
          x: 0,
          y: y - self.data.move_height * parseFloat(self.data.percent) - parseInt(self.data.topPlace)-25
        })
      }
    },
    moveclick: function () {
      let self = this;
      self.setData({
        moveStatus: false
      })
    },
    //进入详情
    comeIn: function () {
      let self = this;
      //书籍
      self.setData({
        moveStatus:true
      })
      if (self.data.goType==1){
        wx.switchTab({
          url: '/pages/index/index',
          success: function (res) { }
        })
      }else{
        // 等以后具体情况再改造
        // if (self.data.course_id == 0) {
        //   wx.navigateTo({
        //     url: '/pages/reader/couseDetail/courseDetial?id=' + self.data.temId
        //   })
        // }
        // //课程
        // else {
        //   wx.navigateTo({
        //     url: '/pages/center/knowledgeMarket/programDetail/programDetail?period_id=' + self.data.temId + '&' + 'course_id=' + self.data.course_id + '&' + 'img=' + self.data.img
        //   })
        // }
      }
      
    },
  }
})

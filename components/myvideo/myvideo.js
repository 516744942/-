// components/myvideo/myvideo.js
const app = getApp()
const common = require('../../utils/common.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    free: { //1:免费推荐 2：收费课程
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    detail: { //视频信息等详情
      type: Object,
      value: {},
      observer: function(newVal, oldVal, changedPath) {
      }
    },
  },
  attached: function() {
    app.globalData.videoContext = wx.createVideoContext('myVideo')
    this.setData({
      network: app.globalData.network
    })
  },
  ready: function () {
    
  },
  /**
   * 组件的初始数据
   */
  data: {
    video_url: "https://tianji-1256518868.cos.ap-shanghai.myqcloud.com/Jim%20Cathcart%E8%A7%86%E9%A2%91/Lesson%202.mp4",
    network:"",
    videoProgress:0, //视频当前时间
    videoDuration:0, //视频总时长
    wifi: true,//确定非wifi状态下播放

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取视频实时进度
    getTime: function(e) {
      let self = this;
      let currentTime = e.detail.currentTime
      let duration = e.detail.duration;
      self.setData({
        videoProgress: e.detail.currentTime,
        videoDuration: e.detail.duration
      })
      //体验时间判断
    },
    // 开始播放
    getvdetail: function(e) {
      let self = this;
    },
    // 确定流量播放
    confirmWiFi: function () {
      setTimeout(function(){
        app.globalData.videoContext.play()
      },3000)
     
      this.setData({
        wifi: false
      })
    },
    // 加入学院
    goSchool:function(){
      let self =  this;
      app.globalData.ins_id= self.data.detail.ins_id
      common.joinScool(self)
    }
  }
})
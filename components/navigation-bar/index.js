const _systemInfo = wx.getSystemInfoSync();
const _barHeight = _systemInfo.statusBarHeight;
const _ratio = _systemInfo.screenWidth / 750;
const {
  appName
} = require('../../config/config')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  决定是否显示主页图标
    homeIcon: {
      type: Boolean,
      value: true
    },
    //  决定navback是否有效
    enable: {
      type: Boolean,
      value: true
    },
    //  可传入改变navbar样式
    bgStyle: {
      type: String,
      value: 'background-color:#EC6D81;',
      observer: function(newVal, oldVal, changedPath) {}

    },
    //  可传入改变navbar title样式
    titleStyle: {
      type: String,
      value: 'color: white;'
    },
    title: {
      type: String,
      value: appName,
      observer: '_changeTitle'
    },
    //  可传入改变nav back页面数
    delta: {
      type: Number,
      value: 1
    },
    //  决定是否显示loading
    showLoading: {
      type: Boolean,
      value: false
    },
    textStyle: {
      type: String,
      value: 'black',
      observer: '_changeTextStyle'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    barHeight: _barHeight,
    totalHeight: 90 * _ratio + _barHeight,
    navHeight: 90 * _ratio,
    navIconUrl: './images/nav_icon_black.png',
    homeIconUrl: './images/home_icon_black.png',
    navTitleStyle: 'color: white',
    navBgStyle: 'background-color:#EC6D81;',
    backIcon: false
  },
  attached() {
    const currentPage = getCurrentPages()
    var firstRoute = currentPage[0].route
    // bar 页面不展示图标
    if ((firstRoute.indexOf("pages/college/college") != -1 || firstRoute.indexOf("pages/index/index") != -1 || firstRoute.indexOf("pages/mine/mine") != -1) && currentPage.length == 1) {
      this.setData({
        homeIcon: false
      })
    }
    if (currentPage.length > 1) {
      this.setData({
        backIcon: true
      })
    }
  },
  /**
   * 组件的方法列表
   */

  methods: {
    //  title监听函数
    _changeTitle: function _changeTitle() {
      if (this.data.title === void 0) {
        this.setData({
          title: appName
        });
      }
    },
    _changeTextStyle: function _changeTextStyle() {
      if (this.data.textStyle === 'white') {
        wx.setNavigationBarColor({
          frontColor: '#ffffff'
        });
        this.setData({
          navIconUrl: './images/nav_icon_white.png',
          homeIconUrl: './images/home_icon_white.png',
          navTitleStyle: 'color: white;',
          navBgStyle: 'background-color:#000;'
        });

      } else {
        wx.setNavigationBarColor({
          frontColor: '#000000'
        });
        this.setData({
          navIconUrl: './images/nav_icon_black.png',
          homeIconUrl: './images/home_icon_black.png',
          navTitleStyle: 'color: white;',
          navBgStyle: 'background-color:#fff;'
        });
      }
    },

    //  navback监听函数
    _onTap: function _onTap() {
      this.triggerEvent('back', {});
      if (this.data.enable) {
        wx.navigateBack({
          delta: this.data.delta
        });
      }
    },

    _goHome: function _goHome() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  }
});
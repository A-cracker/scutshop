//app.js
App({
  onLaunch: function () {
    console.log("on Launch");
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  //对整个页面应用数据或者效果重置
  onShow: function () {
    console.log("on Show");
  },
  //暂停或者清楚定时器，防止浪费内存
  onHide: function(){
    console.log("on Hide");
  },
 //应用代码报错时触发,手机用户错误信息，收集反馈给后台
  onError: function(){
    console.log("on Error");
    console.log(err);
  },
//有条件，当应用第一次启动时，找不到入口页面，才会触发
//如果找不到，用js方式跳到我们自己定义的首页，不能跳到tarbar
  onPageNotFound: function(){

  }
})
App({


  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 执行一次
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 执行多次
   */
  onShow: function (options) {
    //  1. 判断小程序的进入场景
    console.log(options);
    // 2. 获取用户信息 将用户信息传递给服务器
    wx.getUserInfo({
      complete: (res) => {
        console.log(res);
      },
      success(res){
        console.log(res);
      }
    })
    // 2.2 获取用户信息 通过按钮实现
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
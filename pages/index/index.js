//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},

    userNum: null,
    userKey: null,

    room: [
      {
        roomNum: 101,
        roomKey: 1234,
        water: 12,
        gas: 34,
        network: 35
      }
    ]
  },
  //事件处理函数
  roomnumber: function (e) {
    this.setData({
      userNum: e.detail.value
    })
  },
  password: function (e) {
    this.setData({
      userKey: e.detail.value
    })
  },
  renting: function () {
    wx.redirectTo({
      url: '../renting/renting'
    })
  },
  login: function () {
    var n = this.data.userNum;
    var k = this.data.userKey;
    if (n == this.data.room[0].roomNum && k == this.data.room[0].roomKey) {
    
      app.globalData.roomNumber=n;
      app.globalData.roomKey=k;

      wx.redirectTo({
        url: '../my/my?roomNum=' + n
      })
    } else {
      wx.showToast({
        title: '账号或密码错误',
        icon: 'loading',
        duration: 2000
      })
    }

  },
  onLoad: function () {

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      console.log(app.globalData)
    })
  }
})

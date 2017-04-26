// pages/renting/renting.js
var app = getApp();
Page({
  data: {
    
    template: {
      left: {
        iconUrl: '../../img/tab-1s.png',
        title: '我的'
      },
      right: {
        iconUrl: '../../img/tab-2.png',
        title: '租房'
      }
    },
    anatarUrl: '../../img/avatar.png',
    floor: [
      {
        title: '一',
        room: [{
          num: 101,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 102,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 103,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 104,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 105,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 106,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 107,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 108,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }]
      }
      , {
        title: '二',
        room: [{
          num: 201,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 202,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 203,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 204,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 205,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 206,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 207,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }, {
          num: 208,
          iconUrl: '../../img/p-3.png',
          type: '1'
        }]
      }

    ]
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  
  go_my: function () {
    if (app.globalData.roomNumber && app.globalData.roomKey) {
      wx.redirectTo({
        url: '../my/my'
      })
    } else {
      wx.redirectTo({
        url: '../index/index'
      })
    }

  },
  
})
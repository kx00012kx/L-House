// pages/my/my.js
var app=getApp()
Page({
  data: {
    
    template: {
      left: {
        iconUrl: '../../img/tab-1.png',
        title: '我的'
      },
      right: {
        iconUrl: '../../img/tab-2s.png',
        title: '租房'
      }
    },

    anatarUrl: '../../img/avatar.png',
    roomerInfo: [
      {
        title: '水费',
        iconUrl: '../../img/in-2.png',
        value: '本月水费8元'
      },
      {
        title: '煤气',
        iconUrl: '../../img/in-5.png',
        value: '本月煤气12元',
      }, {
        title: '网费',
        iconUrl: '../../img/in-4.png',
        value: '本月网费35元',
      }, {
        title: '电费',
        iconUrl: '../../img/in-3.png',
        value: '本月电费30元',
      }, {
        title: '卫生',
        iconUrl: '../../img/in-6.png',
        value: '本月卫生5元',
      }, {
        title: '房租',
        iconUrl: '../../img/in-1.png',
        value: '本月房租280元',
      }, {
        title: '合计',
        iconUrl: '../../img/in-7.png',
        value: '本月合计370元',
      }
    ],
    pub: [
      {
        title: '快递',
        iconUrl: '../../img/p-1.png',
        mess: '呼叫顺丰快递上门取件',
        value: 13172169585
      }, {
        title: '外卖',
        iconUrl: '../../img/p-2.png',
        mess: '呼叫顺丰快递上门取件',
        value: 13172169585
      }, {
        title: '旧物',
        iconUrl: '../../img/p-3.png',
        mess: '联系房东',
        value: 13172169585
      }, {
        title: '搬家',
        iconUrl: '../../img/p-4.png',
        mess: '呼叫搬家公司',
        value: 13172169585
      }, {
        title: '维修',
        iconUrl: '../../img/p-5.png',
        mess: '呼叫电器维修工',
        value: 13172169585
      }, {
        title: '疏通',
        iconUrl: '../../img/p-6.png',
        mess: '呼叫水管工',
        value: 13172169585
      }
    ]
  },
  onLoad: function (options) {
    this.setData({
      roomNum: app.globalData.roomNumber,
      
    })
    // 页面初始化 options为页面跳转所带来的参数
  },
  
  check:function(e){
    var message = e.currentTarget.dataset.value;
    wx.showModal({
      title: '提示',
      content: '' + message,
      success: function (res) {
        if (res.confirm) {
         console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  click: function (e) {
    var message = e.currentTarget.dataset.mess;
    var telephone =e.currentTarget.dataset.value;
    wx.showModal({
      title: '提示',
      content: '' + message,
      success: function (res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: ''+ telephone //仅为示例，并非真实的电话号码
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  
  go_rent:function(){
    wx.redirectTo({
      url: '../renting/renting'
    })
  }
})
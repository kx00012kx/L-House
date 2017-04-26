// pages/detail/detail.js
Page({
  data:{
    roomNum:null,
    icon_1:'../../img/det-1.png',
    icon_2:'../../img/det-2.png',   
    anatarUrl:'../../img/l-h-1.png',
    long:{
      rent:'280元/月',
      water:'4元/吨',
      elec:'1.2元/度',
      hyg:'5元/月',
      crti:'280元'
    },
    short:{
      rent:'30元/月',
      water:'无',
      elec:'无',
      hyg:'无',
      crti:'30元'
    }
  },

  onLoad:function(options){
    console.log(options)
    this.setData({
      roomNum:options.roomNum
    })
    // 页面初始化 options为页面跳转所带来的参数
  },
  call:function(){
    wx.showModal({
      title: '提示',
      content: '联系房东',
      success: function (res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: '1234567890' //仅为示例，并非真实的电话号码
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
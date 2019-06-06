// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    name:'刘佳昱',
    phone:'17601023786'
  },
  onShow: function(){
    var username = wx.getStorageSync('username');
    console.log(username);
    this.setData({
      username: username
    })
  },
  exitLogin: function(){
    wx.clearStorage();
    wx.redirectTo({
      url: '/pages/login/login'
    })
  }

  
})
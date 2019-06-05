// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  login: function (e) {
    var data = e.detail.value;
    console.log('username:' + data.username);
    console.log('password:' + data.password);
    wx.setStorageSync('username', data.username);
    wx.setStorageSync('password', data.password);
    wx.switchTab({
      url:'/pages/index/index',
      success:function(){
        console.log('登陆成功');
      }
    })
  }
})
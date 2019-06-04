// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  /**
   * 用户点击右上角分享
   */
  login: function (e) {
    var data = e.detail.value;
    console.log('username:' + data.username);
    console.log('password:' + data.password);
    wx.switchTab({
      url:'/pages/index/index',
      success:function(){
        console.log('登陆成功');
      }
    })
  }
})
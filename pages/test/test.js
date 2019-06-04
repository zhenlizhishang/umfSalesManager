// pages/test/test.js
Page({
  data: {
    code: ''
  },
  getCode:function(){
    var that = this
    wx.login({
      success: function (res) {
        console.log(res.code);
        that.setData({
          code : res.code
        })
      },
      fail: function (res){
        console.log(res);
      }
    })
  }
})
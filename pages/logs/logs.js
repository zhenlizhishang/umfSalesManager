//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onShow() {
    wx.hideTabBar();
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})

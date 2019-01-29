// pages/test/test.js
Page({

  dianji: function(){
      console.log('点击');
      this.setData({
        mydata: 200,
        "mydata1.title": 200
      })
  },

  log: function(){
    wx.navigateTo({
      url: '../view/view'
    })
  },

  radio(e){
    console.log(e.detail.value)
  },
  checkbox(e){
    console.log(e.detail.value);
  },
  swith(e){
    // console.log(e.detail.value);
    if (e.detail.value == false){
      this.setData({
        switch_value: '禁用',
      })
    }else{
      this.setData({
        switch_value: '启用',
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    mydata: 100,
    switch_value: '启用',
    mydata1:{
      title:10
    },
    items:[
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    checkbox: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
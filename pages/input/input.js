// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: true
  },
  toastShow: function (event) {
    console.log("触发了点击事件，弹出toast")
    this.setData({ status: false })　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide: (function() {
    this.setData({ status: true })　　
  }),
  submit: function(){
    console.log('点击');
  },

  show: function(){
    // wx.showToast({
    //   title: '成功',
    //   icon: 'succes',
    //   duration: 1000,
    //   mask: true
    // })
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    wx.showLoading({
      title: '加载中',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 2000);
  },



  submit1: function (e) {
    // console.log('点击1');
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.showToast({
      title: id,
      icon: 'success',
    });
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
import urlModel from '../../models/url.model.js';
var call = require("../../models/request.js");

//获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    radis:[
      { "name": "男", "value":"1", "checked":true},
      { "name": "女", "value": "0" }
    ],
    checkbox:[
      { "name": "中国", "value": "zh-CN", "checked": true},
      { "name": "美国", "value": "en"}
    ],
    switch: true,
    switch_value:'启用',
    datas:{
      username:'',
      radio: '1',
      checkbox:['zh-CN'],
      switch_value: '1',
    }
  },

  swith(e){
    if (e.detail.value == false) {
      this.setData({
        switch_value: '禁用',
        "datas.radio": 0,
      })
    } else {
      this.setData({
        switch_value: '启用',
        "datas.radio": 1,
      })
    }
  },
  formSubmit: function(e){
      call.request(urlModel.create, this.data.datas);
    // console.log(this.data.datas);
    // wx.showToast({
    //   title: JSON.stringify(this.data.datas),
    //   icon: 'none',
    //   duration: 1000,
    //   mask: true
    // })
   /* wx.request({
      url: urlModel.create,
      method: 'post',
      data: this.data.datas,
      success(res) {
        // console.log(res.data)
          wx.showToast({
              title: '提交成功',
              icon: 'success'
          });
      }
    })*/
  },
  username(e){
    this.setData({
      "datas.username": e.detail.value
    });
  },
  radio: function(e){
    this.setData({
      "datas.radio": e.detail.value
    });
  },
  checkbox: function (e) {
    // console.log(e.detail.value);
    this.setData({
      "datas.checkbox": e.detail.value
    });
  },
  formReset: function(e){
    // console.log('reset');
    this.setData({
      'switch': true,
      'switch_value': '启用'
    });
    wx.showToast({
      title: '重置成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: urlModel.index,
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
      call.getData(urlModel.index);
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
    console.log('this is show');
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
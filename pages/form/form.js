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
      });
      this.setData({
        "datas.radio": 0,
      })
    } else {
      this.setData({
        switch_value: '启用',
      });
      this.setData({
        "datas.radio": 1,
      })
    }
  },
  formSubmit(e){
    // console.log(this.data.datas);
    wx.showToast({
      title: JSON.stringify(this.data.datas),
      icon: 'none',
      duration: 1000,
      mask: true
    })
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
  formReset(e){
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
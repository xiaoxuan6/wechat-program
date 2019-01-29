/**
 * post请求
 * @param url
 * @param data
 */
function request(url, data){
  wx.request({
    url: url,
    method: 'post',
    data: data,
    success(res) {
      console.log(res.data)
        wx.showToast({
            title: JSON.stringify(res.data),
            icon: 'success'
        });
    }
  })
}

/**
 * get 请求
 * @param url
 */
function getData(url){
  wx.request({
    url:url,
    method: 'get',
    success(res){
      // console.log(res.data)
      wx.showToast({
          title: JSON.stringify(res.data),
          icon: 'success'
      });
    }
  });
}

/** module.exports用来导出代码
 * js文件中通过var call = require("../../models//request.js") 加载
 * 在引入引入文件的时候" "里面的内容通过../../../这种类型，小程序的编译器会自动提示，因为你可能
 * 项目目录不止一级，不同的js文件对应的工具类的位置不一样
 */
// module.exports.request = request;
// module.exports.getData = getData;
module.exports = {
  request: request,
  getData: getData
}

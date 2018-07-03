
// 抽取 基地址
var baseURL = 'https://127.0.0.1/';
// 写封装的东西
var method = {
  /*
    opt
      url
      method
      success
      fail
  */
  request:(opt)=>{
    wx.request({
      url: `${baseURL}${opt.url}`||'',
      method: opt.method||'get',
      success:opt.success||((backData)=>{console.log(backData);}),
      data:opt.data||{},
      fail: opt.fail||(()=>{})
    })
  }
}
// 暴露出去
module.exports.request = method.request;


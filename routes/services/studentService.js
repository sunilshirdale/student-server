var { regstdDAO, getstdDAO } = require('../dao/studentDAO')
async function regstdService(req) {
  const { data } = req.body
  console.log("reg services is called");
  var result = await regstdDAO(data);
  return result;
}
async function getstdService() {
  console.log("get services is called");
  var result = await getstdDAO();
  return result;
}
module.exports = { regstdService, getstdService }
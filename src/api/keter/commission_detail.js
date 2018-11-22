// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

const nameK = function () {
  let obj = {}
  obj.name = Random.cname()
  obj.date = Random.date() + ' ' + Random.time()
  return obj
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/keter/commission-detail', 'post', nameK)

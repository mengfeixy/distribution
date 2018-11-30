// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

const data = function () {
  let cash = {
    cash: Random.float(0, 10000, 2, 2)
  }
  return cash
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/keter/withdraw-cash', 'post', data)

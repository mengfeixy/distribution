// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

const data = function () {
  let objList = []
  for (let i = 0; i < 10; i++) {
    objList.push({
      order_no: Random.natural(1000000000, 9999999999),
      date: Random.date() + ' ' + Random.time(),
      num: Random.integer(-999, 999)
    })
  }
  return objList
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/keter/commission-detail', 'post', data)

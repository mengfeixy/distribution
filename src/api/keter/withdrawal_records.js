// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

const data = function () {
  let objList = []
  for (let i = 0; i < 4; i++) {
    objList.push({
      name: '已提现',
      date: Random.date() + ' ' + Random.time(),
      num: Random.integer(-999, 999)
    })
  }
  return objList
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/keter/commission-records', 'post', data)

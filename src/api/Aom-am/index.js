// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// 绑定审核列表
const verifyList = function (obj) {
  let data = []
  let bindState = ['审核不通过', '审核通过']
  obj.body.type === '1' ? bindState.push('审核') : bindState.push('等待审核')
  let num = Mock.mock({
    'num|1-14': 1
  })
  for (let i = 0; i < num.num; i++) {
    let data2 = Mock.mock({
      'state|1': bindState,
      'phone': /^1[3-9][0-9]{9}$/
    })
    let newObject = {
      // title: Random.csentence(5, 30), //  Random.csentence( min, max )
      // image: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      // user: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    Object.assign(newObject, data2)
    data.push(newObject)
  }

  return data
}

// 已绑定列表
const boundList = function (obj) {
  let data = []
  let num = Mock.mock({
    'num|1-14': 1
  })
  for (let i = 0; i < num.num; i++) {
    let data2 = Mock.mock({
      'phone': /^1[3-9][0-9]{9}$/
    })
    let newObject = {
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    Object.assign(newObject, data2)
    data.push(newObject)
  }

  return data
}

/**
 * Mock.mock( url, post/get , 返回的数据)
 */
// 判断是否登录
Mock.mock('/isLogin', 'post', {
  'code|0-2': 0
})
// 判断是否绑定了上级用户
Mock.mock('/isBind', 'post', {
  'code|0-1': 0
})
// 绑定审核列表
Mock.mock('/bind-verify-list', 'post', verifyList)
// 已绑定列表
Mock.mock('/bound-user-list', 'post', boundList)

// 导入 模拟假数据的包
import Mock from 'mockjs'

// 通过Mock.mock 来模拟api接口
Mock.mock('/api/goodlist','get', {
  status: 200,
  message: '获取商品列表成功',
  'data|5': [
    {
      id: '@increment(1)',
      name: '@cword(2,8)'
    }
  ]
})
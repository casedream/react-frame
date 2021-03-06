//navLeft模拟数据json，正常情况为接口访问获得。
export default {
  menuDate: [
    {
      name: '首页',
      path: '/home',
      id: '0',
      icon: 'user'
    },
    {
      name: '设置',
      path: '/home/setting',
      id: '1',
      icon: 'user'
    },
    {
      name: '用户管理',
      path: '/home/uesr',
      id: '2',
      icon: 'user',
      children: [
        {
          name: '用户添加',
          path: '/home/add',
          id: '20'
        },
        {
          name: '管理员管理',
          path: '/home/root',
          id: '21'
        }
      ]
    },
    {
      name: '图表展示',
      path: '/home/echart',
      id: '3',
      icon: 'user',
      children: [
        {
          name: '饼状图',
          path: '/home/echart/bin',
          id: '30',
          children: [
            {
              name: '饼图1',
              path: '/home/echart/bin/1',
              id: '300'
            },
            {
              name: '饼图2',
              path: '/home/echart/bin/2',
              id: '301'
            }
          ]
        },
        {
          name: '折线图',
          path: '/home/echart/line',
          id: '31',
          children: [
            {
              name: '折线图1',
              path: '/home/echart/line/1',
              id: '310'
            },
            {
              name: '折线图2',
              path: '/home/echart/line/2',
              id: '311'
            }
          ]
        }
      ]
    }
  ]
}

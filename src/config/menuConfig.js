/**
 * 左侧导航栏的数据
 */
const menuList = [
  {
    key: '/home',
    icon: 'pie-chart',
    title: '首页'
  },
  {
    key: 'products',
    icon: 'mail',
    title: '商品',
    children: [
      {
        key: '/category',
        icon: 'pie-chart',
        title: '品类管理'
      },
      {
        key: '/product',
        icon: 'pie-chart',
        title: '商品管理'
      },
    ]
  },
  {
    key: '/user',
    icon: 'pie-chart',
    title: '用户管理'
  },
  {
    key: '/role',
    icon: 'pie-chart',
    title: '角色管理'
  },
]
export default menuList
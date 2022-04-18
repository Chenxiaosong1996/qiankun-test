const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView'),
  },
]

// 注意 不是导出router对象
export default routes

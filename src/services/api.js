
const host='http://localhost:8888'
export default {
  loginByAccount:`POST ${host}/api/loginByAccount remote`,
  permisionList:`POST ${host}/api/persionList remote`,//获取权限
  

  queryRouteList: '/routes',

  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  queryUser: '/user/:id',
  queryUserList: '/users',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete',

  queryPostList: '/posts',

  queryDashboard: '/dashboard',
}

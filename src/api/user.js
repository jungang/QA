import request from '@/utils/request'

export function login(data) {
  // return request({
  //   url: '/vue-element-admin/user/login',
  //   method: 'post',
  //   data
  // })
  return new Promise((resolve, reject) => {
    const res = {
      'code': 20000,
      'data': { 'token': 'admin-token' }
    }
    resolve(res)
  })
}

export function getInfo(token) {
/*  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })*/

  return new Promise((resolve, reject) => {
    const res = {
      'code': 20000,
      'data': {
        'roles': ['admin'],
        'introduction': 'I am a super administrator',
        'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        'name': 'Super Admin'
      }
    }
    resolve(res)
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

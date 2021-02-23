import request from '@/utils/request'

export async function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}

export async function getUserInfo() {
  return request({
    url: '/getUserInfo',
    method: 'get',
  })
}

export async function getUserMenu() {
  return request({
    url: '/getUserMenu',
    method: 'get',
    params: {
      id: 12345
    }
  })
}

export async function test() {
  return request({
    url: '/test',
    method: 'post',
  })
}



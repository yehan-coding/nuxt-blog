import request from '@/plugins/axios'

export function getList(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params
  })
}

export function getDetail(id) {
  return request({
    url: `/article/detail/${ id }`,
    method: 'get'
  })
}

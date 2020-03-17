import request from '@/plugins/axios'

export function getList(data) {
  return request({
    url: '/getList',
    method: 'post',
    data
  })
}
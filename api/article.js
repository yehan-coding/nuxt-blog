export function getList(axios, data) {
  return axios.$get('/article/list', {
    params: data
  })
}

export function getDetail(axios, id) {
  return axios.$get(`/article/detail/${ id }`)
}

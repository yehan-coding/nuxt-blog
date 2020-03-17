export function getList(axios, data) {
  return axios.$get('/article/list', {
    params: data
  })
}

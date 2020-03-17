export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('request url: ' + config.url)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log('response code: ' + code)
  })
}
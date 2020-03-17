export default function ({ $axios, redirect }) {

  $axios.setToken('123')
  
  $axios.onRequest(config => {
    console.log(config.url)
  })

  $axios.onResponse(response => {
    
  })

  $axios.onError(error => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    console.log('code: ' + code)
  })
}
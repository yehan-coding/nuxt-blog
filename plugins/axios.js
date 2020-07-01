/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-06-29 14:56:52
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-01 17:41:22
 */ 
export default function ({ $axios, redirect }) {
  
  $axios.setBaseURL('https://zhangtong.work/api')

  $axios.setToken('123')
  
  $axios.onRequest(config => {
    console.log('request', config)
  })

  $axios.onResponse(response => {
    console.log('response', response)
  })

  $axios.onError(error => {
    // console.log(error)
    const code = parseInt(error.response && error.response.status)
    console.log('code: ' + code)
  })
}
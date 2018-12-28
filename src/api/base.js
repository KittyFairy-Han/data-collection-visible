import Axios from 'axios';


const BASEURL = 'http://localhost/lesson/';

export function get(url = 'index/index/testApi', params = {}) {
  let paramsStr = '';
  for (let key in params) {
    paramsStr.length == 0 ? paramsStr += `?${key}=${params[key]}` : paramsStr += `&${key}=${params[key]}`
  }
  return new Promise((resolve, reject) => {
    Axios.get(BASEURL + url + paramsStr).then((res) => {
      // console.log(res);
      if (res.statusText == 'OK') {
        resolve(res.data)
      } else {
        reject('error in COMMON OR BASE', res.msg)
      }

    })
  })

}

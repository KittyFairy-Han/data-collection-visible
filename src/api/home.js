import {get} from "./base";
const baseUrl = 'index/lesson/';

export function getMoocOverview() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/moocOverview').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}


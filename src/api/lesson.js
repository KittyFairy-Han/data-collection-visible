import {get} from "./base";

const baseUrl = 'index/lesson/';

/**
 *课程详情
 * */
export function getDetail(id, flag) {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/getLessonDetail', {id: id, flag: flag}).then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}




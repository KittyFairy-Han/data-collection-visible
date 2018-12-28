import {get} from "./base";

const baseUrl = 'index/lesson/';

/**
 * 拿到课程分类的接口
 */
export function getCourseClass() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/getLessonClass').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}
/**
 *搜索课程相关接口
 * */
export function getCourseResult(param) {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/searchLessonResult', { flag: param.moneyType,type: param.category,filter:param.keyWord}).then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}

/**
 * 搜索评论相关接口
 */
export function getCommentResult(keyword) {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/searchCommentResult', {filter: keyword}).then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}




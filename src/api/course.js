import {get} from "./base";

const baseUrl = 'index/lesson/';

/**
 *免费课程相关接口
 * */

/*
评分数据
 */
export function getFreeGrade() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/freeGradeOverview').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}

/*
难度数据
 */
export function getFreeDifficulty() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/freeDifficultyOverview').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}

/*
时长数据
 */
export function getFreeDuration() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/freeDurationOverview').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}

/*
热门
 */
export function getFreeHot() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/moreThenTenFreeLesson').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }
    })
  })
}

/*
流行
 */
export function getFreePopular() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/getFreeLastSevenDayInfo').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }
    })
  })
}

/**
 * 付费课程相关接口
 * */
/*
评分数据
 */
export function getPayGrade() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/payGradeOverview').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}

/*
难度数据
 */
export function getPayDifficulty() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/payDifficultyOverview').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}

/*
时长数据
 */
export function getPayDuration() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/payDurationOverview').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }

    })
  })
}

export function getPayHot() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/moreThenTenPayLesson').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }
    })
  })
}

export function getPayPopular() {
  return new Promise((resolve, reject) => {
    get(baseUrl + '/getPayLastSevenDayInfo').then(res => {
      if (res.code === 1000) {
        resolve(res.data)
      } else {
        reject('error in API' + res.msg)
      }
    })
  })
}



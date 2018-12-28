export const  themBackground = '#37465a';
export const themColor = '#2dca93';
export const themLight = '#2dca9354';
export const moduleTitle = {
  home:'慕课概况',
  course:{
    key:'课程分析',
    free:'免费课程',
    pay:'付费课程',
  },
  lecturer:'热门讲师',
  search:{
    key:'搜索&对比',
    course:'课程搜索',
    comment:'评论搜索'
  },
  detail:'课程详情'
};
export function makeCellStyle({row,column}) {
  // console.log(row,column);
  if(column.label=='课程'||column.label=='内容'){
    return 'left'
  }else if(column.label=='分数'){
    if (row.score == 10) {
      return 'score prize-one';
    } else if (row.score === 8) {
      return 'score prize-two';
    }else {
      return 'score';
    }
  }else {
    return 'index'
  }
}

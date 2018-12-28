export function reGroup(arr,props='class',contentList='lesson') {
  let newArr=[];
  for (let i=0;i<arr.length;i++){
    if (arr[i][contentList].length>0){
      newArr.push(arr[i][props])
    }
  }
  return newArr
}

export function reGroup2(arr,props='class',contentList='lesson') {
  // console.log(arr)
  let newArr=[];
  for (let i=0;i<arr.length;i++){
    // console.log(arr[i],contentList);
    if (arr[i][contentList].length>0){
      newArr.push({
        label:arr[i][props],
        num:arr[i][contentList].length
      })
    }
  }
  return newArr
}

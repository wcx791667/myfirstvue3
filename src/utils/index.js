const sortSeq =  (a,b)=>{
  return a.orderBy - b.orderBy
}

export const listToTree = (list)=>{
  let oldArr = list && list.sort(sortSeq)
  oldArr.forEach(element => {
    let parentId = element.parentId
    if(parentId !== 0){
      oldArr.forEach(ele=>{
        if(ele.id == parentId){
          if(!ele.children){
            ele.children = []
          }
          ele.children.push(element);
        }
      })
    }
  })
  console.log(oldArr)
  oldArr = oldArr.filter(ele=>ele.parentId === 0)
  return oldArr
}
const getRealStyle=function(style,index){
    const result = { ...style }
    // 按顺序添加 z-index 层级
     result.zIndex = index+1
     if (result.width) {
         result.width += 'px'
     }

     if (result.height) {
         result.height += 'px'
     }

     if (result.top) {
         result.top += 'px'
     }

     if (result.left) {
         result.left += 'px'
     }


     return result

}
export default getRealStyle
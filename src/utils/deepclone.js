
 const deepClone=function(obj){
    if(typeof obj!=="object")return obj
    const res=Array.isArray(obj)?[]:{}
    const keys=Object.keys(obj)
    for(let i of keys){
        if(typeof obj[i]==="object"){
            res[i]=deepClone(obj[i])
        }else{
            res[i]=obj[i]
        }
    }
    return res
}
export default deepClone
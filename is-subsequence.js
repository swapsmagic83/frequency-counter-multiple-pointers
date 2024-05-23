// add whatever parameters you deem necessary
function findFrequency(str){
    let obj = {}
    for(let key of str){
        if(obj[key]){
            obj[key] = obj[key] +1
        }else{
            obj[key] =1
        }
    }
    return obj
}
function isSubsequence(str1,str2) {
    if (str1.length > str2.length) return false
    let objStr1 = findFrequency(str1)
    let objStr2 = findFrequency(str2)
    for(let char in str1){
        if(!objStr2[char]) return false
        if(objStr1[char] !== objStr2[char]) return false
        
    }
}

// add whatever parameters you deem necessary
function findFrequency(str){
    let obj={}
    for(let key of str){
        if(obj[key]){
            obj[key]= obj[key] + 1
        }else{
            obj[key] =1
        }
    }
    return obj
}
function sameFrequency(num1,num2) {
    let stringNum1 = String(num1)
    let stringNum2 = String(num2)
    if(stringNum1.length !== stringNum2.length) return false
    let objStringNum1 = findFrequency(stringNum1)
    let objStringNum2 = findFrequency(stringNum2)
    for(let char in objStringNum1){
        if(!objStringNum2[char]) return false
        if(objStringNum1[char] !== objStringNum2[char]) return false
    }
    return true
}

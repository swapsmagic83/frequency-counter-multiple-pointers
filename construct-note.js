// add whatever parameters you deem necessary

function findFrequency(str){
    let obj = {}
    for (let char of str){
        if(obj[char]){
            obj[char]= obj[char]+1
        }else{
            obj[char]=1
        }
    }
    return obj
}

function constructNote(str1,str2) {
    if (str1.length > str2.length) return false
    let str1Freq = findFrequency(str1)
    let str2Freq = findFrequency(str2)
    for (let key in str1Freq){
        if(!str2Freq[key]) return false
        if(str1Freq[key] > str2Freq[key]) return false
    }
    return true
}

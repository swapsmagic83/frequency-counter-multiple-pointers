// add whatever parameters you deem necessary
function twoArrayObject(array1,array2) {
    let obj1={...array1}
    let obj2={...array2}
    let finalObj={}
    
    for(let i=0;i<array1.length;i++){
        if(!obj2[i]){
            finalObj[obj1[i]]=null
        }
        else{
            finalObj[obj1[i]]=obj2[i]
        }
        
    }
    return finalObj
}

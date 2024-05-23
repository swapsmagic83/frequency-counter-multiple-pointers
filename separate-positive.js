// add whatever parameters you deem necessary
function separatePositive(arr) {
    let positives=[]
    let negatives=[]
    for (let num of arr){
        if(num >0){
            positives.push(num)
        }else{
            negatives.push(num)
        }
    }
    let final =positives.concat(negatives)
    return final
}

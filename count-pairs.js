// add whatever parameters you deem necessary

function countPairs(array,sum) {
    let obj = new Set()
    let count =0
    for (let num of array){
        let difference = sum - num
        if(obj.has(difference)){
            count++
        }
        obj.add(num)
    }
    return count
}

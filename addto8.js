
const arr1 = [1,2,3,9]
const arr2 = [1,2,4,4]

function existSum8(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i]+array[j] == 8){
                return true
            }
        }
    }
    return false
}

function existSumEight2(array){
    let i = 0
    let j = array.length - 1
    while(i < j){
        if(array[i] + array[j] == 8){
            return true
        }else if (array[i] + array[j] > 8){
            j--
        }else{
            i++
        }
    }
    return false
}

// console.log(existSum8(arr1));
// console.log(existSum8(arr2));

console.log(existSumEight2(arr1));
console.log(existSumEight2(arr2));



const arr3 = [1,4,9,5]

function existSumEight3(array){
    const hashtab = {}

    for (let i = 0; i < array.length; i++) {
        if(hashtab[array[i]]){
            return true
        }
        hashtab[8 - array[i]] = true       
    }
    return false
}
console.log(existSumEight3(arr3));
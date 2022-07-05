
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

console.log(existSum8(arr1));
console.log(existSum8(arr2));
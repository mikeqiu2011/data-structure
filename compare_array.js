function exists_common(arr1, arr2){
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])){
            return true
        }
        
    }
    return false
}

arr1 = ['a','b','c','x']
arr2 = ['z','y','i']
arr3 = ['z','y','x']

result1 = exists_common(arr1, arr2)
result2 = exists_common(arr1, arr3)

console.log(result1, result2);


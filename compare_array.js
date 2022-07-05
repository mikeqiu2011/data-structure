function exists_common(arr1, arr2){   // o(a*b)
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])){
            return true
        }
        
    }
    return false
}

function containsCommonItem(arr1, arr2){  // o(a+b)
    if(!arr1 || !arr2){
        return false
    }
    const hashtab = {}
    for (let i = 0; i < arr1.length; i++) {
        hashtab[arr1[i]] = true;        
    }

    for (let i = 0; i < arr2.length; i++) {
        if(hashtab[arr2[i]]){
            return true
        }     
    }
    return false
}

arr1 = ['a','b','c','x', 'a', 1]
arr2 = ['z','y','i', false]
arr3 = ['z','y','x']

result1 = containsCommonItem(arr1, arr2)
result2 = containsCommonItem(arr1, arr3)

console.log(result1, result2);

// now try to break the code
result3 = containsCommonItem(arr1, null)
console.log(result3);


function containsCommonItem2(arr1, arr2){
    return arr1.some(item => arr2.includes())
}

result4 = containsCommonItem2(arr1, arr2)
console.log(result4);
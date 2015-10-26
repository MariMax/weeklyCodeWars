'use strict';
module.exports = (arr1, arr2) => {
    arr1 = Array.isArray(arr1)?arr1:[];
    arr2 = Array.isArray(arr2)?arr2:[];



    let length = Math.max(arr1.length, arr2.length);
    let result = [];
    for(let i = 0;i<length;i+=1){
        if (arr1[i]&&arr2[i]) {
            result.push(arr1[i] + arr2[i]);
            continue;
        }
        if (arr1[i]){
            result.push(arr1[i]);
            continue;
        }
        result.push(arr2[i]);
    }
    return result;
};
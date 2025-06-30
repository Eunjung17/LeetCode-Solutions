/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let numsMap = new Map();

    for(let num of nums){

        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }

    for(let [key, value] of numsMap){
        if(value === 1) return key;
    }

    return false;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let freqNums = new Map();

    for(let num of nums){
        freqNums.set(num, (freqNums.get(num) || 0) + 1);
    }

    let maxCount = 0;
    let majorityElement = null;

    for(let [key,value] of freqNums){
        if(value > maxCount){
            maxCount = value;
            majorityElement = key;
        }
    }

    return majorityElement;
};
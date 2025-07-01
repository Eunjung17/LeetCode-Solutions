/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    nums.sort((a,b)=>a-b);

    if(nums[nums.length -1] !== nums.length) return nums.length;

    for(let i = 0 ; i < nums.length ; i++){

        if(i !== nums[i]) return i;
    }

    return false;
};
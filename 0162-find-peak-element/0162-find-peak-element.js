/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    if(nums.length === 0) return false;
    if(nums.length === 1) return 0; 

    for(let i = 0 ; i < nums.length - 1 ; i++){
        if(nums[i] > nums[i+1]) return i;
    }
    return nums.length - 1;
};
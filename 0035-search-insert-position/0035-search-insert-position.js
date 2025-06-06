/**
    1. Iterate from beginning in nums:
        - if nums[index] >= target: return index
    2. return nums.length (Escape 1.loop means there is no corresponding value with target)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let index = 0 ; index < nums.length ; index++){
        if(nums[index] >= target) return index;
    }
    return nums.length;
};
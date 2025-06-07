/** 
- fail to reason
: You must write an algorithm that runs in O(log n) time.
: We need to use Binary Search instead of linear iteration
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) {

//     if(nums.length === 0) return false;
//     if(nums.length === 1) return 0; 

//     for(let i = 0 ; i < nums.length - 1 ; i++){
//         if(nums[i] > nums[i+1]) return i;
//     }
//     return nums.length - 1;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    if(nums.length === 0) return false;
    if(nums.length === 1) return 0; 

    let left = 0;
    let right = nums.length - 1;

    while(left !== right){
        
        let middle = Math.floor((left + right) /2);

        if(nums[middle] < nums[middle + 1]){
            left = middle + 1;
        }else{
            right = middle;
        }
    }
    return right;
};
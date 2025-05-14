/** 
[ First Try ]

1. Find the `center` index by calculating (nums.length / 2) - 1
2. Based on the center index, choose either the left or right half of the array:
    2.1 If target === array[center] , return center
    2.2 else if target < array[center] , 
        - Recursively call this function with <argument: nums.slice(0, center + 1)> 
    2.3 else (target < array[center + 1])
        - Recursively call this function with <argument: nums.slice(center, nums.length)>

[ Fail Reason ] 
I didn't account for the fact that using `nums.slice` changes the index context, which causes the returned index to be incorrect relative to the orignal array. 
There is no return value for cursive.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {

//     let center = Math.floor(nums.length / 2) -1;
//     // if array.length is 1 or 2, avoid value to be -1
//     if(nums.length === 1 || nums.length === 2) center = 0;

//     if(target === nums[center]) return center;
//     else if(target < nums[center]) return search(nums.slice(0, center + 1), target);
//     else return search(nums.slice(center + 1, nums.length), target);
// };

/** 
{ Second Try }

[Variable]
- start = 0
- end = nums.length - 1
- center = 0

[Logic]
- While nums.length > 0
    - Find the center by calculating Math.floor((start + end)/2)
    - If array[center] === target , return center
    - else if array[center] < target , 
        - start = center + 1
    - else (array[center + 1] > target)
        - end = center


- Time Complexity : O(logN)
- Space Complexity : O(1)


 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end){

        let center = Math.floor((start + end)/2);

        if(nums[center] === target) return center;
        else if(nums[center] < target) start = center + 1;
        else end = center -1;
    }

    return -1; // if there is no nums array
};


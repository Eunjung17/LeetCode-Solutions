/** 
- Time Complexity: O(N)
- Space Complexity: O(N)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {

//     let freqNums = new Map();

//     for(let num of nums){
//         freqNums.set(num, (freqNums.get(num) || 0) + 1);
//     }

//     let maxCount = 0;
//     let majorityElement = null;

//     for(let [key,value] of freqNums){
//         if(value > maxCount && value > nums.length / 2){
//             maxCount = value;
//             majorityElement = key;
//         }
//     }

//     return majorityElement;
// };

var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    // 1. 후보 찾기
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
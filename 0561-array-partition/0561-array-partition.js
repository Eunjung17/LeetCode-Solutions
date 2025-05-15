/** 
[key point]
- Sort the number ascending
- If we have a sum of maxium for each pair of minimum(num1, num2):
    - make pairs from beginning of nums[0], nums[1] ....nums[nums.length-2], nums[nums.length-1]
    Because, min(1, 1000) is 1 but min(999, 1000) is 999 

Time Complexity: O(NLogN)
Space Complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {

    if(nums.length < 2) return nums;

    nums.sort((a,b)=> a-b);

    let maxSum = 0;
    let i = 0;

    while(i < nums.length - 1){
        maxSum += Math.min(nums[i], nums[i+1]); 
        i += 2;
    }

    return maxSum;
};

/** 
[improved part]

Eventually, we just need to sum of the values at even indices
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {

    if(nums.length < 2) return nums;

    nums.sort((a,b)=> a-b);

    let maxSum = 0;

    for(let i = 0 ; i < nums.length ; i +=2){
        maxSum += nums[i];
    }
    return maxSum;
};
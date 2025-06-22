/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    let KCount = 0;
    let maxNum = -Infinity;
    let minNum = Infinity;
    let offset = 0;

    for(let i = 0 ; i < nums.length ; i++){
        
        maxNum = Math.max(maxNum, nums[i]);
        minNum = Math.min(minNum, nums[i]);
    }

    if(minNum < 0) offset = Math.abs(minNum);

    let freqNum = new Array(Math.abs(maxNum) + Math.abs(offset) + 1).fill(0);

    for (let num of nums) {
        freqNum[num + offset]++;
    }

    for(let i = freqNum.length - 1 ; i >= 0 ; i--){

        KCount += freqNum[i];

        if(KCount >= k) return i - offset;
    }

    return -1;
};
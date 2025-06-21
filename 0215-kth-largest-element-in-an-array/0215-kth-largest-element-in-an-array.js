/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    let KCount = 0;
    let arrayRange = -1;
    let OFFSET = 10000;

    // for(let i = 0 ; i < nums.length ; i++){

    //     arrayRange = Math.max(arrayRange, nums[i]);
    // }

    let freqNum = new Array(20001).fill(0);

    for (let num of nums) {
        freqNum[num + OFFSET]++;
    }

    for(let i = freqNum.length - 1 ; i >= 0 ; i--){

        KCount += freqNum[i];

        if(KCount >= k) return i - OFFSET;
    }

    return -1;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    let numSet = new Set(nums);
    let startSeqNum = 0;
    let countSeq = 0;
    let maxSeq = 0;

    for(num of nums){

        // Only start counting if num is the start of a sequence 
        if(!numSet.has(num - 1)){

            startSeqNum = num;
            countSeq = 1;

            // Count consecutive numbers
            while(numSet.has(startSeqNum + 1)){

                startSeqNum++;
                countSeq++;
            }
        }

        maxSeq = Math.max(maxSeq, countSeq);
    }

    return maxSeq;
};
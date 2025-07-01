
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let countZero = 0;
    let pointer = null;

    for(let i = 0 ; i < nums.length ; i++){

        if(nums[i] === 0 && pointer === null){
            pointer = i;
        }
        
        if(nums[i] !== 0 && pointer !== null){

            let temp = nums[pointer];
            nums[pointer] = nums[i];
            nums[i] = temp;
            
            if(nums[pointer + 1] === 0){
                pointer = pointer + 1;
            }
        }
    }

    return nums;
};
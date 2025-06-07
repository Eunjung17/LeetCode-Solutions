/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var searchRange = function(nums, target) {

    function findLeft(){

        let index = -1;
        let left = 0;
        let right = nums.length - 1;

        while(left <= right){
            let middle = Math.floor(((left + right)  / 2));
            if(nums[middle] < target){
                left = middle + 1;
            }else if(nums[middle] > target){
                right = middle - 1;
            }else{
                index = middle;
                right = index - 1;
            }
        }

        return index;
    }

    function findRight(){

        let index = -1;
        let left = 0;
        let right = nums.length - 1;

        while(left <= right){
            let middle = Math.floor(((left + right)  / 2));
            if(nums[middle] > target){
                right = middle - 1;
            }else if(nums[middle] < target){
                left = middle + 1;
            }else{
                index = middle;
                left = middle + 1;
            }
        }

        return index;
    }

    return [findLeft(), findRight()];
};
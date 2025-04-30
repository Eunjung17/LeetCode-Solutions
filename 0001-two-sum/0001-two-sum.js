/*
1. First Code
2. Time Complexity O(n^2)
3. Space Complexity O(1)

function twoSum(nums, target){
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }

    return false;
}

*/

/*
1. Second Code
2. Time Complexity O(n)
3. Space Complexity O(1)
*/ 
function twoSum(nums, target){
    let indexSet = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        const difference = target - nums[i];
        if(indexSet.has(nums[i])) return [indexSet.get(nums[i]), i];
        else indexSet.set(difference, i);    
    }
    return indexSet;
}

let nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums, target));
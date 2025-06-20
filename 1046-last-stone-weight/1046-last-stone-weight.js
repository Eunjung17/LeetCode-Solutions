/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    if(stones.length === 1) return stones[0];

    for(let i = 0 ; i < stones.length - 1 ; i++){ // for 'stones.length - 1', to remain 'last stone weight'

        stones.sort((a,b)=> b-a);

        if(stones[0] === stones[1]){

            stones[0] = 0;
            stones[1] = 0;

        }else{

            stones[0] = stones[0] - stones[1];
            stones[1] = 0;

        }
    }

    return stones[0];
};
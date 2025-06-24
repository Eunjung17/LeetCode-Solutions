/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n + 1).fill(0);

    for(let i = 0 ; i < ans.length ; i++){

        let binary = [];
        let dividend = i;

        while(dividend >= 0){

            let quotient = Math.floor(dividend / 2);
            let remainder = dividend % 2;

            if(remainder === 1){
                binary.push(remainder);
            }

            dividend = quotient; 

            if(dividend === 0){
                break;
            }

            if(dividend === 1){
                binary.push(dividend);
                break;
            }
        }

        ans[i] = binary.length;
    }

    return ans;
};
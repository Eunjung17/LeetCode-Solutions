/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let binary = [];
    let dividend = n;

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

    return binary.length;
};
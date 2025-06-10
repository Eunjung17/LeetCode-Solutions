/**
Time Complexity: O(N)
Space Complexity: O(N)
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    // + 1 : For a carry occurs
    let maxLen = Math.max(a.length, b.length) + 1
    let result = Array(maxLen).fill("0");
    let current = maxLen - 1;

    a = a.padStart(maxLen, "0");
    b = b.padStart(maxLen, "0");
    let carryOver = 0;

    while(current > -1){
        
        let sum = Number(a[current]) + Number(b[current]) + carryOver;
        
        if(sum >= 2){
            carryOver = 1;
            sum = sum - 2;
        }else{
            carryOver = 0;
        }

        result[current] = sum.toString();

        current--;
    }

    if(result[0] === "0") result = result.slice(1);
    result = result.join('');

    return result;
};
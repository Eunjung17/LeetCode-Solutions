/*
    1. Convert the string 'x' to an array
    2. Iterate from the beginning to the middle :
        - Compare elements from the beginning and the end  
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    x = x.toString().split('');

    let middle = x.length / 2;
    let pointer = x.length - 1;

    for(let i = 0 ; i < middle ; i++){

        if(x[i] !== x[pointer]) return false;
        else pointer--;
    }

    return true;
};
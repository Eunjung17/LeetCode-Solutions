/*
    1. string 'x' convert to array
    2. iterate from beginning to middle :
        - comparing indexs from the beginning from the end  
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
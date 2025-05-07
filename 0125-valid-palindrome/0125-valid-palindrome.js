/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    const convertString = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const reverseString = convertString.split('').reverse().join('');

    if(convertString === reverseString ) return true;
    else return false;
};
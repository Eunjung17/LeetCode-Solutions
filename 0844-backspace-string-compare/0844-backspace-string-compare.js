/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let SWithBackspace = [];
    let TWithBackspace = [];

    for(let char of s){
        if(char !== '#') SWithBackspace.push(char);
        else SWithBackspace.pop();
    }

    for(let char of t){
        if(char !== '#') TWithBackspace.push(char);
        else TWithBackspace.pop();
    }


    return SWithBackspace.join("") === TWithBackspace.join("");

};
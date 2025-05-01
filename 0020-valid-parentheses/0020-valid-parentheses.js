/**
 * First Code
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {

    let openBracket = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') openBracket.push(s[i]);
        else{
            if(s[i] === ')'){
                if(openBracket[openBracket.length-1] === '(') openBracket.pop();
                else return false;
            }else if(s[i] === ']'){
                if(openBracket[openBracket.length-1] === '[') openBracket.pop();
                else return false;
            }else if(s[i] === '}'){
                if(openBracket[openBracket.length-1] === '{') openBracket.pop();
                else return false;
            }
        }
    }

    if(openBracket.length === 0) return true;
    else return false;
};

/**
 * Second Code
 * @param {string} s
 * @return {boolean}
 */
// function isValid(s) {
//     const bracketPairs = {
//         ')' : '(',
//         ']' : '[',
//         '}' : '{'
//     };

//     const checkStack = [];

//     for(const char of s){
//         if(char === '(' || char === '[' || char === '{') checkStack.push(char);
//         else{
//             if(bracketPairs[char] !== checkStack.pop()) return false;
//         }
//     }
//     return checkStack.length === 0; // case: s = ")",  s = "(";
// };

let s = "()[]{}";
isValid(s);
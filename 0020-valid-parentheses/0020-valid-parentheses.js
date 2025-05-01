/**
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

let s = "()[]{}";
isValid(s);
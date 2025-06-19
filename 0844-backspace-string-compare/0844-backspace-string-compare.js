/** 
- Time Complexity : O(m+n)
- Space Complexity : O(m+n)

fail: That's not O(n) time and O(1) space
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var backspaceCompare = function(s, t) {
//     let SWithBackspace = [];
//     let TWithBackspace = [];

//     for(let char of s){
//         if(char !== '#') SWithBackspace.push(char);
//         else SWithBackspace.pop();
//     }

//     for(let char of t){
//         if(char !== '#') TWithBackspace.push(char);
//         else TWithBackspace.pop();
//     }


//     return SWithBackspace.join("") === TWithBackspace.join("");

// };

/** 

For O(n) time and O(1) space
Use pointers

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;

    let sBackspace = 0;
    let tBackspace = 0;

    while(sPointer >= 0 || tPointer >= 0){

        while(sPointer >= 0){

            if(s[sPointer] === '#'){
                sBackspace++;
                sPointer--;
            }else if(sBackspace > 0){
                sBackspace--;
                sPointer--;
            }else break;
        }

        
        while(tPointer >= 0){

            if(t[tPointer] === '#'){
                tBackspace++;
                tPointer--;
            }else if(tBackspace > 0){
                tBackspace--;
                tPointer--;
            }else break;
        }

        if(s[sPointer] !== t[tPointer]) return false;

        sPointer--;
        tPointer--;

    }

    return true;
};
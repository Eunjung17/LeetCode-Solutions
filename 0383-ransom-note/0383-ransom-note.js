/** 
    0. if magazine.length < ransomeNote.length
        - return false
    1. Create Hashmap, putting strings of magazine: 
        - initial setting: new key - 0
        - 기존 key - number++
    2. While iterating ransomNode:
        - if Hashmap has a string of ransomeNote:
            - if value(key) in Hashmap is 0
                - return false
            - else
                - value-- according to the key

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    if(ransomNote.length > magazine.length) return false;

    let magazineMap = new Map();

    // Count the frequency of each character in the magazine
    for(let char of magazine){
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }

    // Check if ransomeNote can be constructed by using the letters from magazine
    for(let char of ransomNote){

        if(!magazineMap.has(char) || magazineMap.get(char) === 0){
            return false;
        }

        magazineMap.set(char, magazineMap.get(char) - 1);
    }

    return true;
};
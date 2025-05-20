/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

 Time Complexity: O(NLogN)
 Space Complexity: O(N)
 */
// var isAnagram = function(s, t) {
//     const stringS = s.split('').sort().join('');
//     const stringT = t.split('').sort().join('');

//     if(stringS === stringT) return true;
//     else return false;
// };

/**
Time Complexity: O(N)
Space Complexity: O(N)
*/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const S = new Map();
    const T = new Map();

    for (let char of s) {
        S.set(char, (S.get(char) || 0) + 1);
    }

    for (let char of t) {
        T.set(char, (T.get(char) || 0) + 1);
    }

    for (let [key, value] of S) {
        if (T.get(key) !== value) return false;
    }

    return true;
};
/**
    Using Binary Search

- Time Complexity: O(LogN)
- Space Complexity: O(1)
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        let middle = 0;

        while(start < end){
            
            middle = Math.floor((start + end) / 2);

            if(isBadVersion(middle)){ // if isBadVersion(middle) is false, move end index.
                end = middle;
            }else{ // else isBadVersion(middle) is true, move start index.
                start = middle + 1;
            }
        }

        return start;
    };
};
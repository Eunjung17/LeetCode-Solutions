/** 
    1. 알파벳 별로 횟수가 몇 번 나오는지 map에 저장
    2. 특정 수들의 합을 구한다:
        - 짝수
        - 홀수이면서 1 이상의 수는 1만 빼서 짝수를 만든 수
        - 모든 홀수들 중에 하나의 경우에만 1 더하기

    1. Store the number of occurrences for each alphabet letter in a map
    2. Calculate the sum based on following rules:
        - even numbers as they are
        - For odd numbers greater than 1, subtract 1 to make them even
        - Add 1 only for one case among all odd numbers

- Time Complexity: O(N)
- Space Complexity: O(1)
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    let alphabetOccur = new Map();
    for(let char of s){
        alphabetOccur.set(char, (alphabetOccur.get(char) || 0) + 1);
    }

    let valuesOfAlphabet = [...alphabetOccur.values()];
    //let valuesOfAlphabet = Array.from(alphabetOccur.values());
    let alreadyOneFinded = false;
    let sumResult = 0;

    for(let i = 0 ; i< valuesOfAlphabet.length ; i++){
        
        if(valuesOfAlphabet[i] % 2 === 0){

            sumResult += valuesOfAlphabet[i];

        }else{

            if(!alreadyOneFinded){
                    sumResult += 1;
                    alreadyOneFinded = true;
            }
            sumResult += valuesOfAlphabet[i] - 1;
        }

    }

    return sumResult;
};
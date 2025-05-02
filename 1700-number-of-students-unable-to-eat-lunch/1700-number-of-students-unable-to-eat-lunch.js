/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 * 
 * - Time complexity: O(n^2)
    - Space complexity: O(1)
 */
// function countStudents(students, sandwiches) {

//     if(sandwiches.length < 1) return students.length;

//     //case: students=[1,1,1] sandwiches=[0,0,0]
//     //after we check all the values of students[i], stop checking
//     //let sizeOfArray = 0;
//     let count = 0;

//     while(students.length > 0){
//         if(students[0] === sandwiches[0]){
//             students.shift();
//             sandwiches.shift();
//             count = 0;
//         }else{
//             if(count === students.length){
//                 break;
//             }else{
//                 students.push(students.shift());
//                 count++;
//             }
//         }
//     }

//     return students.length;
// };


/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 * 
 * - Time complexity: O(n)
    - Space complexity: O(1)
 */

function countStudents(students, sandwiches) {
    let count0 = 0;
    let count1 = 0;

    for(let student of students){
        if(student === 0) count0++;
        else count1++;
    }

    for(let sandwich of sandwiches){
        if(sandwich === 0 && count0 >0){
            count0--;
        }else if(sandwich === 1 && count1 > 0){
            count1--;
        }else break;
    }

    return count0 + count1;
};

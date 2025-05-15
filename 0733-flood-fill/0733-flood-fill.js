/** 
[ First Try ]

<variables>
- rows: image.length
- cols: image[0].length

<logic>
- if image[sr][sc] is same as color then, just return (it doesn't need to be)
- else 
    - change the color
    - recursively call the adjacentCheck function (sr - 1, sc)
    - recursively call the adjacentCheck function (sr + 1, sc)
    - recursively call the adjacentCheck function (sr, sc - 1)
    - recursively call the adjacentCheck function (sr, sc + 1)

 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {

    if(image[sr][sc] === color) return image; //there is no color to change

    let rows = image.length;
    let cols = image[0].length;

    let originColor = image[sr][sc]; //store originColor for checking in another location

    function adjacentCheck(newSr, newSc){
        if(newSr < 0 || newSr >= rows || newSc < 0 || newSc >= cols || image[newSr][newSc] !== originColor){
            return;
        }else{
            image[newSr][newSc] = color;
        }

        adjacentCheck(newSr - 1, newSc);
        adjacentCheck(newSr + 1, newSc);
        adjacentCheck(newSr, newSc - 1);
        adjacentCheck(newSr, newSc + 1);
    }

    adjacentCheck(sr, sc);

    return image;
};

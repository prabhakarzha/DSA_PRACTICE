/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let n = matrix.length;
    let ans = [];

    for(let i = 0;i<n;i++){
        let count = 0;

        for(let j = 0;j<n;j++){
            count +=matrix[i][j];
        }
        ans.push(count);
    }
    return ans;
    
};
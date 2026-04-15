/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let first = 0;
    let last  = numbers.length-1;

    while(first<last){
        let sum = numbers[first]+ numbers[last];

        if(sum===target){
            return [first+1,last+1];
        }else if(sum<target){
            first++;
        }else{
            last--;
        }

    }

  
    
};
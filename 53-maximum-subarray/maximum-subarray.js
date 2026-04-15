var maxSubArray = function(nums) {
    if(nums.length < 1) return 0;

    let currSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++){
        
        // decide: naya start kare ya continue kare
        if(currSum + nums[i] > nums[i]){
            currSum = currSum + nums[i];
        } else {
            currSum = nums[i];
        }

        // update max
        if(currSum > maxSum){
            maxSum = currSum;
        }
    }

    return maxSum;
};
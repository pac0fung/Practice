/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    //debugger;
    let counter = 1;
    let lastNum = nums[0];
    let lastidx = 0;

    for(let i = 1; i < nums.length; i++){
        if(lastNum < nums[i]){
            lastNum=nums[i];
            nums[lastidx+1] = lastNum;
            lastidx++;
            counter++;            
        }
    }

    for(let j = counter; j < nums.length; j++){
        nums[j] = "_";
    }

    return counter;
};
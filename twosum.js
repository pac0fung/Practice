/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (map1.has(complement)) {
            return [map1.get(complement), i];
        } else {
            map1.set(nums[i], i);
        }
    }
    
    return undefined;
};
// algorithm 1
function twoSum1(nums, target) {
  for (let i = 0; i < nums.length -1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum1([2, 7, 11, 15], 9)); //output [ 0, 1 ]


// algorithm 2
function twoSum2(nums, target) {
  for (i in nums) {
    if (nums.includes(target - nums[i])) {
      return [+i, nums.indexOf(target - nums[i])];
    }
  }  
}

console.log(twoSum2([2, 7, 11, 15], 9)); //output[0, 1]


//algorithm 3
function twoSum3(nums, target) {
  let numsIndex = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in numsIndex) {
      return [numsIndex[diff], i];
    }
    numsIndex[nums[i]] = i;
  }
};

console.log(twoSum3([2, 7, 11, 15], 9));

/*
  For example:
    twoSum([2, 7, 11, 15], 9);
  Should returns:
    [0, 1]
  Because:
    nums[0] + nums[1] is 9
*/
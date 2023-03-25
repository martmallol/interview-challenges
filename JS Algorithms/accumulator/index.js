const tests = [
  [[[1, 2, 3, 4], 10], true],
  [[[1, 2, 3, 4], 5], true],
  [[[1, 2, 3, 4], 8], false],
];

function match(nums, match) {
  let first = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if(!first && nums.includes(nums[i] + nums[j])) first = true;
      
      // Evaluacion segundo parametro
      for (let k = j+1; k < nums.length; k++) {
        if(nums[i] + nums[j] + nums[k] == match) {
          console.log(false);
          return false;
        }
      }
    }
    
  }
  console.log(first);
  return first;
}

match([1, 2, 3, 4], 10); // false
match([1, 2, 3, 4], 5); // true
match([1, 2, 3, 4], 8); // false

/* tests.forEach(([args, result]) => {
  console.assert(match(...args) === result, 'Test failing')
}) */
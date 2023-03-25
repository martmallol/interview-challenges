// 20 MIN
function digitSum(value) {
  let sum = 0;
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}

function getMaxSum(list) {
  let res = -1;
  for (let i = 0; i < list.length; i++) {
    for(let j = i+1; j < list.length; j++) {
      if(digitSum(list[i]) == digitSum(list[j]) && (list[i] + list[j] > res)) res = list[i] + list[j];
    }
  }
  console.log(res);
}

getMaxSum([42, 24, 31, 14]); // 66
getMaxSum([51, 71, 17, 42]); // 93
getMaxSum([42, 33, 60]); // 102
getMaxSum([51, 32, 43]) // -1

console.log(digitSum(12));
console.log(digitSum(33));
console.log(digitSum(1234));
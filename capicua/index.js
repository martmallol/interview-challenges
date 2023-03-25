// 10 MIN
function isCapicua(num) {
  // From number to array of digits
  const arr = Array.from(String(num), Number);
  const len = arr.length;
  let res = true;
  for (let i = 0; i < (len / 2); i++) {
    res = (arr[i] == arr[len - 1 - i]); 
    if(!res) break;
  }
  return res;
}

console.log(isCapicua(12321)); // true
console.log(isCapicua(12322)); // false
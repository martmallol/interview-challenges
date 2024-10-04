export const fromToArray = (from, to) => {
  let arr = [];
  for (let i = 0; from + i <= to; i++) {
    arr.push({
      number: from + i,
      used: false,
    });
  }
  return arr;
};

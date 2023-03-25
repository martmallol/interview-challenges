// 12 MIN
function getHighestLetter(string) {
  let res = 'A';
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if(string.includes(character.toUpperCase()) && (character.toUpperCase() > res)) {
      res = character.toUpperCase();
    }
  }
  console.log(res);
}

getHighestLetter("aaBabcDaAzZ") // B
// 20 MIN
function prefijoRepe(string, idx) {
  let letra = string[idx];
  let repes = 1;
  for (let i = idx+1; i < string.length; i++) {
    if (string[i] == letra) {
      repes++;
    } else {
      break;
    } 
  }
  return repes;
}

function removeTriplicates(str) {
  for (let i = 0; i < str.length; i++) {
    let prefijo = prefijoRepe(str, i);
    if(prefijo > 2) {
      for (let j = 0; 2 < prefijo - j; j++) {
        str = str.slice(0, i) + str.slice(i+1);
      }
    }
  }
  console.log(str);
}

removeTriplicates("aaddaaa") // aaddaa
removeTriplicates("eedaaad") // eedaad
removeTriplicates("xxxtxxx") // xxtxx
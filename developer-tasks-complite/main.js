// First task
// parseFloat() or Number(), but second only with positive numbers
function reverseNum(num) {
  return (
    parseFloat(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(num)
  );
}

console.log(reverseNum(-1234.789)); // -987.4321

// Secons task
// Only positive integers
function reverseNum2(num) {
  let revNum = 0;
  while (num > 0) {
    revNum = revNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return revNum;
}

console.log(reverseNum2(1420)); // 241

// Third task
function longestSubString(str) {
  let longStr = "";
  for (let i = 0; i < str.length; i++) {
    let tempStr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (str[j - 1] != str[j]) {
        tempStr += str[j];
      } else {
        break;
      }
    }
    if (longStr.length < tempStr.length) {
      longStr = tempStr;
    }
  }
  return longStr;
}

console.log(longestSubString("aqqmuv")); // qmuv

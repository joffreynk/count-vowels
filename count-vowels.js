const getCount = (str) => {
  // Your solution
  let count = 0;
  for(let i=0; i<str.length; i++) {
    if ('aeiuo'.includes(str[i])) count++;
  }
  return count;
};

console.log(getCount('my pyx')); // 0
console.log(getCount('pear tree')); // 4
console.log(getCount('abracadabra')); // 5
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13

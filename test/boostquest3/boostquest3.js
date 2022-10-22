const codeList = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
const input = 'v2csnk4oen4q5cj4sbmo1bmo3ru4j4a';
const boostNum = 13005196351;
const plusNum = 91;

function boostHash(input) {
  const answer = [];
  let result = 0;

  input.split('').forEach((str) => {
    result = calc(str, result);
  });

  const binary = result.toString(2).padStart(40, '0');
  for (let i = 0; i < 8; i++) {
    answer.push(binary.slice(i * 5, (i + 1) * 5));
  }
  return answer.map((el) => codeList[parseInt(el, 2)]).join('');
}

function calc(str, start) {
  let result = start + boostNum;
  const code = codeList.indexOf(str) + 91;
  result *= code;

  let bit = result.toString(2);
  if (bit.length > 40) {
    bit = bit.slice(bit.length - 40);
  }

  const shifted = bit.slice(bit.length - 10) + bit.slice(0, bit.length - 10);
  return parseInt(shifted, 2);
}

function proof() {
  let i = 1;
  let result;

  while (true) {
    const nonceStr = i + input;
    result = boostHash(nonceStr);
    if (result.slice(0, 3) === 'bst') break;
    i++;
  }

  return i;
}

console.log(proof());

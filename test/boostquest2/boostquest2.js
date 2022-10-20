const input = 306989;
const playerNum = 100;

function potatoGame(input) {
  let number = input;
  let count = 1;
  while (number > 1) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = number * 3 + 1;
    }
    count++;
  }
  return count;
}

console.log(potatoGame(input));

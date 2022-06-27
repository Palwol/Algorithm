//구명보트
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  let i = 0;
  let min = people.length - 1;

  while (i <= min) {
    if (i === min) {
      count++;
      break;
    }
    if (people[i] + people[min] <= limit) {
      i++;
      min--;
    } else {
      i++;
    }
    count++;
  }
  return count;
}

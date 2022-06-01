//소수 찾기
function solution(numbers) {
  let count = 0;
  const set = new Set();
  for (let len = 1; len <= numbers.length; len++) {
    permutation(numbers.split(""), len).forEach((el) => {
      set.add(parseInt(el.join(""), 10));
    });
  }
  set.forEach((el) => {
    if (isPrime(el)) count++;
  });

  //순열 알고리즘
  function permutation(arr, r) {
    const result = [];
    if (r === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const p = permutation(rest, r - 1);
      const attached = p.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }
  //소수 판별 알고리즘
  function isPrime(num) {
    if (num <= 1) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  return count;
}
console.log(solution("1231"));

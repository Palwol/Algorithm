//소수판별 알고리즘
function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
      return true;
    }
  }
}

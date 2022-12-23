function solution(n, k, enemy) {
  let left = k - 1;
  let right = enemy.length - 1;
  let answer = enemy.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const defenced = enemy.slice(0, mid + 1).sort((a, b) => a - b);
    // for문 사용 시 7752ms
    // let minEnemies = 0;
    // for (let i = 0; i < defenced.length - k; i++) {
    //   minEnemies += defenced[i];
    // }

    // slice, reduce 사용 시 7937ms
    const minEnemies = defenced.slice(0, defenced.length - k).reduce((sum, curr) => sum + curr, 0);

    if (minEnemies > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = left;
    }
  }
  return answer;
}

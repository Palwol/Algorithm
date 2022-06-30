function solution(dirs) {
  const set = new Set();
  let count = 0;
  const now = [0, 0];
  let isMove = 0;

  function isVisited(dir) {
    if (now[0] >= -5 && now[0] <= 5 && now[1] >= -5 && now[1] <= 5) {
      if (set.has(now.join("") + dir)) return true;
    }
    return false;
  }

  function move(dir) {
    if (dir === "U") {
      if (now[0] < 5) {
        isMove = true;
        set.add(now.join("") + "U");
        now[0] += 1;
        set.add(now.join("") + "D");
      } else isMove = false;
    } else if (dir === "D") {
      if (now[0] > -5) {
        isMove = true;
        set.add(now.join("") + "D");
        now[0] -= 1;
        set.add(now.join("") + "U");
      } else isMove = false;
    } else if (dir === "R") {
      if (now[1] < 5) {
        isMove = true;
        set.add(now.join("") + "R");
        now[1] += 1;
        set.add(now.join("") + "L");
      } else isMove = false;
    } else if (dir === "L") {
      if (now[1] > -5) {
        isMove = true;
        set.add(now.join("") + "L");
        now[1] -= 1;
        set.add(now.join("") + "R");
      } else isMove = false;
    }
  }

  for (const dir of dirs) {
    if (!isVisited(dir)) {
      move(dir);
      if (isMove) count++;
    } else move(dir);
  }
  return count;
}

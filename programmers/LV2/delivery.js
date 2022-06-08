//배달
function solution(N, road, K) {
  const INF = Infinity;
  const gragh = Array.from(Array(N + 1), () => new Array());
  road.forEach(([from, to, dist]) => {
    gragh[from].push({ to: to, dist: dist });
    gragh[to].push({ to: from, dist: dist });
  });
  const distance = Array.from(Array(N + 1).fill(INF));
  console.log(distance);

  const queue = [1];
  distance[1] = 0;

  while (queue.length) {
    const curr = queue.pop();
    gragh[curr].forEach((vertex) => {
      if (distance[curr] + vertex.dist < distance[vertex.to]) {
        distance[vertex.to] = distance[curr] + vertex.dist;
        queue.push(vertex.to);
      }
    });
  }
  return distance.filter((el) => el <= K).length;
}
solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
);

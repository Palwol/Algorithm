//선형자료구조 방식(큐 이용)
const INF = Infinity;
function dijkstra_arr(n, gragh) {
  const adj = Array.from(Array(n), () => new Array());
  gragh.forEach(([from, to, dist]) => {
    adj[from].push({ to: to, dist: dist });
    adj[to].push({ to: from, dist: dist });
  });
  const distance = Array.from(Array(n).fill(INF));
  const queue = [0];
  distance[0] = 0;

  while (queue.length) {
    const curr = queue.pop();
    adj[curr].forEach((vertex) => {
      if (vertex.dist + distance[curr] < distance[vertex.to]) {
        distance[vertex.to] = vertex.dist + distance[curr];
        queue.push(vertex.to);
      }
    });
  }
  return distance;
}

//최소힙 방식(우선순위 큐 이용)
function dijkstra_heap(n, gragh) {
  const adj = Array.from(Array(n), () => new Array());
  gragh.forEach(([from, to, dist]) => {
    adj[from].push({ to: to, dist: dist });
    adj[to].push({ to: from, dist: dist });
  });
  const distance = Array.from(Array(n).fill(0));
  const isVisited = Array.from(Array(n).fill(0));
  const heap = [[0, 0]];
  let curr = []; //현재 노드
  //최소힙에 정점을 삽입하는 함수
  const heapPush = (vertex) => {
    let index = heap.length;
    while (index > 0) {
      if (vertex[1] < heap[Math.floor(index / 2)][1]) {
        heap[index] = heap[Math.floor(index / 2)];
        index = Math.floor(index / 2);
      } else {
        heap[index] = [vertex[0], vertex[1]];
        break;
      }
    }
  };
  //최소힙에서 루트 노드 pop하는 함수
  const heapPop = () => {
    const item = heap[1];
    const node = heap.pop();
    if (heap.length === 1) return item;
    let index = 1;
    while (index < heap.length) {
      if (heap[index * 2] && node[1] > heap[index * 2][1]) {
        heap[index] = heap[index * 2];
        index = index * 2;
      } else if (heap[index * 2 + 1] && node[1] > heap[index * 2 + 1][1]) {
        heap[index] = heap[index * 2 + 1];
        index = index * 2 + 1;
      } else {
        heap[index] = node;
        break;
      }
    }
    return item;
  };

  heap.push([0, 0]);
  isVisited[0] = 1;

  while (heap.length > 1) {
    //heap에서 루트 노드를 꺼내서 최단거리 업데이트
    curr = heapPop();
    if (!isVisited[curr[0]]) {
      isVisited[curr[0]] = 1;
      distance[curr[0]] = curr[1];
    }
    //현재 정점의 인접 정점들 최소힙에 삽입
    adj[curr[0]].forEach((vertex) => {
      if (!isVisited[vertex.to]) {
        heapPush([vertex.to, vertex.dist + curr[1]]);
      }
    });
  }
  return distance;
}

const gragh = [
  [0, 1, 1],
  [1, 2, 3],
  [4, 1, 2],
  [0, 3, 2],
  [4, 2, 1],
  [4, 3, 2],
];
console.log(dijkstra_arr(5, gragh));
console.log(dijkstra_heap(5, gragh));

const DFS = (graph, startNode) => {
    const visited = [];  //이미 방문한 노드
    let needVisit = [];  //방문해야 하는 노드(스택)
    needVisit.push(startNode);

    while(needVisit.length !== 0) {  //needVisit가 비어있으면 종료
        const node = needVisit.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];  //visit한 노드의 인접 노드들을 스택에 추가(앞에 추가)
        }
    }
    return visited;
};

const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };

console.log(DFS(graph, "A"));
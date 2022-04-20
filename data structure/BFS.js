const BFS = (gragh, startNode) => {
    const visited = [];
    let needVisit = [];  //방문해야 할 노드들(큐)
    needVisit.push(startNode);

    while(needVisit.length !== 0) {
        const node = needVisit.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...gragh[node]];  //visit한 노드의 인접 노드들을 큐에 추가(뒤에 추가)
        }
    }
    return visited;
}

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

console.log(BFS(graph, "A"));
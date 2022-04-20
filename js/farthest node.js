//가장 먼 노드

function solution(n, vertex) {
    const graghObj = {};
    for(let i=0; i<vertex.length; i++) {
        if(!graghObj[vertex[i][0]]) {
            graghObj[vertex[i][0]] = [];
            graghObj[vertex[i][0]].push(vertex[i][1]);
        } else {
            graghObj[vertex[i][0]].push(vertex[i][1]);
        }
    }
    return graghObj;
}

console.log(solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
//가장 먼 노드
function solution(n, edge) {
    const gragh = Array.from(Array(n + 1), () => []);
    for (let i of edge) {
        gragh[i[0]].push(i[1]);
        gragh[i[1]].push(i[0]);
    }
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;
    const toBeSearched = [1];
    while (toBeSearched.length > 0) {
        const src = toBeSearched.shift();
        for (const dest of gragh[src]) {
            if (distance[dest] === 0) {
                distance[dest] = distance[src] + 1;
                toBeSearched.push(dest);
            }
        }
    }
    return distance.filter(x => x === Math.max(...distance)).length;
}
console.log(solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
//네트워크

function solution(n, computers) {
    const gragh = {};  //인접행렬 n을 인접리스트로 변환
    for(let i=0; i<n; i++) {
        gragh[i+1] = [];
        for(let j=0; j<n; j++) {
            if(computers[i][j] === 1) {
                gragh[i+1].push(j+1);
            }
        }
    }
    
    let answer = 0;
    let queue = [];
    const needVisit = Array(n).fill(null).map((value, index) => value = index+1);  //남은 컴퓨터 배열
    
    while(needVisit.length>0) {
        answer++;
        queue.push(needVisit[0]);
        while(queue.length>0) {  //BFS 구현
            const node = queue.shift();
            if(needVisit.includes(node)) {
                needVisit.splice(needVisit.indexOf(node),1);
                queue = [...queue, ...gragh[node]];
            }
        }
    }

    return answer;
}

console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
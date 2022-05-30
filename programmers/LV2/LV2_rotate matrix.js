//행렬 테두리 회전하기
function solution(rows, columns, queries) {
    const matrix = [];
    const answer = [];
    //초기행렬 생성
    let num = 1;
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = num;
            num++;
        }
    }
    //회전
    for (const a of queries) {
        const query = a.map(n => n - 1);
        let origin = matrix[query[0]][query[1]];
        let next;
        const findMin = [];
        //첫행 회전
        for (let y = query[1]; y < query[3]; y++) {
            findMin.push(origin);
            next = matrix[query[0]][y+1];
            matrix[query[0]][y+1] = origin;
            origin = next;
        }
        //끝열 회전
        for (let x = query[0]; x < query[2]; x++) {
            findMin.push(origin);
            next = matrix[x+1][query[3]];
            matrix[x+1][query[3]] = origin;
            origin = next;
            
        }
        //끝행 회전
        for (let y = query[3]; y > query[1]; y--) {
            findMin.push(origin);
            next = matrix[query[2]][y-1];
            matrix[query[2]][y-1] = origin;
            origin = next;
        }
        //첫열 회전
        for (let x = query[2]; x > query[0]; x--) {
            findMin.push(origin);
            next = matrix[x-1][query[1]];
            matrix[x-1][query[1]] = origin;
            origin = next;
        }
        answer.push(Math.min(...findMin));
    }
    return answer;
}
console.log(solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]));
function solution(arr1, arr2) {
    const answer = [];
    for(let i=0; i<arr1.length; i++){
        answer[i] = [];
        for(let j=0; j<arr1[i].length; j++){
            answer[i][j] = [];
        }
    }

    for (let i=0; i<arr1.length; i++){
        for (let j=0; j<arr1[i].length; j++){
            let num = arr1[i][j]+arr2[i][j];
            answer[i][j] = num;
        }
    }
    return answer;
}

const arr1=[[1],[2]];
const arr2=[[3],[5]];

console.log(solution(arr1,arr2));
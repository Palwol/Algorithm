//타겟 넘버

function solution(numbers, target) {
    let results = [0];
    let answer = 0;
    for (num of numbers) {
        let temp = [];
        for (sum of results) {
            temp[temp.length] = sum+num;
            temp[temp.length] = sum-num;
        }
        results = temp;
        console.log(results);
    }

    for (sum of results) {
        if(sum === target) {
            answer++;
        }
    }
    return answer;
}

console.log(solution([1, 1, 1, 1, 1],3));
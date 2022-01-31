function solution(priorities, location) {
    let index = priorities.map((priority,i) => [priority,i]);
    let answer = 0;
    const arr = [];

    while(index.length>0){
        let temp = index.shift();
        if(index.some(a => a[0]>temp[0])){
            index.push(temp);
        }
        else{
            arr.push(temp);
            answer++;
            if(arr[answer-1][1] === location) break;
        }
    }
    return answer;
}

console.log(solution([2, 1, 3, 2],2));
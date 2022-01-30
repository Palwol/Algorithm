function solution(progresses, speeds) {
    const time = [];
    for(let i=0; i<progresses.length; i++){
        time[i] = Math.ceil((100-progresses[i])/speeds[i]);
    }

    let temp = time[0]
    const answer = [];
    let j = 0;  //answer의 인덱스
    answer[j] = 1;
    for(let i=1; i<time.length; i++){
        if(time[i]<=temp){
            answer[j]++;
        }
        else{
            temp = time[i];
            j++;
            answer[j] = 1;
        }
    }
    return answer;
}

console.log(solution([93, 30, 55],[1,30,5]));
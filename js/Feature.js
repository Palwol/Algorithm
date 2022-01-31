function solution(progresses, speeds) {
    const time = progresses.map((progress,i)=>{Math.ceil((100-progress)/speeds[i])});

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
            answer[++j] = 1;
        }
    }
    return answer;
}

console.log(solution([93, 30, 55],[1,30,5]));
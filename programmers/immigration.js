//입국심사
function solution(n, times) {
    times.sort((a,b)=>{return a-b});
    let left = 0;
    let right = times[times.length-1]*n;
    let count = 0;
    let answer = right;

    while(left<=right){
        let mid = parseInt((left+right)/2);
        count = times.reduce((sum,curr) => sum + parseInt(mid/curr),0);
        if(n<=count){
            right = mid-1;
            answer = mid;
        }
        else if(n>count){
            left = mid+1;
        }
    }

    return answer;
}

console.log(solution(6,[7,10]));
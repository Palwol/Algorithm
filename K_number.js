function solution(array, commands) {
    const answer = [];
    for (const command of commands){
        const myArray = array.slice(command[0]-1,command[1]);
        myArray.sort(function(a,b){
            return a-b;
        });
        answer.push(myArray[command[2]-1]);
    }
    return answer;
}

console.log(solution([1,6,7,3,4,5,60],[[1,5,3],[2,7,1]]));
function solution(array, commands) {
    const answer = [];
    for(let command of commands){
        const sort_array = array.slice(command[0]-1,command[1]).sort((a,b) => a-b);
        answer.push(sort_array[command[2]-1]);
    }
    return answer;
}

console.log(solution([1,5,2,6,3,7,4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
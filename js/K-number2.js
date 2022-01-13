function solution(array, commands) {
    const answer = [];
    for(let i=0; i<commands.length; i++){
        const sort_array = array.slice(commands[i][0]-1,commands[i][1]);
        sort_array.sort((a,b) => {return a-b});
        answer[i] = sort_array[commands[i][2]-1];
    }
    return answer;
}

console.log(solution([1,5,2,6,3,7,4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
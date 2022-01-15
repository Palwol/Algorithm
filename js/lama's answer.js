function solution(input){
    const new_input = input.split(',').map(num => {
        return parseInt(num.split('').reverse().join(''))
    }).sort((a,b) => b-a);
    return new_input[0];
}

console.log(solution('234,631'));
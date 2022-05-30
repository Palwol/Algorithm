//소수 만들기
const getCombination = function(arr, pickNum) {  //조합 구하기
    const result = [];
    if (pickNum === 1) {
        return arr.map((el) => [el]);
    }
    arr.forEach((curr,index,origin) => {
        const rest = origin.slice(index+1);
        const comb = getCombination(rest, pickNum-1);
        const attached = comb.map((el) => [curr, ...el]);
        result.push(...attached);
    });
    return result;
}

function solution(nums) {
    let answer = 0;
    const combinations = getCombination(nums,3);
    for (const comb of combinations) {
        const sum = comb.reduce((acc,curr) => acc+curr,0);
        let isPrime = 1;
        for (let i=2; i<=Math.sqrt(sum); i++) {
            if (sum % i === 0) isPrime = 0;
        }
        if (isPrime) answer++;
    }
    console.log(answer);
    return answer;
}
solution([1,2,7,6,4]);
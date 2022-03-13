//스파이

function solution(clothes) {
    const hash = {};
    for(let val of clothes){
        if(!hash[val[1]]){
            hash[val[1]] = 2;
        }
        else{
            hash[val[1]]++;
        }
    }

    return Object.values(hash).reduce((answer,curr) => answer*curr,1) - 1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));
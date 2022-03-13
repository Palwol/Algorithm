//완주하지 못한 선수

//코린이 풀이
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    completion.push(0);
    
    for(let i = 0; i < completion.length; i++){
        if(completion[i] !== participant[i]) {
            return participant[i];
        }
    }

}

//Hash 이용
function HashSolution(participant, completion){
    let hash = {};
    for(let val of completion){
        if(!hash.hasOwnProperty(val)){
            hash[val] = 1;
        }
        else {
            hash[val]++;
        }
    }

    for(const val of participant){
        if(!hash.hasOwnProperty(val)){
            return val;
        }
        else{
            hash[val]--;
            if(hash[val] < 0){
                return val;
            }
        }
    }
}

console.log(HashSolution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
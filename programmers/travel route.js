//여행 경로 (중단)

function solution(tickets) {
    const gragh = {};
    for (let ticket of tickets) {
        if (!gragh[ticket[0]]) {
            gragh[ticket[0]] = [];
        }
        gragh[ticket[0]].push(ticket[1]);
    }
    for (let ticket of Object.values(gragh)) {
        ticket.sort();
    }
    
    let curr = "ICN";
    const answer = ["ICN"];
    while (gragh[curr].length > 0) {
        curr = gragh[curr].shift();
        answer.push(curr);
        if (!gragh[curr]) {
            break;
        }
    }
    return answer;
}

console.log(solution([["ICN", "AOO"], ["AOO", "BOO"], ["BOO", "COO"], ["COO", "DOO"], ["DOO", "EOO"], 
["EOO", "DOO"], ["DOO", "COO"], ["COO", "BOO"], ["BOO", "AOO"]]));

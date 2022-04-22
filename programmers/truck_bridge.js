//다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
    let answer = 0, sum = 0, wait = 0;
    const bridge = [];
    
    truck_weights.push(0);  //while문 에러 방지

    for(let i=0; i<bridge_length; i++){
        bridge.push(0);
    }

    while(true){
        sum -= bridge[0];
        bridge.shift();
        if(sum+truck_weights[wait] <= weight){
            sum += truck_weights[wait];
            bridge.push(truck_weights[wait]);
            wait++;
        }
        else{
            bridge.push(0);
        }
        answer++;
        if(sum==0) break;
    }
    return answer;
}

console.log(solution(100,100,[10,10,10,10,10,10,10,10,10,10]));
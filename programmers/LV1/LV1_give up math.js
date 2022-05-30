//모의고사
function solution(answers) {
    const A = [];
    const B = [];
    const C = [];
    const answer = [];
    //A 수포자 답안
    for (let i=1; i<=answers.length; i++) {
        if (i % 5 === 0) {
            A.push(5);
        } else {
            A.push(i % 5);
        }
    }
    //B 수포자 답안
    for (let i=0; i<answers.length; i++) {
        if (i % 2 === 0) {
            B.push(2);
            continue;
        }
        switch(i % 8) {
            case 1:
                B.push(1);
                break;
            case 3:
                B.push(3);
                break;
            case 5:
                B.push(4);
                break;
            case 7:
                B.push(5);
                break;
        }
    }
    //C 수포자 답안
    for (let i=0; i<answers.length; i++) {
        if (i % 2 === 1) {
            C.push(C[i-1]);
            continue;
        }
        switch(i % 5) {
            case 0:
                C.push(3);
                break;
            case 2:
                C.push(1);
                break;
            case 4:
                C.push(2);
                break;
            case 1:
                C.push(4);
                break;
            case 3:
                C.push(5);
                break;
        }
    }
    //정답자 구하기
    const answerNum = [0,0,0];
    answers.forEach((curr,index) => {
        if (curr === A[index]) {
            answerNum[0] ++;
        }
        if (curr === B[index]) {
            answerNum[1] ++;
        }
        if (curr === C[index]) {
            answerNum[2] ++;
        }
    })
    const maxNum = Math.max(...answerNum);
    for (let i=0; i<3; i++) {
        if (answerNum[i] === maxNum) {
            answer.push(i+1);
        }
    }
    return answer;
}
console.log(solution([3,3,2,1,5,1,2,3,4,5,1,2,3,4,5]));
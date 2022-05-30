//신규 아이디 추천
function solution(new_id) {
    let answer = new_id
        .toLowerCase()  //1단계
        .replace(/[^0-9a-z\._\-]/g,"")  //2단계
        .replace(/\.+/g,".")  //3단계
        .replace(/^\.|\.$/,"")  //4단계
        .replace(/^$/,"a")  //5단계
        .slice(0,15)
        .replace(/\.$/,"");  //6단계
    
    //7단계
    if (answer.length === 1) {
        answer = answer[0].repeat(2);
    }
    if (answer.length === 2) {
        answer = answer + answer[1];
    }
    return answer;
}
solution("=.=");
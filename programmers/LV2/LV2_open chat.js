function solution(record) {
    const userHash = {};  //유저 아이디와 닉네임을 담은 HashTable
    const userInfo = [];  //유저 아이디의 활동 기록을 담은 배열

    for (const str of record) {  //활동 기록 담기
        let info = str.split(' ');
        if (info[0] === "Enter") {
            userHash[info[1]] = info[2];
            userInfo.push(info[1] + ' ' + "e");
        } else if (info[0] === "Leave") {
            userInfo.push(info[1] + ' ' + "l");
        } else  if (info[0] === "Change") {
            userHash[info[1]] = info[2];
        }
    }
    return userInfo.map(curr => {
        const u = curr.split(' ');
        if (u[1] === 'e') {
            return userHash[u[0]] + "님이 들어왔습니다.";
        } else if (u[1] === 'l') {
            return userHash[u[0]] + "님이 나갔습니다.";
        }
    });
}
console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
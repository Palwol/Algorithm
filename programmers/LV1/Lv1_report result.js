//신고 결과 받기
function solution(id_list, report, k) {
    const idHash = {};
    for (const id of id_list) {
     idHash[id] = [];
    }

    for (const elem of report) {
        const user_report = elem.split(' ');
        if (!idHash[user_report[0]].includes(user_report[1])) {
         idHash[user_report[0]].push(user_report[1]);
        }
    }

    const reportedList = Object.values(idHash);
    const reportedHash = {};
    for (const id of reportedList) {
        for (const reportedId of id) {
            if (!reportedHash[reportedId]) {
                reportedHash[reportedId] = 1;
            } else {
                reportedHash[reportedId]++;
            }
        }
    }

    const banned = [];
    const reportedKeys = Object.keys(reportedHash);
    for (const id of reportedKeys) {
        if (reportedHash[id] >= k) {
            banned.push(id);
        }
    }

    const answer = new Array(id_list.length).fill(0);
    for (const bannedUser of banned) {
        for (let i=0; i<id_list.length; i++) {
            if (idHash[id_list[i]].includes(bannedUser)) {
                answer[i]++;
            }
        }
    }
    return answer;
}
solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2);
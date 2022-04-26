//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    let winning = 0;
    let zeroNum = lottos.filter(lotto => lotto === 0).length;
    const answer = [];
    for (const num of win_nums) {
        if (lottos.includes(num)) {
            winning++;
        }
    }
    answer[0] = (winning + zeroNum) < 2 ? 6 : 7 - (winning+zeroNum);
    answer[1] = winning < 2 ? 6 : 7-winning;
    return answer;
}
console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]));
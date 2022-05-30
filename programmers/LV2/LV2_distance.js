function solution(places) {
    const answer = [];

    for (let waiting = 0; waiting < 5; waiting++) {
        let result = 1;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const currMark = places[waiting][i][j];
                const check = [
                    (places[waiting][i - 1] || '')[j],
                    (places[waiting][i + 1] || '')[j],
                    places[waiting][i][j - 1] || '',
                    places[waiting][i][j + 1] || ''
                ]
                let pLen;
                if (currMark === 'X') {
                    continue;
                } else {
                    pLen = check.filter(mark => mark === 'P').length;
                }

                if ((currMark === 'P' && pLen > 0) || (currMark === 'O' && pLen > 1)) {
                    result = 0;
                    break;
                } 
            }
            if (result === 0) {
                break;
            }
        }
        answer.push(result);
    }
    console.log(answer);
    return answer;
}
solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]);

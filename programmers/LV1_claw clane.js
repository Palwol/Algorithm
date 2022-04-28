// 크레인 인형뽑기 게임
function solution(board, moves) {
    const basket = [];
    let answer = 0;
    for (const move of moves) {
        for (let i=0; i<board.length; i++) {
            if (board[i][move-1] !== 0) {
                if (basket.length>0 && board[i][move-1] === basket[basket.length-1]) {
                    basket.pop();
                    answer += 2;
                } else {
                    basket.push(board[i][move-1]);
                }
                board[i][move-1] = 0;
                break;
            }
        }
    }
    return answer;
}
solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]);
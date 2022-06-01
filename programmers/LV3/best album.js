//베스트앨범

function solution(genres, plays) {
    const tot_plays = {};
    const arr = [];
    const answer = [];

    genres.forEach((genre,index) => arr.push({id: index, genre: genre, play: plays[index]})); //genres,plays 배열 합체 + 고유번호 추가

    for(let i of arr) {
        tot_plays[i.genre] = tot_plays[i.genre] === undefined ? i.play : tot_plays[i.genre]+i.play;
    }  //장르별 총 재생횟수
    const tot_plays_arr = Object.entries(tot_plays).sort((a,b) => b[1] - a[1]); //tot_plays 배열로 변환 후 재생횟수로 sort

    for(let genre of tot_plays_arr) {
        let play_arr = arr.filter(a => a.genre === genre[0]).sort((a,b) => b.play - a.play);
        if(play_arr.length < 2) {
            answer.push(play_arr[0].id);
        } else {
            for(let i=0; i<2; i++) {
                answer.push(play_arr[i].id);
            }
        }
    }
    return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]);
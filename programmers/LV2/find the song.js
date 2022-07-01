//방금 그 곡
function solution(m, musicinfos) {
  //[재생시간, 제목, 전체노래문자열] 배열 생성
  const musics = musicinfos.map((el) => {
    const musicinfo = el.split(",");
    const music = [];
    //재생시간 구하기
    const hours =
      parseInt(musicinfo[1].slice(0, 2)) - parseInt(musicinfo[0].slice(0, 2));
    const minute =
      parseInt(musicinfo[1].slice(3)) - parseInt(musicinfo[0].slice(3));
    music.push(hours * 60 + minute);
    music.push(musicinfo[2]); //제목 추가
    //재생된 멜로디 구하기
    let melody = "";
    let i = 0;
    let m = 0;
    while (i < music[0]) {
      if (m >= musicinfo[3].length) m = 0;
      if (musicinfo[3][m] === "#") {
        melody += "#";
        m++;
        continue;
      }
      melody += musicinfo[3][m];
      i++;
      m++;
    }
    if (m < musicinfo[3].length && musicinfo[3][m] === "#") {
      melody += "#";
    }
    music.push(melody);
    return music;
  });

  //m과 일치하는 노래 filter
  const filtered = musics.filter((music) => {
    let index = music[2].indexOf(m);
    if (index > -1) {
      while (index + m.length < music[2].length) {
        if (music[2][index + m.length] === "#") {
          index = music[2].indexOf(m, index + m.length);
          if (index < 0) return false;
          else continue;
        }
        return true;
      }
      return true;
    }
    return false;
  });

  //filtered 중 우선순위 높은 노래 반환
  if (!filtered.length) return "(None)";
  return filtered.sort((a, b) => b[0] - a[0])[0][1];
}

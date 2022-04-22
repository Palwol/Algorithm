//단어 변환

function solution(begin, target, words) {
    words.unshift(begin);  //words 맨앞에 begin 추가
    const gragh = Array.from(Array(words.length+1), () => []);
    for (let i=0; i<words.length; i++) {
        for (let j=i+1; j<words.length; j++) {
            let similar = 0;
            for (let k=0; k<begin.length; k++) {
                if (words[i][k] === words[j][k]) {
                    similar++;
                }
            }
            if (similar === begin.length-1) {
                gragh[i+1].push(j+1);
                gragh[j+1].push(i+1);
            }
        }
    }

    let distance = Array(words.length+1).fill(0);
    distance[1] = 1;
    let queue = [1];
    let n = 0;
    let answer = 0;
    while (queue.length > 0) {
        n = queue.shift();
        for (let word of gragh[n]) {
            if (distance[word] === 0) {
                distance[word] = distance[n] + 1;
                queue.push(word);
            }
        }
    }
    return words.includes(target) ? distance[words.indexOf(target)+1]-1 : 0;
}

console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]));
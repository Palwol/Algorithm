//체육복
function solution(n, lost, reserve) {
    const uniforms = new Array(n+2).fill(1);  //맨앞 맨뒤에 1 추가로 index out of range 방지
    for (const elem of lost) {
        uniforms[elem] --;
    }
    for (const elem of reserve) {
        uniforms[elem] ++;
    }

    for (let i=1; i<=n; i++) {
        if (uniforms[i] === 2 && uniforms[i-1] === 0) {
            uniforms[i] = 1;
            uniforms[i-1] = 1;
        } else if (uniforms[i] === 2 && uniforms[i+1] === 0) {
            uniforms[i] = 1;
            uniforms[i+1] = 1;
        }
    }

    return n - uniforms.filter(curr => curr === 0).length;
}
console.log(solution(5,[2,4],[1,3,5]));
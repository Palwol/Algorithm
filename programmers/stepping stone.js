//징검다리
function solution(distance, rocks, n) {
    rocks.sort((a,b) => a-b);
    const intervals = [];
    intervals[0] = rocks[0];
    for(let i = 1; i<rocks.length; i++) {
        intervals[i] = rocks[i] - rocks[i-1];
    }
    intervals.push(distance - rocks[rocks.length-1]);
    
    let l = 0;
    let r = distance+1;
    let m = parseInt((l+r)/2);

    while(l <= r) {
        let remove = 0;
        let current = 0;
        for(let i = 0; i < intervals.length; i++) {
            current += intervals[i];
            if(current < m) {
                remove++;
            }
            else {
                current = 0;
            }
        }

        if(remove > n) {
            r = m-1;
        }
        else if(remove < n) {
            l = m+1;
        }
        else {
            break;
        }
        m = parseInt((l+r)/2);
    }
    return m;
}

console.log(solution(16, [4, 8, 11], 2));
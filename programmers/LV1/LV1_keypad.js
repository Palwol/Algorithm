//키패드 누르기
function solution(numbers, hand) {
    const answer = [];
    let left;
    let right;
    for (const num of numbers) {
        if (num === 1 || num === 4 || num ===7) {
            answer.push('L');
            left = num;
        } else if (num === 3 || num === 6 || num === 9) {
            answer.push('R');
            right = num;
        } else if (num === 2) {
            if (two(left) < two(right)) {
                answer.push('L');
                left = num;
            }
            else if (two(left) > two(right)) {
                answer.push('R');
                right = num;
            }
            else {
                answer.push(hand === "left" ? "L" : "R");
                if (hand === "left") left = num;
                else right = num;
            }
            
        } else if (num === 5) {
            if (five(left) < five(right)) {
                answer.push('L');
                left = num;
            }
            else if (five(left) > five(right)) {
                answer.push('R');
                right = num;
            }
            else {
                answer.push(hand === "left" ? "L" : "R");
                if (hand === "left") left = num;
                else right = num;
            }
        } else if (num === 8) {
            if (eight(left) < eight(right)) {
                answer.push('L');
                left = num;
            }
            else if (eight(left) > eight(right)) {
                answer.push('R');
                right = num;
            }
            else {
                answer.push(hand === "left" ? "L" : "R");
                if (hand === "left") left = num;
                else right = num;
            }
        } else if (num === 0) {
            if (zero(left) < zero(right)) {
                answer.push('L');
                left = num;
            }
            else if (zero(left) > zero(right)) {
                answer.push('R');
                right = num;
            }
            else {
                answer.push(hand === "left" ? "L" : "R");
                if (hand === "left") left = num;
                else right = num;
            }
        }
    }

    function two(location) {
        let distance = 0;
        if (location === 1 || location === 3 || location === 5) distance = 1;
        if (location === 4 || location === 6 || location === 8) distance = 2;
        if (location === 7 || location === 9 || location === 0) distance = 3;
        if (location === undefined) distance = 4;
        return distance;
    }

    function five(location) {
        let distance = 0;
        if (location === 2 || location === 4 || location === 6 || location === 8) distance = 1;
        if (location === 1 || location === 3 || location === 7 || location === 9 || location === 0) distance = 2;
        if (location === undefined) distance = 3;
        return distance;
    }

    function eight(location) {
        let distance = 0;
        if (location === 5 || location === 7 || location === 9 || location === 0) distance = 1;
        if (location === 2 || location === 4 || location === 6 || location === undefined) distance = 2;
        if (location === 1 || location === 3) distance = 3;
        return distance;
    }

    function zero(location) {
        let distance = 0;
        if (location === undefined || location === 8) distance = 1;
        if (location === 5 || location === 7 || location === 9) distance = 2;
        if (location === 2 || location === 4 || location === 6) distance = 3;
        if (location === 1 || location === 3) distance = 4;
        return distance;
    }

    return answer.join("");
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right"));
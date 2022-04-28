//조합 알고리즘
const getCombination = function(arr, pickNum) {
    const result = [];
    if (pickNum === 1) {
        return arr.map((el) => [el]);
    }
    arr.forEach((curr,index,origin) => {
        const rest = origin.slice(index+1);
        const comb = getCombination(rest, pickNum-1);
        const attached = comb.map((el) => [curr, ...el]);
        result.push(...attached);
    });
    return result;
}
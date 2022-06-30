//캐시
function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  //cacheSize가 0일 경우
  if (!cacheSize) {
    return cities.length * 5;
  }

  cities.forEach((el) => {
    const city = el.toLowerCase();
    const index = cache.indexOf(city);
    if (index !== -1) {
      cache.splice(index, 1);
      time++;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      time += 5;
    }
    cache.push(city);
  });
  return time;
}

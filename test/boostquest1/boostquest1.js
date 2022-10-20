import { input } from './input.js';

function chooseRoad(input) {
  const roadList = input.split('\n').map((road) => road.split('').map((el) => Number(el)));
  const difficulty = roadList.map((road) => {
    return road.reduce((total, curr, i, origin) => {
      if (i === origin.length - 1) {
        return total;
      }

      const height = curr - origin[i + 1];
      if (height < 0) {
        total += 3;
      } else if (height < 0) {
        total += 2;
      } else {
        total += 1;
      }
      return total;
    }, 0);
  });

  const index = difficulty.findIndex((el) => el === Math.min(...difficulty));
  return calcEvenness(roadList[index]);
}

function calcEvenness(road) {
  let evenness = 0;
  let repeatCount = 0;

  for (let i = 0; i < road.length; i++) {
    if (i === road.length - 1) {
      evenness += repeatCount;
      break;
    }

    if (road[i] === road[i + 1]) {
      repeatCount++;
    } else {
      evenness += repeatCount;
      repeatCount = 0;
    }
  }
  return evenness;
}

console.log(chooseRoad(input));

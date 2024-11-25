const arr = [1, 2, 3, 4, 5];

// reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합을 구하기.
const reduced = arr.reduce(function (prev, current) {
  return prev + current * 2;
}, 0);
console.log(reduced); // 30
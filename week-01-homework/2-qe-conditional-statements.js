// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.

let n = 10;
n = 7;
if (n % 2 === 1) {
  console.log('홀수');
}
else {
  console.log('짝수');
};

// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D

const score = 70;

if (score >= 90) {
  console.log('A 학점입니다.');
} else if (score >= 80) {
  console.log('B 학점입니다.');
} else if (score >= 70) {
  console.log('C 학점입니다.');
} else {
  console.log('D 학점입니다.');
}

// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.


// 30 이상은 중년
// 20 이상은 성인
// 19 이하는 미성년자

// if (age >= 30) {
// console.log('중년');
// } else {
// console.log('미성년자');
// }
// const age = 21;
const age = 31;

if (age > 19) {
  console.log('성인 입니다.');
}
else if (age <= 30) {
  console.log('중년 입니다.')
}
else {
  console.log('미성년자 입니다.')
}

// 문제 4: switch문을 사용하여 요일을 출력하세요.

const day = 3;

switch (day) {
  case 1:
    console.log('월요일입니다');
    break;
  case 2:
    console.log('화요일입니다');
    break;
  case 3:
    console.log('수요일입니다');
    break;
  case 4:
    console.log('목요일입니다');
    break;
  case 5:
    console.log('금요일입니다');
    break;
  case 6:
    console.log('토요일입니다');
    break;
  case 7:
    console.log('일요일입니다');
    break;
}

// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.

let a = 1;
let b = 5;
// let d = Math.max(a,b);

// console.log(d);

// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.
// ->
if (a > b) {
  // a가 b보다 크면 a출력
  console.log(a);
} else {
  // 아니면 b 출력  
  console.log(b);
}



// if(a<b){
//   console.log(b);

// }
// else{
//   console.log(a);

// }
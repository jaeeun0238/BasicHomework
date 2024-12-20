const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
function myMap(arr, callback) {
  // myMap 구현
  let myMapResult = [];
  for (i = 0; i < arr.length; i++) {
    myMapResult.push(callback(arr[i]));
  }
  return myMapResult;
}

const mapResult = objArray.map((obj) => obj.price + 50);

const myMapResult = myMap(objArray, function (obj) {
  return obj.price + 50;
});

console.log(mapResult);
console.log(myMapResult);
console.log(mapResult === myMapResult);

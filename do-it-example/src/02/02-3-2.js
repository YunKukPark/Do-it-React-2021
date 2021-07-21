var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objectOne, // 1
  ...objectTwo, // 2
};

var { other, ...others } = combined; // 3

console.log(other, others);

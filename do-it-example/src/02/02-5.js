function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

var addNumber = (num) => (value) => num + value;

// arrowfunction은 bind(this) 로 전달하는 과정도 포함되어있다.
class Myclass {
  value = 10;
  constructor() {
    var addThis2 = function (num1, num2) {
      return this.value + num1 + num2;
    }.bind(this);
    var addThis3 = (num1, num2) => this.value + num1 + num2;
  }
}

function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}
// static 함수를 선언하는 예제
Shape.create = function (x, y) {
  return new Shape(x, y);
};
// 인스턴스 함수를 선언하는 예제
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
};
//혹은
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },
  area: function () {
    return 0;
  },
};

var s = new Shape(0, 0);
s.area(); // 0

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius; // this => Circle
}

const whatisit = Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});

console.log(whatisit);

var c = new Circle(0, 0, 10);
c.area();

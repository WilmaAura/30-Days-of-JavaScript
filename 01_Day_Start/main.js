class measurement {
  constructor(type, value1, value2) {
    this.type = type;
    this.value1 = value1;
    this.value2 = value2;
  }
  area() {
    switch (this.type) {
      case 1:
        return this.value1 * this.value2;
        break;
      case 2:
        return this.value1 * this.value1;
        break;
        defaulet: console.log("unknown");
        return null;
    }
  }
}

const rectangle = new measurement(1, 2, 4);
console.log("Rectangle Area: " + rectangle.area());

const square = new measurement(2, 5);
console.log("Square Area: " + square.area());

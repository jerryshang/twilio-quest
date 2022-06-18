class Ducktypium {
  constructor(color) {
    this.check(color);
    this.color = color;
    this.calibrationSequence = [];
  }

  check(color) {
    if (color !== "red" && color !== "blue" && color !== "yellow") {
      throw new Error("wrong color");
    }
  }

  refract(color) {
    this.check(color);
    if (this.color === "red") {
      if (color === "red") {
        return "red";
      } else if (color === "blue") {
        return "purple";
      } else if ((color = "yello")) {
        return "orange";
      }
    } else if (this.color === "blue") {
      if (color === "red") {
        return "purple";
      } else if (color === "blue") {
        return "blue";
      } else if ((color = "yello")) {
        return "green";
      }
    } else if (this.color === "yellow") {
      if (color === "red") {
        return "orange";
      } else if (color === "blue") {
        return "green";
      } else if ((color = "yello")) {
        return "yello";
      }
    }
  }

  calibrate(arr) {
    this.calibrationSequence = arr.sort().map((item) => item * 3);
  }
}

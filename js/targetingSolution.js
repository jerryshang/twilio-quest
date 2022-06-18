class TargetingSolution {
  constructor(obj) {
    let { x, y, z } = obj;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}

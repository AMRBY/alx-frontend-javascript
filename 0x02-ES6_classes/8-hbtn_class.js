/* eslint no-underscore-dangle: 0 */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof (value) === 'number') {
      this._size = value;
      return this._size;
    }
    throw TypeError('Size must be a number');
  }

  set location(value) {
    if (typeof (value) === 'string') {
      this._location = value;
      return this._location;
    }
    throw TypeError('Location must be a string');
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    } if (hint === 'number') {
      return this.size;
    }
    return this.location;
  }
}

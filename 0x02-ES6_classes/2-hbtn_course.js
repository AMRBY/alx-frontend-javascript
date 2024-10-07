/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
      return this._name;
    }
    throw TypeError('Name must be a string');
  }

  set length(value) {
    if (typeof (value) === 'number' && !value.isNaN) {
      this._length = value;
      return this._length;
    }
    throw TypeError('Length must be a number');
  }

  set students(value) {
    if (typeof (value) === 'object') {
      this._students = value;
      return this._students;
    }
    throw TypeError('Students must be an array');
  }
}

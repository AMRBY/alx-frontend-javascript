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
    if (typeof (value) === 'number') {
      this._length = value;
      return this._length;
    }
    throw TypeError('Length must be a number');
  }

  set students(values) {
    if (typeof (values) === 'object') {
      for (const value in values) {
        if (typeof (value) !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      }
      this._students = values;
      return this._students;
    }
    throw TypeError('Students must be an array of strings');
  }
}

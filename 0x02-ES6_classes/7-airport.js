/* eslint no-underscore-dangle: 0 */
export default class Airport {
  constructor(name, code) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
      return this._name;
    }
    throw TypeError('Name must be a string');
  }

  set code(value) {
    if (typeof (value) === 'string') {
      this._code = value;
      return this._code;
    }
    throw TypeError('Code must be a string');
  }

  toString() {
    return `object [${this._code}]`;
  }
}

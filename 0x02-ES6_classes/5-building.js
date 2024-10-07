/* eslint no-underscore-dangle: 0 */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof (value) === 'number') {
      this._sqft = value;
    } else {
      throw TypeError('Sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

/* eslint no-underscore-dangle: 0 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof (value) === 'number') {
      this._floors = value;
    } else {
      throw TypeError('Floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors`);
  }
}

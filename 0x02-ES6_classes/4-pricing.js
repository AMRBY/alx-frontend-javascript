import Currency from './3-currency';

/* eslint no-underscore-dangle: 0 */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof (value) === 'number') {
      this._amount = value;
      return this._amount;
    }
    throw TypeError('Amount must be a string');
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
      return this._currency;
    }
    throw TypeError('Currency must be a string');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}

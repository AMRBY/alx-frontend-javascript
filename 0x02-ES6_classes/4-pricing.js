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
    if (typeof (value) === 'number' && !value.isNaN) {
      this._amount = value;
    } else {
      throw TypeError('Amount must be a number');
    }
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw TypeError('Currency must be a currency object');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}

module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    calcMonthPay() {
        let P = this.principal;
        let I = this.interest / 100 / 12;
        let T = this.term * 12;
        let calc = P * I * Math.pow(1 + I, T) / (Math.pow(1 + I, T) - 1);
        let result = calc.toFixed(2);
        return result;
  };
}


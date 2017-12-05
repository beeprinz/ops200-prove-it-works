const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
});

it('should have a calcMonthPay function', () => {
    expect(mortgage.calcMonthPay).to.exist;
 });

 it('should calculate monthly payment for 30yr mortgage', () => {
    mortgage = new Mortgage(450000,4,30,30);
    expect(mortgage.calcMonthPay()).to.equal('2148.37');
});

it('should calculate monthly payment for 15yr mortgage', () => {
    mortgage = new Mortgage(450000,4,15,30);
    expect(mortgage.calcMonthPay()).to.equal('3328.60');
});

it('should calculate monthly payment for 15yr mortgage negative balance', () => {
    mortgage = new Mortgage(-450000,4,15,30);
    expect(mortgage.calcMonthPay()).to.equal('-3328.60');
});

it('should calculate monthly payment for 30yr mortgage negative balance', () => {
    mortgage = new Mortgage(-450000,4,30,30);
    expect(mortgage.calcMonthPay()).to.equal('-2148.37');
});

it('should calculate monthly payment for 30yr mortgage negative rate', () => {
    mortgage = new Mortgage(450000,-4,30,30);
    expect(mortgage.calcMonthPay()).to.equal('644.67');
});

it('should calculate monthly payment for 15yr mortgage negative rate', () => {
    mortgage = new Mortgage(450000,-4,15,30);
    expect(mortgage.calcMonthPay()).to.equal('1820.51');
});

it('should calculate monthly payment for 15yr mortgage negative balance and rate', () => {
    mortgage = new Mortgage(-450000,-4,15,30);
    expect(mortgage.calcMonthPay()).to.equal('-1820.51');
});

it('should calculate monthly payment for 30yr mortgage negative balance and rate', () => {
    mortgage = new Mortgage(-450000,-4,30,30);
    expect(mortgage.calcMonthPay()).to.equal('-644.67');
});

it('should calculate monthly payment for 30yr mortgage rate as decimal', () => {
    mortgage = new Mortgage(450000,4.25,30,30);
    expect(mortgage.calcMonthPay()).to.equal('2213.73');
});

it('should calculate monthly payment for 15yr mortgage rate as decimal', () => {
    mortgage = new Mortgage(450000,4.25,15,30);
    expect(mortgage.calcMonthPay()).to.equal('3385.25');
});

it('should calculate monthly payment for 30yr mortgage with 8 fig balance', () => {
    mortgage = new Mortgage(45000000,4.25,30,30);
    expect(mortgage.calcMonthPay()).to.equal('221372.95');
});

});

//write 4 tests, use calculator.spec.js as a guide
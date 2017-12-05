const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', () => {
  let pageObject = null;

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  it('should contain a <h1> element for the page title', () => 
  pageObject
    .evaluate(() => document.querySelector('h1').innerText)
    .then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.equal('Mortgage Calculator');
    }));

    it('should have an input element with the name of "principal"', () =>
    pageObject
      .evaluate(() => document.querySelector('input[name=principal]'))
      .then(input => expect(input).to.exist)
  );

  it('should have an input element with the name of "interestRate"', () =>
  pageObject
    .evaluate(() => document.querySelector('input[name=interestRate]'))
    .then(input => expect(input).to.exist)
);

it('should have an input element with the name of "loanTerm"', () =>
pageObject
  .evaluate(() => document.querySelector('input[name=loanTerm]'))
  .then(input => expect(input).to.exist)
);

it('should have an select element with the name of "period"', () =>
pageObject
  .evaluate(() => document.querySelector('select[name=period]'))
  .then(select=> expect(select).to.exist)
);

it('should have an option element with the value of "12"', () =>
pageObject
  .evaluate(() => document.querySelector('option[value=12]'))
  .then(option=> expect(option).to.exist)
  //THIS TEST DOESN'T PASS
);

it('should have a button with an id of "calculate"', () =>
pageObject
  .evaluate(() => document.querySelector('button[id=calculate]'))
  .then(button=> expect(button).to.exist)
);

it('should have a <p> element with an id of "output"', () =>
pageObject
  .evaluate(() => document.querySelector('p[id=output]'))
  .then(p=> expect(p).to.exist)
);

})
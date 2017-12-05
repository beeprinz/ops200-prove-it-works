import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mortgage Calculator</h1>
        <div>
          <input name="principal" />
          <input name="interestRate" />
          <input name="loanTerm" />
        </div>
        <div>
          <select name="period">
            <option value="12">Monthly</option>
            <option value="4">Quarterly</option>
          </select>
        </div>
        <div>
        <button id='calculate'>Calculate</button>
        </div>
        <div>
        <p id='output'></p>
        </div>
      </div>
    );
  }
}

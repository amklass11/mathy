/* eslint-disable no-undef */
import { React } from 'react';
import './calculator.css';
import Display from './display';
import Buttons from './buttons';

// eslint-disable-next-line import/prefer-default-export
export const Calculator = () => (
  <div className="calculator-page">
    <div>
      <h2>Lets do some math!</h2>
    </div>
    <div className="container">
      <Display class1="display" previous={total} operand={operation} current={next} />
      <div className="operators-container">
        <div className="grey-btn">
          <Buttons label="AC" />
          <Buttons label="+/-" />
          <Buttons label="%" />
          <Buttons label="7" />
          <Buttons label="8" />
          <Buttons label="9" />
          <Buttons label="4" />
          <Buttons label="5" />
          <Buttons label="6" />
          <Buttons label="1" />
          <Buttons label="2" />
          <Buttons label="3" />
          <Buttons id="cero" label="0" />
          <Buttons label="." />
        </div>
        <div className="orange-btn">
          <Buttons label="÷" />
          <Buttons label="x" />
          <Buttons label="-" />
          <Buttons label="+" />
          <Buttons label="=" />
        </div>
      </div>
    </div>

  </div>
);

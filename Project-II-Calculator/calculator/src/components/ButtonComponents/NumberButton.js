import React from 'react';
import './Button.css';


const numbers = [
{number: "9"},
{number: "8"},
{number: "7"},
{number: "6"},
{number: "5"},
{number: "4"},
{number: "3"},
{number: "2"},
{number: "1"},
{number: "0"}
]



function NumberButton(props) {
    return (
      <div>
  
  <button className={props.buttonStyle}>
          {numbers.map(number => (
            <NumberButton number={number} key={number.number} />
          ))}
        </button>
      </div>
    );
  }
  
  export default NumberButton;
import React from 'react';
import './Button.css';








function NumberButton(props) {
    return (
      <div className = 'button'>

  
  <button className= 'buttonStyle'>
      {props.number}
        </button>
      </div>
    );
  }
  
  export default NumberButton;

import React from 'react';
import './Button.css';







function FunctionButton(props) {
    return (
      <div>

  
  <button className = 'functionButtons'>
      {props.functions}
        </button>
      </div>
    );
  }
  
  export default FunctionButton;
import React from 'react';
import './Button.css';
import FunctionButton from './FunctionsButton';



const functions = [
    {function: "/"},
    {function: "X"},
    {function: "-"},
    {function: "+"},
    {function: "="},
];


const Functions = ()=> {
    return (

        <div className = "function" >
        {functions.map(functions => (
                <FunctionButton functions ={functions.function} key={functions.function} />
              ))};
    </div>
        );
    
    };

    export default Functions;
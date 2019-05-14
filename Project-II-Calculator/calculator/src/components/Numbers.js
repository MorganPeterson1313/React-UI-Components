import React from 'react';
import NumberButton from './ButtonComponents/NumberButton';




const numbers = [
    {number: '9'},
    {number: "8"},
    {number: "7"},
    {number: "6"},
    {number: "5"},
    {number: "4"},
    {number: "3"},
    {number: "2"},
    {number: "1"},
    
    ];



const Numbers = ()=> {
    return (

        <div className = 'numberButtons'>
        {numbers.map(number => (
                <NumberButton number={number.number} key={number.number} />
              ))};
    </div>
        );
    
    };

    export default Numbers;
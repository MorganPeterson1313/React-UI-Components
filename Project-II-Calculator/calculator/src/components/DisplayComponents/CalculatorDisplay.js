import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';
import Numbers from '../Numbers';
import Clear from '../ButtonComponents/ActionButton';
import Zero from '../ButtonComponents/ZeroButton';
import Functions from '../ButtonComponents/Functions';
import FunctionButton from '../ButtonComponents/FunctionsButton';
import Display from '../ButtonComponents/Display';



const CalculatorDisplay =  props => {
return (


    <div className = 'functionsDisplay'>
    <div>
        
    </div>
                    
                    <div className = "calcualtorDisplay">
                    <Display />
                    <Clear/>
                    <Numbers/>
                    <Zero />
                    


                    </div>

                    <div className = 'functions'>
            <Functions />

                    </div>

        </div>

    );

};

export default CalculatorDisplay;
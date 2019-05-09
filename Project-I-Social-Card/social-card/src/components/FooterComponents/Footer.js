import React from 'react';
import './Footer.css';
import Likes from './Likes';

import Comments from './Comment';
import Mail from './Mail';


const Footer = () => {

    return(

        <div className = "footerContainer">

            <Mail/>

            <Likes/>

            <Comments/>




        </div>



    );
};

export default Footer;
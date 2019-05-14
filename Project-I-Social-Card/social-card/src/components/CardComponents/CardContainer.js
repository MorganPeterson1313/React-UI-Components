import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';



const  CardContianer = ()=> {

return(

<a className = "cardContainer"  href = "https://reactjs.org/" >

<CardBanner/>
<CardContent/>

</a>



    );

};

export default CardContianer;
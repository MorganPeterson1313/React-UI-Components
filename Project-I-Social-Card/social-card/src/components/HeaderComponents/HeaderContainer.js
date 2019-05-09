
import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';





const HeaderContainer = () => {

        return(
                        <div className = "mainHeader">
                        <ImageThumbnail />


                                    <div className = "title-content">
                                    <HeaderTitle/>
                                    <HeaderContent/>
                                    </div>
                        </div>












        ); 

};

export default HeaderContainer;

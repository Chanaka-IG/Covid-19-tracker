
import React from 'react';

import './wrapper.css'


function WrapperItems(props) {
    return (
        <div className={props.titleclass}>

       <div className="image-item">     
        <img src={props.src}  alt="covid 19" />

        </div>
            <div className={props.subclass}>
                <h1>{props.headline}</h1>
                <span></span>
                <p>{props.para}  </p>
              
            </div>
     </div>   
    )
}

export default WrapperItems
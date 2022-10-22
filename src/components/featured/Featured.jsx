import React from 'react';

import "./featured.css"

const Featured = (props)=>{
    return(
      
            <div className="featuredItem">
                <img className='featuredImg' src={props.src} alt="images" />
                <div className="featuredItemTitles">
                    <h1>{props.title1}</h1>
                    <h2>{props.title2}</h2>
                </div>
            </div>
            
          
    )
}

export default Featured;
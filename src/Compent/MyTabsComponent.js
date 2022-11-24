import React from "react";
import { useState } from 'react';

const MyTabsComponent = (props) => {
    // Use console.log() for debugging

    const [ active, setActive ] = useState(0); 

    
    return  (<div className="tabs">
        {props.children ? (
             <>
                {props.children.map((item, idx) => {
                    return  item.props.title ? <button 
                        key={item.props.title}
                        disabled={active === idx}
                        className={active === idx ? 'btn-active' : 'btn'}
                        onClick={() => setActive(idx)}
                    >{item.props.title}</button> : null
                })}
                <div className="view">
                    {props.children[active]}
                </div>
            </>
        ) : null }
       
        
    </div>);
};

export default MyTabsComponent;

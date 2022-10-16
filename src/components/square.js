import React from 'react';
import "./square.css";

export default function Square({children}) {   
    
        return(
            <div style={{cursor:'pointer',userSelect:'none'}}   className={'square'} >{children}</div>
        );
}

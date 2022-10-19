import React from 'react';
import "./square.css";

export default function Square({children}) {   
    
        return(
            <div style={{cursor:'pointer',userSelect:'none',height:'180px'}}   className={'square column is-4'} >{children}</div>
        );
}

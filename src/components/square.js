import React from 'react';
import "./square.css";

export default function Square(props) {   
    
        return(
            <div onClick={props.onClick} style={{cursor:'pointer',userSelect:'none',height:'180px'}}   className={'square column is-4'} >{props.data}</div>
        );
}

import React from 'react';

const RenderTitle = (props) => {
    if(props.id !== undefined){
        return <div key={props.id}><strong>{props.title}:</strong> {props.id}</div>
    }
    return <span key={props.id}/>
}

export { RenderTitle } 
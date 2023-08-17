import React from "react";

export default function Show(props) {
    return(
        <div>
            <h1>{props.element.title}</h1>
            <h3>{props.element.title}</h3>
            <p>{props.element.shipIsBroken ? 'The Ship is Broken' : 
            'The Ship is not Broken'}</p>
            <h4>{props.element.createdAt}</h4>
            <a href='/logs'>
                <button>Back</button>
            </a>
        </div>
    )
}
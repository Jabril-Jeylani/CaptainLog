import React from "react";

export default function Index(props) {
    return(
        <div>
            <ul>
                {props.Log.map((element) => <li>{element.title} <a href={`logs/${element._id}`}>Details</a></li>)}
            </ul>
            <a href="logs/create">Create</a>
        </div>
    )
}
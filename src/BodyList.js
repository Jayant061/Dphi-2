import React from "react"

export default function BodyList(props){
    
    return(
        <div className="body-list-item" id={props.key}>
        <img src={props.image} alt = ""/>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        
        </div>
    )
}
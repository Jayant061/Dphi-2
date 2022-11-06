import React from "react"
export default function List(props){
    return(<div className="wrapper">
            <div className="list-items" style = {props.styles}>
                <div className="list-icon">
                    <img src={props.image} alt = ""/>
                </div>
                <div className="listData" >
                    <h3>{props.number}</h3>
                    <p>{props.text}</p>
                </div>

            </div>
            </div>
    )
}

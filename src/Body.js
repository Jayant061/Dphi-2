import React from "react"
import BodyList from "./BodyList"
import BodyListItems from "./BodyListItems"
import "./Body.css"

export default function Body(){
    const bodyListItem = BodyListItems.map(BodyListItem =>{
        return(
            <BodyList 
            key = {BodyListItem.id}
            image = {BodyListItem.image}
            title = {BodyListItem.title}
            text = {BodyListItem.text} 
            />
        )
    })
    return(
        
        <div className="body-list">
            <div className="title">
                <h3>
                    Why Participate in <span>AI Challanges?</span>
                </h3>
            </div>
            <div className="body-list-items">
                {bodyListItem}
            </div>
        </div> 
    )
}
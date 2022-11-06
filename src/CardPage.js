import React, {useState} from "react"
import "./Card.css"

import CardComponent from "./CardComponent"

export default function CardPage(props){
    // const[cardItems,setCardItems] = useState(props.cardItems)
    // // setCardItems(props.cardItems)
    // const [data,setData] = useState()
    // const [styles,setStyles] = useState({border:"none"})
   const[searchItem,setSearchItem] = useState("")

    const cardElements = props.cardItems.filter((val)=>{
        if(searchItem === ""){
            return val
        }
        else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
            return val;
        }
    })
     .map(cardItem =>{
    //      if(props.id === cardItem.name){
    //          setData(props.data)
    //         //  if(props.permitToDelete){
    //         //     setStyles({display:"none"})
    //         //  }
    //         }
    //         else{
    //             setData(cardItem)
    //         }
        
        return(
            <CardComponent 
            key = {cardItem.name}
            item = {cardItem}
            setIdentity = {props.setIdentity}
            // styles = {styles}
             id = {props.id}
             data = {props.data}
             permitToDelete = {props.permitToDelete}
            />
        )
    }) 

    return(
        <div className="card-parent">
            <div className="card-page">
                <div className="card-page-title">
                    <h4>Explore Challanges</h4>
                </div>
                <div className="filter-form">
                <form className="search-bar">
                    {/* <img src="..\Images\assets\icons\search.png"/> */}
                    <i class="fa fa-search"></i>
                    <input
                        type = "text"
                        placeholder="Search"
                        name = "q"
                        onChange={(event) =>{
                            setSearchItem(event.target.value)
                        }}
                    />
                </form>

            </div>

            </div>
            <div className="card-el">
                {cardElements}
            </div>
        </div>
    )
}
// import logo from './logo.svg';
import React,{useState} from "react"
import { BrowserRouter,
          Route,
        Routes } from "react-router-dom"  
import Header from "./Header.js"
import Body from './Body'
import CardPage from './CardPage'
import CardItems from "./CardItems"
import CreateChallangeForm from "./CreateChallangeForm.js"
// import { formdata } from "./CreateChallangeForm.js"
import UpdateCardForm from "./updateCardForm.js"
import CardDetails from "./CardDetails.js"
import "./logo.css"
// import Home from "./Home"
// import {BrowserRouter,Routes,Route} from "react-router-dom"

export default function Project() {

  const[cardElements,setCardElements] = useState(CardItems)
 
  const [id,setId] = useState()
  const[identity,setIdentity] = useState()
  function identitysetter(object){
    setIdentity(()=>{return object})
     setId(object.name)
    
     }
     const [permitToDelete,setpermitToDelete] = useState(false)
     const [modifiedData,setModifiedData] = useState()
     function modifyCardData(value){
      setModifiedData(value)
     }
     function updatepermission(object){
      setpermitToDelete(object)
     }
    
  function handleCardItems(object){
    console.log(object)
    setCardElements(prevItems =>{
      return[...prevItems,object]
    })
    console.log(cardElements)
  }

  return (
        <BrowserRouter>
        <div className="logo">
          <img src="./Images/assets/icons/main_logo_with_darktext_dphi.png" alt=""/>
        </div>
        <Routes>
          <Route 
          exact path="/"
          element = {
            <div>
              <Header
              key = "headerItem1"
              cardItems={cardElements}  />
              <Body 
              key = "headerItem2"/>

              <CardPage
              
              key = "headerItem3" 
              cardItems={cardElements}
              setIdentity = {identitysetter}
              id = {id}
              data = {modifiedData}
              permitToDelete = {permitToDelete}
                        />
         </div>
          }
          />
          <Route 
          exact path = "/createChallange"
          element = {
            <CreateChallangeForm
            key = "headerItem4" 
            cardItems={cardElements} 
            setData={handleCardItems} />
          }
          />
         </Routes>

            <Routes>
                <Route 
                 exact path = "/carddetails"
                 element = {
                   <CardDetails
                   key = "headerItem5"
                   data = {identity}
                   updatepermission = {updatepermission}
                   />
                 }
                 />
            </Routes>
            <Routes>
              <Route
               exact path = "/updatedetails"
               element = {
                 <UpdateCardForm
                 key = "headerItem6" 
                setData={modifyCardData}
                 />

               }
              /></Routes> 
              </BrowserRouter>

  );
}





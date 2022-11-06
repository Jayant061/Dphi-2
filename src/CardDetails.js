import React, { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "./cardDetail.css"
import moment from 'moment';
// import { showDescription } from "./CreateChallangeForm"



// export default function CardDetails(props){
//     const [status,setStatus] = useState()
//     const [timeStatus,setTimeStatus] = useState()
//     if(props.status === "Active"){
//             setTimeStatus(props.value.EndDate)
//             setStatus("Ends in")
//     }
//     else if(props.status === "Past"){
//         setTimeStatus(props.value.EndDate)
//         setStatus("Ended on")
//     }
//     else if(props.status === "Upcoming"){
//         setTimeStatus(props.value.startDate)
//         setStatus("Starts in")
//     }

//     return(
//        <div>
//         <div className="info">
//             <div className = "currentStatus">
//                 <h4>{timeStatus}</h4>
//                     <h4>{status}</h4>
//             </div>
//         </div>
//        </div>
//     )
// }
// var desc=showDescription;
// alert(desc);

export default function CardDetails(props){
    const[timeStatus,setTimeStatus] = useState();
    const[date,setDate] = useState()
    function statusDesign(){
    let startpoint = new Date(props.data.startDate).getTime()
    let current = new Date().getTime()
    let endPoint = new Date(props.data.EndDate).getTime()
    let upcoming = startpoint - current
    let active = endPoint - current

    if(upcoming> 0){
        setTimeStatus("Starts on")
        setDate(props.data.startDate)
    }
    else if( upcoming<0 && active>0){
        setTimeStatus("Ends on")
        setDate(props.data.EndDate)
    }
    else if(active <0 ){
        setTimeStatus("Ended on")
        setDate(props.data.EndDate)
     }
    } 
    useEffect(() =>{
        statusDesign()
    })

    const navigate = useNavigate()
    function handleClick(){
        navigate("/updatedetails")
    }
    function handleDelete(){  
       props.updatepermission(true)
       navigate("/")
        
    }
    return(
    <> 
     <div className="header">
        <div className="timeinfo">
        <img  src="../Images/assets/icons/clock-solid.svg" alt=""/>
            <h4>
            {timeStatus} {moment(date).format("Do MMM ' YY h:mm a")} (Indian Standard Time)
            </h4>
        </div>
        <div className="assignment-name">
            <h1>{props.data.name}</h1>
            <p>Identify the class to which butterfly belongs to</p>
        </div>
        <div className="level">
            <img src="../Images/assets/icons/carbon_skill-level-basic.svg" alt=""/>
            <h4>{props.data.level}</h4>
        </div>
        {/* <p>{props.data.name}</p>
        <button onClick = {handleClick}>setValue</button> */}
     </div>
     <div className="overview">
            <div className="overview-title">
                <h3>Overview</h3>
            </div>
            <div className="btns">
                <button className="edit-btn" onClick={handleClick}>Edit</button>
                <button className="delete-btn"onClick={handleDelete}>Delete</button>
            </div>
        </div> 
        <div className="overview-text">
            <p>
            Butterflies are the adult flying stage of certain insects belonging to an order or group called 
            Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the 
            insects in this group because their wings are covered with thousands of tiny scales overlapping 
            in rows.<br/><br/> An agency of the Governmental Wildlife Conservation is planning to implement an 
            automated system based on computer vision so that it can identify butterflies based on captured 
            images. As a consultant for this project, you are responsible for developing an efficient model.
            <br /><br/> Your Task is to build an Image Classification Model using CNN that classifies to which class of 
             weather each image belongs to.
            </p>
        </div>


      </>

    )




}

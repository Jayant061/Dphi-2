import React,{useState,useEffect} from "react";
import { useNavigate} from "react-router-dom"
// import { BrowserRouter,Routes,Route} from "react-router-dom";
import moment from 'moment';
// import CardDetails from "./CardDetails"
// import  ReactDOM  from "react-dom/client";






export default function CardComponent(props){

    const [item,setItem] = useState(props.item)
    const[timeDataDays,setTimeDataDays] = useState()
    const[timeDataHours,setTimeDataHours] = useState()
    const[timeDataMins,setTimeDataMins] = useState()
    const[status, setStatus] = useState()
    const[timeStatus,setTimeStatus] = useState();
    const[expired,setExpired] = useState()
    const[timeUnit,setTimeUnit]= useState(["Days","Hours","Mins",":"])

    const[styles,setStyle] = useState({border:"none"})
    function dataModification(){
        if(props.id === item.name){
            setItem(props.data)
            if(props.permitToDelete){
                setStyle(() =>{
                    return{
                        display:"none"
                    }
                })
            }
        }
        
    }

   

    function statusdesign(){
    let startpoint = new Date(item.startDate).getTime()
    let current = new Date().getTime()
    let endPoint = new Date(item.EndDate).getTime()
    let upcoming = startpoint - current
    let active = endPoint - current
    if(upcoming> 0){
        setStatus("Upcoming")
     }
     else if( upcoming<0 && active>0){
        setStatus("Active")
     }
     else if(active <0 ){
        setStatus("Past")
     }

     // time status
     const items = document.querySelectorAll(".timeStatus")
     for(let i = 0;i<items.length;i++){
        if(status === "Active"){
            setTimeStatus("Ends in")
        }
        else if(status === "Past"){
            setTimeStatus("Ended on")
        }
        else if(status === "Upcoming"){
            setTimeStatus("Starts in")
        }
     }

     // status based color
     const boxes = document.querySelectorAll(".status")
     for(let i = 0;i<boxes.length;i++){
      if(boxes[i].textContent === "Active"){
      boxes[i].classList.add("status-color-active")
     }
     else if(boxes[i].textContent === "Past"){
        boxes[i].classList.add("status-color-past")
     }
     else if(boxes[i].textContent === "Upcoming"){
        boxes[i].classList.add("status-color-upcoming")
     }

    }
    const timerBoxes = document.querySelectorAll(".timer")
        for(let i = 0;i<timerBoxes.length;i++){
            if(status === "Past"){
                setTimeUnit(["","","",""])
                setExpired(moment(item.EndDate).format('MMM D, YYYY, h:mm a'));
            }
            
        }

}


    let interval
    const startTimer = () =>{
     let countDownDate =  new Date(item.EndDate).getTime()
     let StartDate = new Date(item.startDate).getTime()

     interval = setInterval(()=>{
         let now = new Date().getTime()
         let distance = countDownDate - now
         if(StartDate-now >0){
            distance = StartDate-now
         }
         else{
            distance = countDownDate-now
         }
         
         let days = Math.floor(distance / (1000 * 60 * 60 * 24));
         let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         if(distance <0){
             clearInterval(interval.current)
         }
         else{
             setTimeDataDays(days)
             setTimeDataHours(hours)
             setTimeDataMins(minutes)
         }
         statusdesign()
         

     })
 }
 useEffect(() =>{
     startTimer()
     
 })
        dataModification()
        const navigate= useNavigate() 
    
    function handleClick(){
    // alert("Working")
    props.setIdentity(item)
    // ReactDOM.render(<CardDetails />)
       navigate('/carddetails')
    }
 return(

        <div className ='card'style = {styles}>
            
            <div className="image">
                <img src = {item.image}  alt = ""/>
            </div>
            <div className="status">
                <p className = "card-status">{status}</p>  
            </div>
            <div className="name">
                <h2>{item.name}</h2>
            </div>
            <div className="time-status">
                <p className = "timeStatus">{timeStatus}</p>
            </div>
            <div className="timer">
                <section>
                    <p className = "days">{timeDataDays}</p>
                    <small>{timeUnit[0]}</small>
                </section>
                <span>{timeUnit[3]}</span>
                <section>
                    <p className = "hours">{timeDataHours}</p>
                    <small>{timeUnit[1]}</small>
                </section>
                <span>{timeUnit[3]}</span>
                <section>
                    <p className = "mins">{timeDataMins}</p>
                    <small>{timeUnit[2]}</small>
                </section>
                <div className="expired">
                    <h3>{expired}</h3>
                </div>
            </div>
                <div className="btn">
                    <button onClick={handleClick}><i class="fa fa-check-square-o" ></i>Participate Now</button>
                </div>
        </div>

    )
}
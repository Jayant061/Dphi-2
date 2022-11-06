import React from "react"
import { useNavigate} from "react-router-dom"
import "./Header.css"
import List from "./HeaderList"
import ListItem from "./HeaderListItems"


export default function Header(props){
    // const[navToForm,setNavToForm] = useState(false)


    const ListComponent = ListItem.map(list =>{
        let styles = {}
        
        if(list === ListItem[0]){
            styles = {paddingLeft: "50px",
            
        }
        }
        else{
            styles = {paddingLeft: "50px",
            borderLeft:"2px solid white"}
        }

        return(
            <List
            styles = {styles} 
            key = {list.id}
            image = {list.image}
            number = {list.number}
            text = {list.text}
            />
        )
    })
    const navigate= useNavigate()
    function handleClick(){
       navigate('/createChallange')
    }

    return(     
    <header>
    <div className= "header-component">
        <div className="header-content">
            <h1>
            Accelerate Innovation <br/> with Global AI Challenges
            </h1>
            <p>
            AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science 
            skills to test on diverse datasets allowing you to foster learning through competitions.
            </p>
    
            <button className="btn" id="handleForm"
            onClick={handleClick}>Create Challenge</button>
            
        </div>
        <div className="header-image">
            <img src="../Images/assets/icons/PicsArt_04-14-04.42 1.svg"
            alt="" />

        </div> 


    </div>

    <div className="header-list">
        {ListComponent}
    </div>
    </header>
 )  
}
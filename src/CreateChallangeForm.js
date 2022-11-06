import React, {useState} from "react"
// import CardItems from "./CardItems.js"
import "./createForm.css"
// import Header from "./Header"
import { useNavigate } from "react-router-dom"




function CreateChallangeForm(props){

    const[formData,setFormData] = useState({
        name:"",
        startDate:"",
        EndDate:"",
        description:"",
        image:"",
        level:"", 
    })
    function handleChange(event){
        setFormData((prev)=>{
            let data = prev;
         
          switch(event.target.name){
            case "name":
                {
                    data.name=event.target.value;
                    break;
                }
                case "startDate":
                {
                    data.startDate=event.target.value;
                    break;
                }
                case "EndDate":
                {
                    data.EndDate=event.target.value;
                    break;
                }
                case "description":
                {
                    data.description=event.target.value;
                    break;
                }
                case "image":
                {
                    data.image=URL.createObjectURL(event.target.files[0]);
                    break;
                }
                case "level":
                {
                    data.level=event.target.value;
                    break;
                }
          
          }
          return(data);
      
    })
}
    // function handleChange (event){
    //     const{name,type,value,file} = event.target
    //     setFormData(prevFormData =>{
    //         return{
    //             ...prevFormData,
    //             [name]: type === "file" ? file:value
    //         }
    //     })
        
    //     console.log(formData)
    // }
    // const[permitNavigate,setPermitNavigate] = useState(false)

        const navigate = useNavigate();

        function handleSubmit(event){
        event.preventDefault()
        
        props.setData(formData)
            // formdata=formData;/
            navigate("/")
               
        }        
    
    return(
    <div className = "create-challange">
    <div className="challange-header">
        <div className="challange-heading">
            <h2>Challange Details</h2>
        </div>
    </div>
    <div className="challange-body">
        <form onSubmit={handleSubmit}>
            <div className="challange-name">
                <h3>Challange Name</h3>
                <input
                    type ="text"
                    name = "name"
                    // value = {formData.name}              
                    onChange = {handleChange}
                  required ="required"

                />
            </div>
            <div className="date">
                <h3>Start Date</h3>
                <input
                    type ="date"
                    name = "startDate"
                    // value = {formData.startDate}
                    onChange = {handleChange} required ="required"
                />
            </div>
            <div className="date">
                <h3>End Date</h3>
                <input
                    type ="date"
                    name = "EndDate"
                    // value = {formData.EndDate}
                    placeholder = "Add end date"
                    onChange = {handleChange}
                    required ="required"
                />
            </div>
            <div className="description">
                <h3>Description</h3>
                <textarea
                // value = {formData.description}
                onChange = {handleChange}
                name = "description"
                 required ="required"
                />
            </div>
            <div className="imageupload">
                <h3>Image</h3>
                <input 
                type = "file"
                name = "image"
                id = "file"
                accept="image/*"
                
                file = ''
                onChange = {handleChange} 
                required ="required"
                />
                <label for = "file">upload <span> <img src="../../Images/assets/icons/bxs_cloud-upload.svg" alt = ""/>
                </span></label>
            </div>
            <div className="radio">
                <h3>
                    Level Type
                </h3>
                <select
                 id = "level"
                //  value = {formData.level}
                 name = "level"
                 onChange = {handleChange} 
                 required ="required"
                 >
                    <option value="">-Set Level-</option>
                    <option value = "Easy">Easy</option>
                    <option value = "Medium">Medium</option>
                    <option value = "Hard">Hard</option>
                    
                 </select>
            </div>
            {/* <Link to="/"> */}
            <button onClick={handleSubmit} className="submit-btn">Create Challange</button>
            {/* </Link> */}
        </form>
    </div>
    </div>
    )

}
export default CreateChallangeForm;
// export {showDescription}
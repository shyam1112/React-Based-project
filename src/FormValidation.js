import { useState } from "react";

function FormValidation(){
    const [username,setUsername]=useState(false);
    const [pass,setPass]=useState(false);
    function getdata(e){
        e.preventDefault();
    }
    function userHandle(e){
        let length=e.target.value.length;
        if(length<3 && length!==0){
            setUsername(true);
        }else{
            setUsername(false);
        }
    }
    function passHandler(e){
        let length=e.target.value.length;
        if(length<3 && length!==0){
            setPass(true);
        }else{
            setPass(false);
        }
    }
    function alertsubmit(){
        if(username===true || pass===true){
            alert("Your data is incorrect please fill right data to submit the form")
        }else{
            alert("All is Good :)");
        }
    }
    return(
        <div>
            <form onSubmit={getdata}>
                <input type="text" placeholder="Enter name" onChange={userHandle}/>{username?<span>User Not Valid</span>:""}<br/><br/>
                <input type="text" placeholder="Enter password" onChange={passHandler}/>{pass?<span>Password not valid</span>:""}<br/><br/>
                <button type="submit" onClick={alertsubmit}>  login </button>
            </form>
        </div>
    )
}
export default FormValidation;
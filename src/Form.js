import { useState } from "react";

function Form(){
    const [name,setName]=useState("");
    const [select,setSelect]=useState();
    const [checked,setChecked]=useState(false);
    function getformdata(e){
        console.log(name , select,checked);
        e.preventDefault();
    }
    return(<div>
        <h1>Form</h1>

        <form onSubmit={getformdata}>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input>
            <br/>
            <br/>
            <select onChange={(e)=>setSelect(e.target.value)}>
                <option>Select car</option>
                <option>Hyundai</option>
                <option>TATA</option>
            </select>
            <br/>
            <br/>
            <input type="checkbox" onChange={(e)=>setChecked(e.target.checked)}></input><span>Accept terms and condition</span>
            <br/>
            <br/>
            <button type="submit">submit</button>
        </form>
    </div>)
} 
export default Form;
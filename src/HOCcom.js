import { useState } from "react";
import { InputGroup } from "react-bootstrap";

function HOCcom(){

    return(
        <div>
            <Boxred cmp={Box}/>
            <Boxgreen cmp={Box}/>
            <Boxorange cmp={Box}/>
            <Boxyellow cmp={Box}/>
        </div>
    )
}
export default HOCcom;

function Boxred(props){
    return <h3 style={{backgroundColor:'red',width:250,marginLeft:500,marginTop:30}}><props.cmp/></h3>
}

function Boxgreen(props){
    return <h3 style={{backgroundColor:'green',width:250,marginLeft:500,marginTop:30}}><props.cmp/></h3>
}

function Boxorange(props){
    return <h3 style={{backgroundColor:'orange',width:250,marginLeft:500,marginTop:30}}><props.cmp/></h3>
}

function Boxyellow(props){
    return <h3 style={{backgroundColor:'yellow',width:250,marginLeft:500,marginTop:30}}><props.cmp/></h3>
}
function Box(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h3>{count}</h3>
            <br/>
            <br/>
            <button onClick={()=>setCount(count+1)}>Click</button>

            
        </div>
    )
}
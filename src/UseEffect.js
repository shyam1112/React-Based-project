import { useEffect, useState } from "react";

function UseEffect(){
    const [data,setData]=useState(0);
    useEffect(()=>{
        console.log("Log");
    })
    return(
        <div>
            <h1>Count : {data}</h1>
            <button onClick={()=>setData(data +1)}>Click</button>
        </div>
    )
}
export default UseEffect;
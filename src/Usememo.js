import { useMemo, useState } from "react";

function Usememo(){

    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);

    const multiplication=useMemo(()=>{
        console.warn("multiplication");
        return count*5;
    },[count])
    return(
        <div>
            <h1>count : {count}</h1>
            <h1>Item : {item}</h1>
            <br/>
            <h1>{multiplication}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=>setItem(item*10)}>Item</button>
        </div>
    )
}
export default Usememo;
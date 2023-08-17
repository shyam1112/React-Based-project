const { useState } = require("react")

function ControllCom(){
    const [val,SetVal]=useState("");
    return(
        <div>
            <input type="text" value={val}  onChange={(e)=>SetVal(e.target.value)}/>
            <h1>{val}</h1>
        </div>
    )
}
export default ControllCom;
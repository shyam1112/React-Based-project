import { useSearchParams } from "react-router-dom";
function UsesearchHook(){
    const [searchparam,setSearchparam]=useSearchParams();
    const age=searchparam.get('age');
    const city=searchparam.get('text');
    return(
        <div>
            <h2>Age : {age}</h2>
            <h2>city : {city}</h2>
            <input type="text" onChange={(e)=>setSearchparam({text:e.target.value,age})}/>
            <button onClick={()=>setSearchparam({age:40})}>Click</button>
        </div>
    )
}
export default UsesearchHook;
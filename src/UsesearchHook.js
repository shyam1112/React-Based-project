import { useSearchParams } from "react-router-dom";
function UsesearchHook(){
    const [searchparam,setSearchparam]=useSearchParams();
    const age=searchparam.get('age');
    return(
        <div>
            <h2>Age : {age}</h2>
            <h2>city :</h2>
            <input type="text" onChange={(e)=>setSearchparam({text:e.target.value,age})}/>
            <button onClick={()=>setSearchparam({age:40})}>Click</button>
        </div>
    )
}
export default UsesearchHook;
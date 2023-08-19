import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const loginn=()=>{
        localStorage.setItem('login',true);
        navigate('/');
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(login){
            navigate('/');
        }
    })
    return(
        <div>
            <h1>..Login..</h1>
            <input type="text" /><br/>
            <input type="text" /><br/>
            <button onClick={loginn}>Login</button>
        </div>
    )
}
export default Login;
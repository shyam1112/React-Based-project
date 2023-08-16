import { useRef } from "react";
import UforwardRef from "./UforwardRef";

function Useref(){

    let inputRef=useRef(null);
    function Handle(){
        inputRef.current.focus();
        inputRef.current.style.color='red';
        // inputRef.current.style.display="none"
    }
    return(
        <div>
            <h1>Using ForwardedRef</h1>
            {/* <input type="text" ref={inputRef}/> */}
            <UforwardRef ref={inputRef}/>
            <button onClick={Handle}>Click to Handle </button>
        </div>

    )
}
export default Useref;
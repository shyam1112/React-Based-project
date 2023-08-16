import { useRef } from "react";


function Useref(){

    let inputRef=useRef(null);
    function Handle(){
        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.style.display="none"
    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={Handle}>Click to Handle</button>
        </div>

    )
}
export default Useref;
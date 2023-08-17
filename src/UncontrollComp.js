import { useRef } from "react";

function UncontrollComp() {
    let inputRef=useRef(null);
    function submitval(e) {
        e.preventDefault();
        console.warn(inputRef.current.value)
        console.warn(document.getElementById('input').value);
        
    }
    return (
        <div>
            <form onSubmit={submitval}>
                <input type="text" ref={inputRef} /> <br /><br />
                <input type="text" id="input"/><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UncontrollComp;
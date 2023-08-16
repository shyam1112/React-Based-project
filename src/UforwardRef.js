import { forwardRef } from "react";

function UforwardRef(props,ref){
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}
export default forwardRef(UforwardRef);
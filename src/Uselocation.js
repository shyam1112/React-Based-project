import { Outlet, useLocation } from "react-router-dom";
function Uselocation(){

    const location=useLocation();
    console.log(location);
    return(
        <div>
            <h1>This is location.</h1>
        </div>
    )
}
export default Uselocation;
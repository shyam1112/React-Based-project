import { useParams } from "react-router-dom";
function User(){
    const {name}=useParams(null);
    return <div>
            <h1> {name} User page..</h1>

    </div>
}

export default User;

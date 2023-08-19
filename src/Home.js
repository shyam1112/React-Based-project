import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>This is home page baka...</h1>
            <h2><Link to='/usesearch'>usesearchparam</Link></h2>
            <br/>
            <h2><Link to={'/uselocation'}>Uselocation</Link></h2>
        </div>
    )
}
export default Home;
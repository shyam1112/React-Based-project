
import { Link } from 'react-router-dom';
import About from './About';
function Navbarr() {
  return (
    <div>
        <div className="topnav">
          <Link to="/" className="active">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/User">User</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
    </div>
  );
}

export default Navbarr;
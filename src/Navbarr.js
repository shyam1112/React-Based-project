
import { BrowserRouter, Link } from 'react-router-dom';
function Navbarr() {
  return (
    <div>
        <BrowserRouter>
      <div className="topnav">
        <Link to="/" className="active">Home</Link>
        <Link to="/" >Home</Link>
        <Link to="/" >Home</Link>

       
      </div>
        </BrowserRouter>
    </div>
  );
}

export default Navbarr;
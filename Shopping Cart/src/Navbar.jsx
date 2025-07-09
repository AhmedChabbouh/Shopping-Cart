
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="#">MyShop</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;

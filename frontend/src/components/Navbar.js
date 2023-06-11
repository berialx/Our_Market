import { Link } from 'react-router-dom';
import Logo from "../Assets/Images/Logo.PNG";
import { ShoppingCart } from 'phosphor-react';
import "../styles/Navbar.css";

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Logo"/>
        <Link to="/">
          <h1>የኛ ገበያ-Our Market</h1>
        </Link>
          <h2>Shop Smart Shop Easy!</h2>
        <nav>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/cart"><ShoppingCart size={32} /></Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
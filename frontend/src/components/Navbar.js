import { Link } from 'react-router-dom';
import Logo from "../Assets/Images/Logo.PNG";
import { ShoppingCart } from 'phosphor-react';
import "../styles/Navbar.css";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="navbar">
        <img src={Logo} alt="Logo"/>
        <Link to="/">
          <h1>የኛ ገበያ-Our Market</h1>
        </Link>
        <nav>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
            <Link to="/cart"><ShoppingCart size={32} /></Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
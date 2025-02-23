import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import { useCart } from "../components/ContextReducer";
import Model from '../Model/Model';

function Navbar() {
  const navigate = useNavigate();
  let data = useCart();

  const [cartView, setCartView] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // New state for navbar toggle

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/Loginpage');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-4 fst-bold" to="/">FlavourFleet</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)} // Toggle state on click
          aria-controls="navbarNav"
          aria-expanded={isNavOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/MyOrder" onClick={() => setIsNavOpen(false)}>My Orders</Link>
              </li>
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/Loginpage" onClick={() => setIsNavOpen(false)}>LogIn</Link>
              <Link className="btn bg-white text-success mx-1" to="/Signuppage" onClick={() => setIsNavOpen(false)}>SignUp</Link>
            </div>
          ) : (
            <div>
              <div className='btn bg-white text-success mx-2' onClick={() => setCartView(true)}>
                My Cart
                <Badge pill bg="danger">{data.length}</Badge>
              </div>
              {cartView && <Model onClose={() => setCartView(false)}><Cart /></Model>}
              <div className='btn bg-white text-danger mx-2' onClick={() => { handleLogout(); setIsNavOpen(false); }}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

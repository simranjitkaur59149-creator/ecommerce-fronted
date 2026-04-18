import React, { useState, useEffect } from "react";
import { useCart } from "../Cart/CartProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, CircleUserRound } from "lucide-react";
import logo from "../assets/logo.png";
import headerstyle from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  // FIX 1: Change ! to !! (Double bang converts truthy string to boolean true)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    // FIX 2: If token exists, isLoggedIn should be true
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/homepage"); // Use navigate here instead of putting NavLink inside a button
  };

  return (
    <header className={headerstyle.header}>
      <figure>
        <img   onClick={()=>navigate(-1)} src={logo} alt="Logo" width={150} />
      </figure>

      <ul className={headerstyle.navbar}>
        <li>
          <NavLink to="/homepage" className={headerstyle.links}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/data" className={headerstyle.links}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={headerstyle.links}>
            About
          </NavLink>
        </li>

        {isLoggedIn ? (
          /* LOGGED IN VIEW */
          <>
            <li>
              <button  onClick={handleLogout} className={`${headerstyle.links} ${headerstyle.loginbtn}`}>
                Logout
              </button>
            </li>
            <li>
              <NavLink
                to="/cartpage"
                className={`${headerstyle.links} ${headerstyle.carticon}`}
              >
                <div style={{ position: "relative" }}>
                  <ShoppingCart />
                  {cartCount > 0 && (
                    <span className={headerstyle.cartbadge}>{cartCount}</span>
                  )}
                </div>
              </NavLink>
            </li>
          </>
        ) : (
          /* LOGGED OUT VIEW */
          <>
            <li>
             
                <button onClick={()=>navigate("/login")}   className={`${headerstyle.links} ${headerstyle.loginbtn}`}> Login </button>
         
            </li>
            <li>
              <NavLink
                to="/cartpage"
                className={`${headerstyle.links} ${headerstyle.carticon}`}
              >
                <div style={{ position: "relative" }}>
                  <ShoppingCart />
                </div>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

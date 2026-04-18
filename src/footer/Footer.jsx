import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import footerstyle from "./footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={footerstyle.footerWrapper}>
      <div className={footerstyle.container}>
        {/* Column 1: Brand */}
        <div className={footerstyle.column}>
          <h2 className={footerstyle.brand}>ShopEase</h2>
          <p className={footerstyle.description}>
            Your one-stop shop for everything quality and ease.
          </p>
          <div className={footerstyle.socials}>
            <Instagram size={20} />
            <Facebook size={20} />
            <Twitter size={20} />
          </div>
        </div>

        {/* Column 2: Products */}
        <div className={footerstyle.column}>
          <h3 className={footerstyle.heading}>Products</h3>
          <NavLink to="/data" className={footerstyle.links}>All Products</NavLink>
          
        </div>

        {/* Column 3: Company */}
        <div className={footerstyle.column}>
          <h3 className={footerstyle.heading}>About</h3>
          <NavLink to="/about" className={footerstyle.links}>Our Story</NavLink>
          <NavLink to="/terms" className={footerstyle.links}>Terms & Conditions</NavLink>
          <NavLink to="/privacy" className={footerstyle.links}>Privacy Policy</NavLink>
        </div>

        {/* Column 4: Account */}
        <div className={footerstyle.column}>
          <h3 className={footerstyle.heading}>Account</h3>
          <NavLink to="/signup" className={footerstyle.links}>Profile</NavLink>
          <NavLink to="/cartpage" className={footerstyle.links}>My Cart</NavLink>
        </div>
      </div>

      <div className={footerstyle.bottomBar}>
        <p>© 2026 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
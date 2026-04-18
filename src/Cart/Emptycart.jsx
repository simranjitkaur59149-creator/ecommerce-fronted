import cart from "../assets/emptycart.png";
import "./cart.css";

export default function Emptycart() {
  return (
    <div className="empty-cart-container">
      <h1 className="empty-cart-title">
        Oops! The cart is empty
      </h1>
      <div className="empty-cart-image-wrapper">
        <img src={cart} alt="Empty Cart" className="empty-cart-img" />
      </div>
    </div>
  );
}
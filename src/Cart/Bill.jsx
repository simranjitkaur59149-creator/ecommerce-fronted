import { useEffect } from "react";
import { useCart } from "./CartProvider";
import Emptycart from "./Emptycart.jsx";
import "./cart.css";

export default function CartPage() {
  const { cartItems, removeFromCart, fetchCart } = useCart();
  const username = localStorage.getItem("Username");

  useEffect(() => {
    fetchCart();
  }, []);

  const total = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="cart-page-wrapper">
      {username && (
        <div className="welcome-banner">
          <h1>Welcome, {username}</h1>
        </div>
      )}

      {cartItems.length === 0 ? (
        <Emptycart />
      ) : (
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.productId}>
                  <td data-label="Title">{item.title}</td>
                  <td data-label="Price">${item.price}</td>
                  <td data-label="Quantity">{item.quantity}</td>
                  <td data-label="Subtotal">${(item.price * item.quantity).toFixed(2)}</td>
                  <td data-label="Action">
                    <button className="remove-btn" onClick={() => removeFromCart(item.productId)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="cart-total-section">
            <h2>Total Amount: ${total.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
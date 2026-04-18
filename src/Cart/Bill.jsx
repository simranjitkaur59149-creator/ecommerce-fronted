import { useEffect } from "react";
import { useCart } from "./CartProvider";
import Emptycart from "./Emptycart.jsx";
import "./cart.css"
export default function CartPage() {
  // Pull cartItems and fetchCart from context
  const { cartItems, removeFromCart, fetchCart } = useCart();
  const username = localStorage.getItem("Username");

  useEffect(() => {
    fetchCart(); // Call the fetch function from context
  }, []);

  const total = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  return (
    <>
      <div>
        {username && (
          <div style={{ textAlign: "center", margin: "20px", color: "gray" }}>
            <h1>Welcome, {username}</h1>
          </div>
        )}

        {cartItems.length === 0 ? (
          <Emptycart/>
          // <Emptycart/>
        ) : (
          <table border="2px">
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
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeFromCart(item.productId)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" style={{ textAlign: "right" }}>
                  Total Amount: ${total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
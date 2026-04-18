import { createContext, useContext, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
const CartContext=createContext()
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart data (added this helper)
  const fetchCart = async () => {
    try {
      const res = await axios.get("https://ecommerce-backend-saz6.onrender.com/auth/cart", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
    
      setCartItems(res.data.cartItems || []);
    } catch (error) {
      console.log("Error fetching cart:", error);
    }
  };

  const addToCart = async (product) => {
const token=localStorage.getItem("token")
if(!token)
{
  toast("User is not logged in")
  return;
}

    try {
      await axios.post(`https://ecommerce-backend-saz6.onrender.com/auth/addtocart`, 
        { productId: product.id, title: product.title, price: product.price },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      fetchCart(); // Refresh state after adding
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`https://ecommerce-backend-saz6.onrender.com/auth/cart/${productId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      
     
      setCartItems((prev) => {
        return prev.map(item => 
          item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
import cart from "../assets/emptycart.png";
import "./cart.css";
export default function Emptycart() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Oops! the cart is empty
      </h1>
      <div style={{ margin: "0 25%", opacity: ".3" }}>
        <img src={cart} alt="" width="600" height="400" />
      </div>
    </>
  );
}

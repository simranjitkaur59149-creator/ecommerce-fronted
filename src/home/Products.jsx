import { useEffect, useState } from "react";
import "./products.css"
import "../Cart/cart.css"
import { Link } from "react-router-dom";
// import product from "./ProductList";
export default function Products(){
    const [product,setProduct]=useState([])
    useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => setProduct(data.products));
}, []);

if (product.length === 0) return <h2 className="loader"></h2>;

return (
  <>
    <h1 style={{ textAlign: "center" }}>Shop Now</h1>

    <div className="cardbox">
      {product.map((p) => (
        <Link to={`/product/${p.id}`} key={p.id} className="cards">
          <img src={p.images[0]} alt={p.title} width="130" height="160" />
          <h4>{p.title}</h4>
          <h3>Price : ${p.price}</h3>

          <h5>
            Rating:
            <span
              style={{
                backgroundColor: p.rating < 3 ? "red" : "green",
                padding: "3px",
                borderRadius: "15px",
                color: "white"
              }}
            >
              {p.rating}
            </span>
          </h5>
        </Link>
      ))}
    </div>
  </>)}
  
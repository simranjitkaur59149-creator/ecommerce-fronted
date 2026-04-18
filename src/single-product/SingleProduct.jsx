import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";
import "../loader/loader.css";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../Cart/CartProvider";
 import { ToastContainer, toast } from 'react-toastify';
export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const { id } = useParams();
const isLoggedIn=!!localStorage.getItem("token")
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <h2 className="loader"></h2>;

  const handleAddtoCart = () => {
    if(!isLoggedIn)
    {
      toast("Please Login To add items to cart")
    }
    else{
      addToCart(product);
      toast("Item is added successfully")

    }
    // alert("Item is added successfully");
  };

  return (
    <>
      <div className="box1">
        <div>
          {" "}
          <h2>{product.title}</h2>
          <img src={product.thumbnail} width="300" alt={product.title} />
           <h4>{product.description}</h4>
        </div>
        <div>
           {product.images?.map((img, index) => (
            <img key={index} src={img} alt={product.title} width="200" />
          ))}

          <h3>Price: ${product.price}</h3>
          <h3>Discount: ${product.discountPercentage} off</h3>
          <h3>
            Rating:
            <span
              style={{
                backgroundColor: product.rating < 3 ? "red" : "green",
                borderRadius: "15px",
                padding: "3px",
              }}
            >
              {product.rating}
            </span>
          </h3>

         

         
          <button className="addto" onClick={handleAddtoCart}>
            Add to Cart <ShoppingCart />
          </button>
        </div>
      </div>
      
       <ToastContainer />
    </>
  );
}

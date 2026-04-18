import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../Cart/CartProvider";
import "./data.css";
import "../Cart/cart.css";
import { ToastContainer, toast } from "react-toastify";

export default function Data() {
  const { addToCart } = useCart();
  const [query, setQuery] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [category, setCategory] = useState("all");
  const [isSearching, setIsSearching] = useState(false);

  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Category / All products fetch
  useEffect(() => {
    if (isSearching) return;

    setLoading(true);

    const url =
      category === "all"
        ? "https://dummyjson.com/products?limit=100"
        : `https://dummyjson.com/products/category/${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data.products);
        setLoading(false);
      })
      .catch(console.error);
  }, [category, isSearching]);

  // Search handler
  const handleSearch = () => {
    if (!query) return;

    setIsSearching(true);
    setLoading(true);

    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data.products);
        setLoading(false);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (allProduct.length > 0) {
      const prices = allProduct.map((p) => p.price);
      setPriceRange([Math.min(...prices), Math.max(...prices)]);
    }
  }, [allProduct]);

  const filteredProducts = allProduct.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1],
  );
  const handleCart = (e, product) => {
    const token=localStorage.getItem("token")
    e.preventDefault();
    e.stopPropagation();
   if(!token){
    toast("User is not Logged in")
    return
   }
   else{
    
     addToCart(product);
     toast("Item added successfully");
   }
  };
  if (loading) return <h2 className="loader"></h2>;
  return (
    <section className="container">
      <aside className="aside">
        <h1>Filters</h1>
        <h2>Price Range</h2>
        <div className="price-slider">
          <div className="price-label"></div>
          {/* Min slider */}
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[0]}
            onChange={(e) => {
              const value = Math.min(
                Number(e.target.value),
                priceRange[1] - 10,
              );
              setPriceRange([value, priceRange[1]]);
            }}
            className="range range-min"
          />{" "}
          ${priceRange[0]}
          <br />
          {/* Max slider */}
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => {
              const value = Math.max(
                Number(e.target.value),
                priceRange[0] + 10,
              );
              setPriceRange([priceRange[0], value]);
            }}
            className="range range-max"
          />{" "}
          ${priceRange[1]}
        </div>
        <h2>Categories</h2>

        <button
          className="button"
          onClick={() => setIsSearching(false) || setCategory("all")}
        >
          All Products
        </button>
        <button
          className="button"
          onClick={() => setIsSearching(false) || setCategory("mens-shirts")}
        >
          Mens wear
        </button>
        <button
          className="button"
          onClick={() => setIsSearching(false) || setCategory("mens-shoes")}
        >
          Mens shoes
        </button>
        <button
          className="button"
          onClick={() => setIsSearching(false) || setCategory("womens-dresses")}
        >
          Womens wear
        </button>
        <button
          className="button"
          onClick={() => setIsSearching(false) || setCategory("womens-shoes")}
        >
          Women shoes
        </button>
        <button
          className="button"
          onClick={() => setIsSearching(false) || setCategory("smartphones")}
        >
          Smart Phones
        </button>
        <button
          className="button"
          onClick={() => setIsSearching(false) || setCategory("laptops")}
        >
          Laptops
        </button>
      </aside>

      <main>
        <section className="search">
          <input
            type="text"
            placeholder="You can search here..."
            className="input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="btn" onClick={handleSearch}>
            search
          </button>
        </section>
        <section className="main">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="productcard"
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Rating: {product.rating}</p>
              <button
                className="button"
                onClick={(e) => handleCart(e, product,)}
              >
                <span style={{ fontSize: "15px" }}> Add to Cart</span>
              </button>
            </Link>
          ))}
        </section>
        <ToastContainer />
      </main>
    </section>
  );
}

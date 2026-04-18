import "./card.css";
import men from "../assets/men.webp";
import women from "../assets/women-fashion.webp";
import electronic from "../assets/electronics.jpg";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Categories</h1>
      <div className="box">
        <div className="card">
          <div className="img-category">
            <img src={men} alt="" />
            <div className="text-category">
              <h1>Men</h1>
              <h4>Style that defines you</h4>
              <p>
                Discover modern essentials, smart casuals, and everyday wear
                designed for comfort and confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-category">
            <img src={women} alt="" />
            <div className="text-category">
              <h1>Women</h1>
              <h4>Trends made for you</h4>
              <p>
                Explore elegant styles, seasonal trends, and must-have outfits
                that celebrate your individuality.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img-category">
            <img src={electronic} alt="" />
            <div className="text-category">
              <h1>Electronics</h1>
              <h4>Smart tech for modern life</h4>
              <p>
                Shop the latest gadgets, accessories, and devices built to keep
                you connected and ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

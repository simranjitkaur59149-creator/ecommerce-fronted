import ecommerce from "../assets/ecommerce.jpg";
import clothes from "../assets/clothes.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slidder.css";

export default function MyCarousel() {
  return (
    <AliceCarousel
      infinite
      autoPlay
      autoPlayInterval={3000}
      disableButtonsControls
    >
      <figure className="img-container">
        <img src={ecommerce} className="carousel-img" alt="Ecommerce" />
        <div className="text-container">
          <h1>Everything You Need, One Click Away</h1>
          <p>Unbeatable deals on fashion, electronics, and more — updated daily.</p>
        </div>
      </figure>

      <figure className="img-container">
        <img src={clothes} className="carousel-img" alt="Clothes" />
        <div className="text-container" style={{ color: "gray" }}>
          <h1>Effortless Shopping for Every Style</h1>
          <p>Discover the latest trends and find everything you need at great prices.</p>
        </div>
      </figure>
    </AliceCarousel>
  );
}
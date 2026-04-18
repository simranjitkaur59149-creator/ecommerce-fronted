import clothes from "../assets/clothes.jpg";
import gadgets from "../assets/gadgets.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slidder.css";

export default function MyCarousel() {
  return (
    <AliceCarousel
      // autoPlay
      infinite
      disableButtonsControls
    >
      <figure className="img-container">
        {" "}
        <img
          src={ecommerce}
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
        <div className="text-container">
          <h1>Everything You Need, One Click Away</h1>
          <p>
           Unbeatable deals on fashion, electronics, and more — updated daily.
          </p>
         
        </div>
      </figure>
      <figure className="img-container">
        <img
          src={clothes}
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />{" "}
        <div className="text-container" style={{color:"gray"}}>
          <h1>Effortless Shopping for Every Style</h1>
          <p>
            Discover the latest trends and find everything you need at great
            prices.
          </p>
        </div>
      </figure>
      {/* <figure className="img-container">
        {" "}
        <img
          src={gadgets}
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />{" "}
        <div className="text-container" style={{color:"maroon"}}>
          <h1>Made for Your Everyday Moments</h1>
          <p>
           From work to weekends, shop pieces that fit your life effortlessly.
          </p>
        </div> 
      </figure> */}
    </AliceCarousel>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// export default function MyCarousel() {
//   return (
//     <Swiper spaceBetween={10} slidesPerView={1} loop style={{ width:"90%",height: "600px",margin:"0 auto"}}>
//       <SwiperSlide><img src={ecommerce} alt="" /></SwiperSlide>
//       <SwiperSlide><img src={clothes} alt="" /></SwiperSlide>
//       <SwiperSlide><img src={gadgets} alt="" width="90%"/></SwiperSlide>
//       {/* <SwiperSlide>Slide 3</SwiperSlide> */}

//     </Swiper>
//   );
// }

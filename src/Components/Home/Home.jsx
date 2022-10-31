import React from "react";
import "./Home.css";

import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        
        <img
          src="https://m.media-amazon.com/images/I/610+3JBNfvL._SX3000_.jpg"
          alt=""
          className="home_img"
        />

        <div className="home_row">
          <Product
            id={1}
            title="FEGSY Battery Powered Personal Body Massager for Women, Men, Rechargeable Wireless Vibration"
            image="https://m.media-amazon.com/images/I/71uaT069fwL._AC_UL480_FMwebp_QL65_.jpg"
            price={685}
            rating={5}
          />
          <Product
          id={2}
            title=" Apple iPhone 13 (128GB) - Midnight"
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"
            price={66900}
            rating={5}
          />
        </div>
        <div className="home_row">
          {/* product */}
          <Product
          id={3}
            title=" Acer Aspire Intel Core i5 11th Gen - (16 GB/ 512 GB SSD/Widows 11 Home/ MS Office/Silver/ 1.7 Kgs) A315-58 with 39.6 cm (15.6 inches) FHD Display Laptop"
            image="https://m.media-amazon.com/images/I/41abnie5YKL._SX300_SY300_QL70_FMwebp_.jpg"
            price={47990}
            rating={5}
          />
          {/* product */}
          <Product
          id={4}
            title="HP 15s-Ryzen 3 3250U 8GB SDRAM/256GB SSD 15.6inch(39.6cm) HD, Micro-Edge Laptop/AMD Radeon Graphics/Dual Speakers/Win 11 Home/MS Office/Fast Charge/Jet Black/1.69Kg, 15s-ey1508AU"
            image="https://m.media-amazon.com/images/I/41dirg9pWSL._SX300_SY300_QL70_FMwebp_.jpg"
            price={30000}
            rating={5}
          />
          <Product
          id={5}
            title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black) Visit the boAt Store"
            image="https://m.media-amazon.com/images/I/51xxA+6E+xL._SX679_.jpg"
            price={1250}
            rating={4}
          />
          {/* product */}
        </div>
        <div className="home_row">
          <Product
          id={6}
            title=" Acer Aspire Intel Core i5 11th Gen - (16 GB/ 512 GB SSD/Widows 11 Home/ MS Office/Silver/ 1.7 Kgs) A315-58 with 39.6 cm (15.6 inches) FHD Display Laptop"
            image="https://m.media-amazon.com/images/I/41abnie5YKL._SX300_SY300_QL70_FMwebp_.jpg"
            price={47990}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

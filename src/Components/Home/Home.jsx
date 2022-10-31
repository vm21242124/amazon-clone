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
            title="2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,"
            image="https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg"
            href="https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3BMKMGP/ref=sr_1_2_sspa?crid=2EU3WJMY8UU60&keywords=macbook&qid=1667237917&qu=eyJxc2MiOiI1LjAyIiwicXNhIjoiNC42NiIsInFzcCI6IjMuNTQifQ%3D%3D&sprefix=macbook%2Caps%2C307&sr=8-2-spons&psc=1"
            price={116900}
            rating={5}
          />
          <Product
          id={2}
            title=" Apple iPhone 13 (128GB) - Midnight"
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"
            price={66900}
            href="https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?keywords=apple+iphone+13&qid=1667238081&qu=eyJxc2MiOiI0Ljk2IiwicXNhIjoiNC41MiIsInFzcCI6IjIuODIifQ%3D%3D&sprefix=apple+ipho%2Caps%2C308&sr=8-1-spons&psc=1"
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
            href="https://www.amazon.in/Acer-Graphics-Windows-A514-54-Display/dp/B0B5ZNR1T8/ref=sr_1_3?keywords=acer+aspire+5&qid=1667238134&qu=eyJxc2MiOiI0LjQ2IiwicXNhIjoiNC4yMiIsInFzcCI6IjIuMjUifQ%3D%3D&sprefix=acer+a%2Caps%2C289&sr=8-3"
            rating={5}
          />
          {/* product */}
          <Product
          id={4}
            title="HP 15s-Ryzen 3 3250U 8GB SDRAM/256GB SSD 15.6inch(39.6cm) HD, Micro-Edge Laptop/AMD Radeon Graphics/Dual Speakers/Win 11 Home/MS Office/Fast Charge/Jet Black/1.69Kg, 15s-ey1508AU"
            image="https://m.media-amazon.com/images/I/41dirg9pWSL._SX300_SY300_QL70_FMwebp_.jpg"
            price={30000}
            href="https://www.amazon.in/HP-15-6-inches-Micro-Edge-Anti-Glare-15s-eq2182AU/dp/B0B4N77Y34/ref=sr_1_3?crid=1NT0PVEEOMKV9&keywords=hp+15s&qid=1667238195&qu=eyJxc2MiOiI0LjU1IiwicXNhIjoiNC4zNCIsInFzcCI6IjIuOTgifQ%3D%3D&sprefix=hp+15s%2Caps%2C447&sr=8-3"
            rating={5}
          />
          <Product
          id={5}
            title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black) Visit the boAt Store"
            image="https://m.media-amazon.com/images/I/51xxA+6E+xL._SX679_.jpg"
            price={1250}
            href="https://www.amazon.in/HP-15-6-inches-Micro-Edge-Anti-Glare-15s-eq2182AU/dp/B0B4N77Y34/ref=sr_1_3?crid=1NT0PVEEOMKV9&keywords=hp+15s&qid=1667238195&qu=eyJxc2MiOiI0LjU1IiwicXNhIjoiNC4zNCIsInFzcCI6IjIuOTgifQ%3D%3D&sprefix=hp+15s%2Caps%2C447&sr=8-3"
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
            href="https://www.amazon.in/Acer-Graphics-Windows-A514-54-Display/dp/B0B5ZNR1T8/ref=sr_1_3?keywords=acer+aspire+5&qid=1667238134&qu=eyJxc2MiOiI0LjQ2IiwicXNhIjoiNC4yMiIsInFzcCI6IjIuMjUifQ%3D%3D&sprefix=acer+a%2Caps%2C289&sr=8-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

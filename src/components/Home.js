import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt="This is home "
        />

        <div className="home__row">
          <Product
            id="201"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={4.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="202"
            title="Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage) with No Cost EMI"
            price={1399}
            image="https://images-na.ssl-images-amazon.com/images/I/81frwlzRG5L._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="203"
            title="Fire-Boltt Blast 1000 Hi-Fi Stereo Over-Ear Wireless Bluetooth Headphones with Foldable Earmuffs."
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61DAJ7oqSzL._SL1500_.jpg"
            rating={4}
          />

          <Product
            id="204"
            title="Maharaja Whiteline Jmg Odacio Plus 450-Watt Juicer Mixer Grinder with 3 Jars (Black/Silver)"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/718rCqfnkkL._SL1500_.jpg"
            rating={4}
          />

          <Product
            id="205"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="206"
            title="LG Ultragear 81.28 cm (32-inch) QHD (2K) Gaming Monitor with 144Hz,1ms, Radeon Freesync, Display Port, HDMI x 2-32GK650"
            image="https://images-na.ssl-images-amazon.com/images/I/91gpmhtA%2BKL._SL1500_.jpg"
            price={299}
            rating={5}
          />

          <Product
            id="207"
            title="PlayStation 4 Pro 1TB Console"
            image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
            price={499}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

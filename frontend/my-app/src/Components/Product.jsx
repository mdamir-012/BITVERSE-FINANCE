import React, { useEffect, useState } from "react";
import "../styles/products.css";
import trolley_img from "../assets/trolley.png";
import exchange_img from "../assets/exchange.png";
import connection_img from "../assets/connection.png";
import rocket_img from "../assets/rocket.png";
import coins_img from "../assets/coins.png";
import yellow from "../assets/yellowborder.svg";
import bottom_icon from "../assets/boxbottomicon.svg";
import top_icon from "../assets/boxtopicon.svg";
import yellow_border from "../assets/planeyellowborder.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  { id: 1, img: trolley_img, title: "Bita Marketplace" },
  { id: 2, img: exchange_img, title: "Bitadex" },
  { id: 3, img: connection_img, title: "Bitabridge" },
  { id: 4, img: rocket_img, title: "Bitapad" },
  { id: 5, img: coins_img, title: "BitaLend" },
];

const Product = () => {
  const [productData, setProductData] = useState(products);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="main2 py-16 flex flex-col items-center gap-16 self-stretch relative"
      >
        {/*  Parent_Box start for text*/}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="maintext flex flex-col items-center gap-6 self-stretch"
        >
          <div className="relative">
            <h1>
              Our <span>Products</span>
            </h1>
            <img src={yellow} alt="border" />
          </div>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et
            Pellentesque habitant morbi.
          </p>
        </div>

        {/*  Parent_Box start for products */}
        <div className="products flex justify-center items-start content-start self-stretch flex-wrap gap-x-12 gap-y-14 ">
          {productData.map((ele) => (
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              key={ele.id}
              className="child flex w-80 min-w-80 relative flex-col justify-center items-center gap-2 ' +
                (index < 3 ? 'first_row' : 'second_row"
            >
              <div className="childimg">
                <img src={ele.img} alt={ele.id} />
              </div>
              <div className="text-center">
                <p>{ele.title}</p>
                <img
                  className="block m-auto my-2"
                  src={yellow_border}
                  alt="yellow_border"
                />
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada Pellentesque habitant morbi tristique senectus et
                  netus et malesuada{" "}
                </p>
              </div>
              <img
                className="topicon absolute"
                src={bottom_icon}
                alt="topicon"
              />
              <img
                className="bottomicon absolute"
                src={top_icon}
                alt="top_icon"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

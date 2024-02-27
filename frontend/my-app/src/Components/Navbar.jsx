import React from "react";
import logoYellow from "../assets/logo_home.svg";
import union from "../assets/Union.png";
import bank from "../assets/bank.png";
import star1 from "../assets/halfstar.svg";
import fullstar from "../assets/fullstar.svg";
import starborder from "../assets/starwithborder.svg";
import yellowBorder from "../assets/yellowborder.svg";
import pentagon from "../assets/pentagon.png";
import gateway from "../assets/Gateway.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="main left-0 w-full p-10 relative overflow-hidden">
      {/* Navbar start here */}
      <div className="navbar w-full flex py-4 px-8 rounded-2xl justify-between items-center ">
        <div className="nav_child1 h-14 flex justify-items-center gap-2">
          <div>
            <img src={logoYellow} alt="logo" />
          </div>
          <div>
            <p>BITVERSE</p>
            <p>FINANCE</p>
          </div>
        </div>
        <div className="nav_links flex justify-between items-center gap-8">
          <div className="flex justify-between items-center px-6 py-4 gap-8">
            <a href="/#">About</a>
            <a href="/#">Our Products</a>
            <a href="/#">Taken Utility</a>
            <a href="/#">Roadmap</a>
          </div>
          <button>Connect Wallet</button>
        </div>
      </div>
      {/* navbar end */}

      <img className="left_unionicon absolute" src={union} alt="left icon" />
      <img className="right_penta" src={pentagon} alt="right icon" />

      <div className="content flex justify-center items-center flex-col gap-0 m-auto my-14">
        <div className="gateway_text">
          <img src={gateway} alt="" />
        </div>
        <img className="bitverse_bank" src={bank} alt="" />
        <img className="star1" src={star1} alt="" />
        <img className="star2" src={star1} alt="" />
        <img className="big_star" src={fullstar} alt="" />
        <img className="star_border" src={starborder} alt="" />
        <img className="yellow_border" src={yellowBorder} alt="" />

        <div className="content2 flex justify-center items-center gap-4">
          <p>DeFi on</p>
          <p>Bitcoin</p>
        </div>
      </div>

      <div className="last flex justify-center items-center flex-col gap-10 m-auto mt-20">
        <p data-aos="fade-up" data-aos-duration="800">
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus
          tellus augue.
        </p>
        <div data-aos="fade-up" data-aos-duration="800">
          <p>Get Started</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M10.5 8.5L14.5 12.5L10.5 16.5"
                stroke="#1C1C1C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>

      
      <br />
    </div>
  );
};

export default Navbar;

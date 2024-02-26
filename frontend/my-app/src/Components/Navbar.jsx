import React from "react";
import logoYellow from "../assets/logoYellow.jpg";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="main w-full p-10 relative overflow-hidden">
      {/* Navbar start here */}
      <div className="navbar w-full flex py-4 px-8 justify-between items-center rounded-2xl">
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
            <a href="/">About</a>
            <a href="/">Our Products</a>
            <a href="/">Taken Utility</a>
            <a href="/">Roadmap</a>
          </div>
          <button>Connect Wallet</button>
        </div>
      </div>
      {/* navbar end */}

      <img className="lefticon" alt="left icon" />
      <img className="righticon" alt="right icon" />

      <div className="mainpart">
        <div></div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <div className="">
          <p>DeFi on</p>
          <p>Bitcoin</p>
        </div>
      </div>

      <div className="last">
        <p>
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus
          tellus augue.
        </p>
        <div>
          <p>Get Started</p>
          <p></p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;

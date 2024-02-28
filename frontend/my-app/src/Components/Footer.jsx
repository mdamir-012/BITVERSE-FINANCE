import React, { useEffect } from "react";
// import styles from "../styles/footer.css";
import "../styles/footer.css";
import FooterLogo from "../assets/footer-logo.svg";
import behance from "../assets/Behance.svg";
import facebook from "../assets/Facebook.png";
import instalogo from "../assets/Bituniverse (4)/Social Links/Instagram.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className="container">
      <div className={"first_child w-[100%]"}>
        <div data-aos="fade-up">
          <h4>Join our</h4>
          <h5>Community</h5>
        </div>
        <div className={"top_child w-[100%]"} data-aos="fade-up">
          <div>
            <img src={facebook} alt="facebook_logo" />
          </div>
          <div>
            <img src={behance} alt="behance_logo" />
          </div>
          <div>
            <img src={instalogo} alt="instalogo" />
          </div>
        </div>
      </div>
      <div className={"second_child w-[100%]"}>
        <img src={FooterLogo} alt="logo" />
        <p>2024 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;

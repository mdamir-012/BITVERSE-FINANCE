import React, { useEffect } from "react";
// import styles from "../styles/footer.css";
import "../styles/footer.css"
import FooterLogo  from "../assets/footer-logo.svg";
// import logo1 from "../assets/coins.png"
// import logo2 from "../assets/Bituniverse (3)/Social Links/Behance.png"
// import logo3 from "../assets/Bituniverse (3)/Social Links/Instagram.png"
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className="container">
      <div className={"first_child"}>
        <div data-aos="fade-up">
          <h4>Join our</h4>
          <h5>Community</h5>
        </div>
        <div className={"top_child"} data-aos="fade-up">
          <div>
            <img src={"logo1"} alt="logo" />
          </div>
          <div>
            <img src={"logo2"} alt="logo" />
          </div>
          <div>
            <img src={"logo3"} alt="logo" />
          </div>
        </div>
      </div>
      <div className={"second_child"}>
        <img src={FooterLogo} alt="logo" />
        <p>2023 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;

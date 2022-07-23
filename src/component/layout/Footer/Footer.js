import React from "react";
import playstore from "../../../images/playstore.png";
import AppStore from "../../../images/Appstore.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for IOS and Android Phone</p>
        <img src={playstore} alt="Playstore" />
        <img src={AppStore} alt="Appstore" />
      </div>

      <div class="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High quality is our first priority</p>
        <p>Copyrights 2022 &copy; Prathamesh Joshi</p>
      </div>

      <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">YouTube</a>
        <a href="/login">Login</a>
        <a href=""></a>
      </div>
    </footer>
  );
}

export default Footer;

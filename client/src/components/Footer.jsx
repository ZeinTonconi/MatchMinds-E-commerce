import React, { useRef } from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  const footerRef = useRef(null);

  return (
    <div ref={footerRef} className={style.footerVisible}>
      <div className={style.socialMedia}>
        <FiInstagram />
        <FaTwitter />
        <FaFacebook />
      </div>
      <p> &copy; 2024 MatchMinds.com</p>
    </div>
  );
}

export default Footer;

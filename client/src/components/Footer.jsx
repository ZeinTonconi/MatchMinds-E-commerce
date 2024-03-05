import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import style from"./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.socialMedia}>
        <FiInstagram /> <FaTwitter /> <FaFacebook />
      </div>
      <p> &copy; 2024 MatchMinds.com</p>
    </div>
  );
}

export default Footer;

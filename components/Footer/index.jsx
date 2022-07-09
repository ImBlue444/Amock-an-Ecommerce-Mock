import React from "react";
import styles from "../Footer/styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <div className={styles.Footer}>
      <h2>Amock - An E-Commerce Mock</h2>
      <h3>Created by Dennis Badagliacca</h3>
      <hr />
      <h4>Contacts:</h4>
      <a href="https://github.com/ImBlue444" target="_blank">
        <FaGithub />
      </a>{" "}
      <a href="https://www.linkedin.com/in/dennisbadagliacca/" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Footer;

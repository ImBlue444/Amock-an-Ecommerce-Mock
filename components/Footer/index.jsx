import React from "react";
import styles from "../Footer/styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useAppContext } from "../Context/state";

function Footer() {
  const context = useAppContext();
  return (
    <div className={context.modalSwitch ? styles.hide : styles.Footer}>
      <h2>Amock - An E-Commerce Mock</h2>
      <h3>Created by Dennis Badagliacca</h3>
      <hr />
      <h4>Contacts:</h4>
      <a href="https://github.com/ImBlue444" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/dennisbadagliacca/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Footer;

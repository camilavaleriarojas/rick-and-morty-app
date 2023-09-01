import React from "react";
import styles from "./navbar.module.css";
import Logout from "../logout";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.navbarBrand}>Rick and Morty App</h1>
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;

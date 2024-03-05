import React from "react";
import styles from './MenuItem.module.css'
function MenuItem({ image, name, price }) {
  return (
    <div className={styles.menuItem}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;

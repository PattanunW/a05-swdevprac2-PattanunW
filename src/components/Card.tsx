import React from "react";
import styles from "./card.module.css";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ venueName, imgSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={venueName} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{venueName}</h2>
      </div>
    </div>
  );
};

export default Card;

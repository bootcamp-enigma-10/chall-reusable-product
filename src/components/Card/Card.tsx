import React from "react";
import { CardButton } from "../Button/Button";
import starIcon from "../../assets/icons/star.svg";
import styles from "./Card.module.css";

export interface CardProps {
  image: string;
  badgeText?: string;
  badgeVariant?: "brown" | "green" | "orange" | "blue";
  topRightIcon?: string;
  location: string;
  rating: string;
  reviewCount: number;
  title: string;
  seller: string;
  currentPrice: string;
  originalPrice: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  badgeText,
  badgeVariant = "brown",
  topRightIcon,
  location,
  rating,
  reviewCount,
  title,
  seller,
  currentPrice,
  originalPrice,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {badgeText && (
          <span className={`${styles.badge} ${styles[badgeVariant]}`}>
            {badgeText}
          </span>
        )}

        {topRightIcon && (
          <div className={styles.topRightIconWrapper}>
            <img
              src={topRightIcon}
              alt="Icon"
              className={styles.topRightIcon}
            />
          </div>
        )}

        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.location}>{location}</span>
          <div className={styles.ratingGroup}>
            <img src={starIcon} alt="Rating" className={styles.starIcon} />
            <span className={styles.rating}>{rating}</span>
            <span className={styles.reviewCount}>({reviewCount})</span>
          </div>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.seller}>{seller}</p>

        <div className={styles.priceGroup}>
          <span className={styles.currentPrice}>{currentPrice}</span>
          <span className={styles.originalPrice}>{originalPrice}</span>
        </div>

        <CardButton />
      </div>
    </article>
  );
};

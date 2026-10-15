import React from "react";
import cartIcon from "../../assets/icons/cart.svg";
import styles from "./Button.module.css";

// Interface Props untuk tombol kategori
interface FilterButtonProps {
  label: string;
  isActive?: boolean;
}

interface CardButtonProps {
  label?: string;
}

interface ArrowButtonProps {
  icon: string;
  alt?: string;
  isActive?: boolean;
}

// Button Filter Kategori
export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive = false,
}) => {
  return (
    <button className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}>
      {label}
    </button>
  );
};

// Button di dalam Card
export const CardButton: React.FC<CardButtonProps> = ({
  label = "Beli Harga Anggota",
}) => {
  return (
    <button className={styles.cardBtn}>
      <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
      <span>{label}</span>
    </button>
  );
};

//Button Nav
export const ArrowButton: React.FC<ArrowButtonProps> = ({
  icon,
  alt = "Navigation Arrow",
  isActive = false,
}) => {
  return (
    <button
      className={`${styles.arrowBtn} ${isActive ? styles.arrowActive : ""}`}
    >
      <img src={icon} alt={alt} className={styles.arrowIcon} />
    </button>
  );
};

import React from "react";
import { FilterButton, ArrowButton } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import bagIcon from "../../assets/icons/bag.svg";
import leftIcon from "../../assets/icons/left.svg";
import rightIcon from "../../assets/icons/right.svg";
import arrowIcon from "../../assets/icons/arrow.svg";
import daunIcon from "../../assets/icons/daun.svg";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";

import styles from "./Product.module.css";
export const Product: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* header */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerLeft}>
            <p className={styles.subtitleTop}>
              <img src={bagIcon} alt="Bag Icon" className={styles.bagIcon} />
              <span>PASAR KOMUNITAS ANGGOTA KOPERASI</span>
            </p>
            <h1 className={styles.title}>Produk Unggulan Komunitas Anggota</h1>
            <p className={styles.description}>
              Dukung ekonomi lokal dan nikmati harga khusus anggota koperasi
              hingga <strong className={styles.highlight}>diskon 20%</strong>!
            </p>
          </div>

          <div className={styles.arrowGroup}>
            <ArrowButton icon={leftIcon} alt="Previous" />
            <ArrowButton icon={rightIcon} alt="Next" isActive={true} />
          </div>
        </div>

        <div className={styles.categories}>
          <FilterButton label="Semua Produk" isActive={true} />
          <FilterButton label="Kuliner & Kopi" />
          <FilterButton label="Kriya & Batik" />
          <FilterButton label="Pertanian Organik" />
          <FilterButton label="Fashion Muslim" />
        </div>
      </header>

      {/* card */}
      <div className={styles.grid}>
        <Card
          image={image1}
          badgeText="Diskon 20% Anggota"
          badgeVariant="brown"
          topRightIcon={daunIcon}
          location="Aceh Tengah"
          rating="4.9"
          reviewCount={340}
          title="Kopi Arabika Gayo Organik..."
          seller="UMKM Berkah Kopi Mandiri"
          currentPrice="Rp 68.000"
          originalPrice="Rp 85.000"
        />

        <Card
          image={image2}
          badgeText="Produk Terbaik"
          badgeVariant="green"
          location="Pekalongan"
          rating="5.0"
          reviewCount={128}
          title="Kain Batik Tulis Motif Truntum"
          seller="Sanggar Batik Lestari"
          currentPrice="Rp 380.000"
          originalPrice="Rp 450.000"
        />

        <Card
          image={image3}
          badgeText="Paling Laris"
          badgeVariant="orange"
          location="Flores, NTT"
          rating="4.8"
          reviewCount={512}
          title="Madu Hutan Liar Murni Flores"
          seller="Koperasi Tani Hutan Bersama"
          currentPrice="Rp 115.000"
          originalPrice="Rp 140.000"
        />

        <Card
          image={image4}
          badgeText="Siap Kirim"
          badgeVariant="blue"
          location="Malang, Jatim"
          rating="4.9"
          reviewCount={890}
          title="Keripik Tempe Renyah Oven..."
          seller="UMKM Dapur Barokah"
          currentPrice="Rp 52.000"
          originalPrice="Rp 65.000"
        />
      </div>

      {/* footer */}
      <footer className={styles.footer}>
        <a href="#etalase" className={styles.footerLink}>
          <span>Jelajahi 1.200+ Produk Anggota di Etalase Komunitas</span>
          <img
            src={arrowIcon}
            alt="Arrow Right"
            className={styles.footerArrow}
          />
        </a>
      </footer>
    </section>
  );
};

"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./hamburger.module.css";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className={styles.hamburger}>
        <nav className={styles.desktopMenu}>
          <Link href="/formations">Nos formations</Link>
          <Link href="/generateur-cv">Créateur de CV</Link>
          <Link href="/qui-sommes-nous">Qui sommes nous ?</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className={`${styles.burger} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* 🌫️ OVERLAY */}
      <div
        className={`${styles.overlay} ${open ? styles.showOverlay : ""}`}
        onClick={closeMenu}
      />

      {/* 📱 MENU MOBILE */}
      <nav className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        <Link href="/formations" onClick={closeMenu}>Nos formations</Link>
        <Link href="/generateur-cv" onClick={closeMenu}>Créateur de CV</Link>
        <Link href="/about" onClick={closeMenu}>Qui sommes nous ?</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>       
      </nav>
    </>
  );
}
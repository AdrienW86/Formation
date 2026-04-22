import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.glow}></div>

      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo2.png"
              alt="Formise logo"
              width={160}
              height={160}
              priority
            />
          </Link>

          <p className={styles.tagline}>
            Formation digitale & accompagnement business
          </p>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/></svg>
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className={styles.column}>
          <h4>Navigation</h4>
          <Link href="/">Accueil</Link>
          <Link href="/formations">Formations</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* RIGHT */}
        <div className={styles.column}>
          <h4>Contact</h4>
          <p>contact@formise.fr</p>
          <p>France</p>

          <Link href="/contact" className={styles.cta}>
            Réserver un appel
          </Link>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Formise</p>
      </div>

    </footer>
  )
}
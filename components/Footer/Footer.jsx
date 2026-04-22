import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo2.png"
              alt="Formise logo"
              width={160}
              height={60}
              priority
            />
          </Link>

          <p className={styles.tagline}>
            Formation digitale & accompagnement business
          </p>

          <div className={styles.socials}>

            {/* Instagram */}
            <a href="#" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8 18V10H5V18H8M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5A1.5 1.5 0 0 0 6.5 8.5M18 18V13C18 11.5 17 10 15 10C13.5 10 13 11 13 11V10H10V18H13V14C13 13 13.5 12 14.5 12C15.5 12 16 13 16 14V18H18Z"/>
              </svg>
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
        <p>© {new Date().getFullYear()} Formise. Tous droits réservés.</p>
      </div>

    </footer>
  )
}
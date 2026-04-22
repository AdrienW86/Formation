import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
    </footer>
  )
}

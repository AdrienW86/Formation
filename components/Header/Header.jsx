import Image from "next/image"
import Hamburger from "../Hamburger/Hamburger"
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Formise logo"
          width={200}
          height={200}
          priority
        />
        <div className={styles.container}>
            <p className={styles.p}> en partenariat avec </p>
            <Image 
                src="/france-travail.svg" 
                className={styles.franceTravail}
                alt="menu" width={180} height={180} 
            />
        </div>
        <Hamburger />
    </header>
  )
}
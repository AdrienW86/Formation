import Image from "next/image";
import Link from "next/link";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Formatiz logo"
            width={340}
            height={190}
            priority
          />
        </Link>
      </div>
      <div className={styles.center}>
        <p className={styles.p}>En partenariat avec</p>
        <Image
  src="/france-travail.svg"
  className={styles.franceTravail}
  alt="France Travail"
  width={140}
  height={50}
  style={{ width: 'auto', height: 'auto' }} // Et ici aussi
/>
      </div>
      <div className={styles.right}>
        <Hamburger />
      </div>
    </header>
  );
}
import Image from 'next/image'
import styles from './background.module.css'

export default function Background() {
  return (
    <div className={styles.intro}>

      {/* Mobile */}
      <Image
        src="/background-mobile.png"
        alt="Formation digitale Formise mobile"
        fill
        priority
        sizes="100vw"
        className={`${styles.bannerImage} ${styles.mobile}`}
      />

      {/* Desktop */}
      <Image
        src="/background-desktop.png"
        alt="Formation digitale Formise desktop"
        fill
        priority
        sizes="100vw"
        className={`${styles.bannerImage} ${styles.desktop}`}
      />

      <div className={styles.overlay}></div>

    </div>
  )
}
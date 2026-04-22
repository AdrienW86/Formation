import Image from 'next/image'
import styles from './background.module.css'

export default function Background(props) {
  return (
    <div className={styles.intro}>

      {/* Mobile */}
      <Image
        src="/background-formation.png"
        alt="Formation digitale Formise mobile"
        fill
        priority
        sizes="100vw"
        className={`${styles.bannerImage} ${styles.mobile}`}
      />
      <div className={styles.txt}>
        <h1> Trouvez la <span className={styles.span}>formation <br/></span> qui fera décoller votre activité</h1>
        <p className={styles.p}> 
            Des formations adaptés à votre projet. <br></br>
            Des outils pour les entrepreneurs et les demandeurs d'emploi.
        </p>
      </div>
      {/* Desktop */}
      <Image
        src="/background-formation.png"
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
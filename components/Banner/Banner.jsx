import Image from "next/image";
import styles from './banner.module.css'

export default function Banner() {
  return (
    <div className={styles.intro}>
        <Image
            src="/banner.png"
            alt="Formation digitale Formise"
            fill
            priority
            className={styles.bannerImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.content}>
            <h1>Gagnez du temps et développez votre activité grâce à l’IA.</h1>
            <p>
                Automatisez vos tâches, optimisez votre organisation et utilisez les
                meilleurs outils digitaux pour faire évoluer votre{" "}
                <a href="#entreprise">entreprise</a> ou booster votre{" "}
                <a href="#emploi">recherche d’emploi</a>.
            </p>
        </div>
        <button className={styles.btn}> Financement avec France Travail </button>
    </div>
  )
}
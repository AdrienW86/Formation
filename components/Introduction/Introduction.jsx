import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./introduction.module.css";

export default function Introduction() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <span className={styles.badge}>Financement possible</span>

        <Subtitle title="Profitez d’un financement gratuit grâce à France Travail" />

        <p className={styles.description}>
          Formez-vous sereinement grâce aux dispositifs d’aide disponibles et
          développez des compétences utiles pour accélérer votre avenir
          professionnel.
        </p>
      </div>

      <div className={styles.content}>
        {/* LEFT */}
        <div className={styles.left}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>
              Des formations concrètes et professionnalisantes
            </h3>

            <p className={styles.cardText}>
              Découvrez des parcours pensés pour développer des compétences
              immédiatement applicables dans des domaines porteurs :
              emploi, entrepreneuriat, digitalisation et intelligence
              artificielle.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>
              Sans avancer de frais selon votre situation
            </h3>

            <p className={styles.cardText}>
              Grâce au <strong>CPF</strong> ou à un accompagnement via
              <strong> France Travail</strong>, vous pouvez accéder à certaines
              formations avec une prise en charge totale ou partielle selon
              votre éligibilité.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>
              Un accompagnement personnalisé
            </h3>

            <p className={styles.cardText}>
              Nos équipes vous orientent dans vos démarches administratives et
              vous aident à mobiliser les bons dispositifs de financement pour
              simplifier votre entrée en formation.
            </p>
          </article>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Vous êtes concerné si vous êtes :</h3>

            <ul className={styles.list}>
              <li>✔ En recherche d’emploi</li>
              <li>✔ En reconversion professionnelle</li>
              <li>✔ Salarié souhaitant évoluer</li>
              <li>✔ Futur entrepreneur</li>
              <li>✔ Porteur de projet</li>
            </ul>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Notre objectif</h3>

            <p className={styles.boxText}>
              Vous permettre de vous former rapidement, efficacement et dans les
              meilleures conditions financières.
            </p>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Besoin d’aide ?</h3>

            <p className={styles.boxText}>
              Nous pouvons vous guider pour activer vos droits CPF ou étudier
              les solutions de financement disponibles selon votre profil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
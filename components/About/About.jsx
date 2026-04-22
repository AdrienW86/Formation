import React from "react";
import Link from "next/link";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./about.module.css";

export default function AboutCompany() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <span className={styles.badge}>Qui sommes-nous ?</span>

        <Subtitle title="Un partenaire engagé pour votre réussite professionnelle" />

        <p className={styles.description}>
          Nous accompagnons les particuliers, demandeurs d’emploi,
          entrepreneurs et entreprises dans leur évolution grâce à des
          formations concrètes, modernes et orientées résultats.
        </p>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* LEFT */}
        <div className={styles.left}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Notre mission</h3>

            <p className={styles.cardText}>
              Rendre la montée en compétences accessible à tous en proposant
              des formations utiles, professionnalisantes et adaptées aux
              réalités du marché actuel.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Notre expertise</h3>

            <p className={styles.cardText}>
              Nous intervenons sur des thématiques stratégiques :
              intelligence artificielle, retour à l’emploi,
              digitalisation d’activité, visibilité en ligne,
              productivité et développement commercial.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Une approche orientée résultats</h3>

            <p className={styles.cardText}>
              Chaque programme est pensé pour apporter des compétences
              directement applicables : outils concrets, méthodes efficaces,
              accompagnement humain et progression mesurable.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Des solutions modernes</h3>

            <p className={styles.cardText}>
              Nous intégrons les meilleurs usages du numérique et de l’IA
              afin d’aider nos apprenants à gagner du temps, augmenter leur
              impact et rester compétitifs.
            </p>
          </article>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Pourquoi nous choisir ?</h3>

            <ul className={styles.list}>
              <li>✔ Programmes concrets et actuels</li>
              <li>✔ Formations orientées terrain</li>
              <li>✔ Accompagnement personnalisé</li>
              <li>✔ Outils modernes et IA</li>
              <li>✔ Vision business & emploi</li>
            </ul>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Notre engagement</h3>

            <p className={styles.boxText}>
              Vous transmettre des compétences réellement utiles,
              valorisables rapidement et capables de générer des résultats
              durables.
            </p>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Notre différence</h3>

            <p className={styles.boxText}>
              Nous ne proposons pas de théorie inutile : nous créons des
              parcours pragmatiques, efficaces et adaptés à votre objectif.
            </p>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>Passez à l’action</h3>

            <p className={styles.ctaText}>
              Rejoignez une structure tournée vers l’avenir et développez
              les compétences qui feront la différence demain.
            </p>

            <Link href='/formations' className={styles.primaryBtn}>
              Découvrir nos formations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./introduction.module.css";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <Subtitle title = "Profitez d'un financement gratuit grâce à France Travail" />

      <div className={styles.text}>
        <p className={styles.p}>
          Découvrez nos formations professionnelles conçues pour vous permettre
          de développer des compétences concrètes et immédiatement
          opérationnelles dans des secteurs porteurs.
        </p>

        <p className={styles.p}>
          Grâce aux dispositifs de financement tels que le <strong>CPF</strong>{" "}
          ou l’accompagnement de <strong>France Travail</strong>, vous pouvez
          accéder à nos formations <strong>sans avancer de frais</strong>,
          selon votre éligibilité.
        </p>

        <p className={styles.p}>
          Que vous soyez en reconversion professionnelle, en recherche d’emploi
          ou simplement en quête de nouvelles opportunités, nos parcours de
          formation vous permettent de vous former efficacement tout en étant
          accompagné dans vos démarches de financement.
        </p>

        <p className={styles.p}>
          Nos équipes vous guident à chaque étape afin de vous aider à
          <strong> activer vos droits CPF</strong> ou à bénéficier d’une prise
          en charge complète via les dispositifs publics.
        </p>
      </div>
    </section>
  );
}
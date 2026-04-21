import React from "react";
import Link from "next/link";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./formation.module.css";

export default function Formation() {
  return (
    <section className={styles.container}>
      <Subtitle title="Choisissez la formation qui fera décoller votre projet professionnel" />

      <div className={styles.grid}>
        {/* CARD 1 */}
        <Link href="/formations/recherche-emploi" className={styles.card}>
          <h3>🚀 Booster sa recherche d’emploi</h3>
          <p>
            Grâce à l’IA et à nos outils professionnels, maximisez vos chances
            de décrocher un emploi rapidement. Création de CV optimisés,
            lettres de motivation percutantes et automatisation de votre
            recherche d’emploi.
          </p>
        </Link>

        {/* CARD 2 */}
        <Link href="/formations/auto-entrepreneur" className={styles.card}>
          <h3>🧱 Créer son entreprise</h3>
          <p>
            De l’idée à la création : choisissez votre statut, mettez en place
            les bons outils selon votre activité, créez votre fiche Google My
            Business et apprenez à trouver vos premiers clients efficacement.
          </p>
        </Link>

        {/* CARD 3 */}
        <Link href="/formations/entrepreneur-avance" className={styles.card}>
          <h3>📈 Booster son entreprise</h3>
          <p>
            Optimisez votre chiffre d’affaires grâce à l’IA et à nos outils
            avancés. Automatisation des tâches, prospection client, gestion de
            portefeuille et gain de temps pour scaler votre activité.
          </p>
        </Link>
      </div>
    </section>
  );
}
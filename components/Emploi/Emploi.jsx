import styles from "./emploi.module.css";

export default function JobTraining() {
  const modules = [
    {
      title: "Booster sa recherche avec l’IA",
      text: "Apprenez à utiliser les outils d’intelligence artificielle pour gagner du temps, cibler les bonnes offres et améliorer vos candidatures.",
    },
    {
      title: "Créer un CV professionnel",
      text: "Accédez gratuitement à notre éditeur de CV en ligne pour créer un CV moderne, clair et attractif en quelques minutes.",
    },
    {
      title: "Lettre de motivation efficace",
      text: "Découvrez les bonnes pratiques pour rédiger des lettres de motivation percutantes, personnalisées et adaptées aux recruteurs.",
    },
    {
      title: "Optimiser ses candidatures",
      text: "Méthodes concrètes pour envoyer plus de candidatures qualifiées, suivre ses relances et augmenter ses entretiens.",
    },
    {
      title: "Préparer ses entretiens",
      text: "Conseils pratiques, simulations et questions fréquentes pour arriver confiant face aux recruteurs.",
    },
    {
      title: "Développer sa présence en ligne",
      text: "Valorisez votre profil sur LinkedIn et les plateformes professionnelles pour attirer les opportunités.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <span className={styles.badge}>Formation Retour à l’Emploi</span>

        <h1 className={styles.title}>
          Trouvez un emploi plus rapidement grâce à l’IA
        </h1>

        <p className={styles.description}>
          Une formation pensée pour les demandeurs d’emploi souhaitant
          moderniser leur recherche, améliorer leurs candidatures et utiliser
          les bons outils pour décrocher davantage d’entretiens.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>
            Demander des informations
          </button>

          <button className={styles.secondaryBtn}>
            Voir le programme
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.subtitle}>Ce que vous allez apprendre</h2>

          <div className={styles.grid}>
            {modules.map((item, index) => (
              <article key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Inclus dans la formation</h3>

            <ul className={styles.list}>
              <li>✔ Accès à l’éditeur de CV premium</li>
              <li>✔ Modèles de lettres de motivation</li>
              <li>✔ Outils IA sélectionnés pour l’emploi</li>
              <li>✔ Conseils personnalisés</li>
              <li>✔ Méthodes de candidature modernes</li>
            </ul>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Financement possible</h3>

            <p className={styles.boxText}>
              Selon votre situation, cette formation peut être prise en charge
              via CPF ou dispositifs d’aide à l’emploi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
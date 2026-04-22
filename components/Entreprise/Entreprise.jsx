import styles from "./entreprise.module.css";

export default function EntrepreneurTraining() {
  const modules = [
    {
      title: "Automatiser son activité avec l’IA",
      text: "Découvrez comment utiliser l’intelligence artificielle pour gagner du temps sur les tâches répétitives : emails, relances clients, organisation et création de contenus.",
    },
    {
      title: "Booster son chiffre d’affaires",
      text: "Mettez en place des stratégies simples pour attirer plus de prospects, convertir davantage et fidéliser votre clientèle.",
    },
    {
      title: "Présence en ligne professionnelle",
      text: "Créez une image de marque crédible grâce à un site internet efficace, des réseaux sociaux cohérents et une communication moderne.",
    },
    {
      title: "Optimisation Google Business Profile",
      text: "Apprenez à rendre votre fiche Google plus visible localement, obtenir des avis clients et générer des appels réguliers.",
    },
    {
      title: "Gestion clients & devis",
      text: "Accédez à des outils pour suivre vos prospects, gérer vos clients, envoyer des devis professionnels et relancer facilement.",
    },
    {
      title: "Bases administratives & URSSAF",
      text: "Comprenez les obligations essentielles de l’auto-entrepreneur : déclarations, facturation, organisation et bonnes pratiques.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <span className={styles.badge}>Formation Auto-Entrepreneur</span>

        <h1 className={styles.title}>
          Développez votre activité grâce à l’IA et aux bons outils
        </h1>

        <p className={styles.description}>
          Une formation complète pour les auto-entrepreneurs souhaitant gagner
          du temps, trouver plus de clients, structurer leur activité et
          augmenter leur chiffre d’affaires avec des méthodes modernes.
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
        {/* LEFT */}
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

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Inclus dans la formation</h3>

            <ul className={styles.list}>
              <li>✔ Logiciel de gestion client</li>
              <li>✔ Éditeur de devis & factures</li>
              <li>✔ Outils IA recommandés</li>
              <li>✔ Méthodes d’acquisition clients</li>
              <li>✔ Conseils réseaux sociaux</li>
              <li>✔ Optimisation Google locale</li>
            </ul>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Idéal pour</h3>

            <p className={styles.boxText}>
              Artisans, indépendants, freelances, commerçants, prestataires de
              services ou toute personne lançant son activité.
            </p>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Objectif final</h3>

            <p className={styles.boxText}>
              Repartir avec une activité mieux organisée, plus visible et prête
              à se développer durablement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
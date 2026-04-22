import styles from "./creation.module.css";

export default function BusinessCreation() {
  const modules = [
    {
      title: "Choisir le bon statut juridique",
      text: "Comprenez les différences entre micro-entreprise, SASU, EURL et autres formes pour choisir la structure adaptée à votre projet.",
    },
    {
      title: "Créer son entreprise simplement",
      text: "Découvrez les étapes concrètes pour immatriculer votre activité, obtenir vos documents et démarrer rapidement.",
    },
    {
      title: "Trouver ses premiers clients",
      text: "Mettez en place une stratégie simple pour signer vos premières ventes grâce au bouche-à-oreille, digital et prospection ciblée.",
    },
    {
      title: "Créer une image professionnelle",
      text: "Nom, logo, identité visuelle, site internet, réseaux sociaux : inspirez confiance dès le lancement.",
    },
    {
      title: "Gérer devis, factures et obligations",
      text: "Apprenez les bases indispensables pour facturer correctement, suivre vos paiements et rester organisé.",
    },
    {
      title: "Utiliser l’IA pour aller plus vite",
      text: "Automatisez certaines tâches : emails, devis, communication, contenus marketing et organisation quotidienne.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <span className={styles.badge}>Formation Création d’Entreprise</span>

        <h1 className={styles.title}>
          Lancez votre entreprise avec méthode et confiance
        </h1>

        <p className={styles.description}>
          Une formation pensée pour celles et ceux qui veulent créer leur
          entreprise, éviter les erreurs de départ et développer une activité
          solide avec les bons outils modernes.
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
              <li>✔ Check-list création d’entreprise</li>
              <li>✔ Outils devis & facturation</li>
              <li>✔ Méthodes pour trouver ses premiers clients</li>
              <li>✔ Conseils image de marque</li>
              <li>✔ Outils IA recommandés</li>
              <li>✔ Ressources pratiques de lancement</li>
            </ul>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Idéal pour</h3>

            <p className={styles.boxText}>
              Futurs entrepreneurs, freelances, porteurs de projet, salariés en
              reconversion ou toute personne souhaitant lancer son activité.
            </p>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.boxTitle}>Objectif final</h3>

            <p className={styles.boxText}>
              Repartir avec un projet structuré, une stratégie claire et les
              bases solides pour démarrer rapidement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

// Composant de Badge pour les Skills
const Badge = ({ children }) => (
  <span style={styles.badge}>{children}</span>
);

// Composant de Section pour la colonne de gauche
const SidebarSection = ({ title, children }) => (
  <div style={styles.sidebarSection}>
    <h3 style={styles.sidebarTitle}>{title}</h3>
    <div style={styles.sidebarContent}>{children}</div>
  </div>
);

export default function ModernPreview({ form = {} }) {
  const fallback = {
    prenom: "Alexandre",
    nom: "Martin",
    poste: "Développeur Front-End React",
    naissance: "12/03/1998",
    telephone: "06 12 34 56 78",
    email: "alex.martin@email.com",
    adresse: "12 rue des Lilas",
    codePostal: "34000",
    ville: "Montpellier",
    bio: "Développeur front-end passionné par la création d’interfaces modernes, performantes et accessibles. Expérience en React, Next.js et design UI/UX. Autonome et orienté résultats.",
    softSkills: ["Esprit d’équipe", "Communication", "Adaptabilité", "Gestion du stress"],
    hardSkills: ["React / Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js"],
    langues: ["Français (Maternel)", "Anglais (B2)"],
    permis: ["Permis B"],
    diplomes: [
      { titre: "Bachelor Développement Web", ecole: "Ecole Informatique Montpellier", annee: "2021" },
    ],
    experiences: [
      { id: 1, poste: "Développeur Front-End", entreprise: "Digital Studio Agency", start: "2022", end: "2024", desc: "Conception d'interfaces complexes et optimisation des performances." },
      { id: 2, poste: "Intégrateur Web", entreprise: "Freelance", start: "2021", end: "2022", desc: "Création de sites vitrines responsives." },
    ],
  };

  const data = {
    ...fallback,
    ...form,
    experiences: form.experiences?.length ? form.experiences : fallback.experiences,
    langues: form.langues?.length ? form.langues : fallback.langues,
    permis: form.permis?.length ? form.permis : fallback.permis,
    hardSkills: form.hardSkills?.length ? form.hardSkills : fallback.hardSkills,
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.a4}>
        
        {/* ================= SIDEBAR (LEFT) ================= */}
        <div style={styles.left}>
          <div style={styles.photoContainer}>
            {form.photo ? (
              <img src={form.photo} alt="Profile" style={styles.photo} />
            ) : (
              <div style={styles.photoPlaceholder}>
                <span style={{ fontSize: 24 }}>{data.prenom[0]}</span>
              </div>
            )}
          </div>

          <SidebarSection title="CONTACT">
            <p style={styles.contactItem}>📞 {data.telephone}</p>
            <p style={styles.contactItem}>✉️ {data.email}</p>
            <p style={styles.contactItem}>📍 {data.adresse}, {data.codePostal} {data.ville}</p>
            <p style={styles.contactItem}>🎂 {data.naissance}</p>
          </SidebarSection>

          <SidebarSection title="LANGUES">
            {data.langues.map((l, i) => (
              <p key={i} style={styles.contactItem}>{l}</p>
            ))}
          </SidebarSection>

          <SidebarSection title="PERMIS">
            {data.permis.map((p, i) => (
              <p key={i} style={styles.contactItem}>{p}</p>
            ))}
          </SidebarSection>
        </div>

        {/* ================= MAIN CONTENT (RIGHT) ================= */}
        <div style={styles.right}>
          {/* HEADER */}
          <header style={styles.header}>
            <h1 style={styles.name}>
              {data.prenom.toUpperCase()} <span style={{ color: '#2563eb' }}>{data.nom.toUpperCase()}</span>
            </h1>
            <p style={styles.mainPoste}>{data.poste}</p>
            <div style={styles.separator}></div>
          </header>

          {/* PROFIL */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Profil Personnel</h2>
            <p style={styles.bioText}>{data.bio}</p>
          </section>

          {/* EXPERIENCES */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Expériences Professionnelles</h2>
            {data.experiences.map((exp) => (
              <div key={exp.id} style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.expHeader}>
                  <strong style={styles.expPoste}>{exp.poste}</strong>
                  <span style={styles.expDate}>{exp.start} — {exp.end}</span>
                </div>
                <p style={styles.expEntreprise}>{exp.entreprise}</p>
                {exp.desc && <p style={styles.expDesc}>{exp.desc}</p>}
              </div>
            ))}
          </section>

          {/* FORMATION */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Formation</h2>
            {data.diplomes.map((d, i) => (
              <div key={i} style={styles.educationItem}>
                <strong>{d.titre}</strong>
                <p style={styles.expEntreprise}>{d.ecole} | {d.annee}</p>
              </div>
            ))}
          </section>

          {/* SKILLS */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Compétences</h2>
            <div style={{ marginBottom: 15 }}>
              <h4 style={styles.subSkillTitle}>Expertises Techniques</h4>
              <div style={styles.badgeContainer}>
                {data.hardSkills.map((s, i) => <Badge key={i}>{s}</Badge>)}
              </div>
            </div>
            <div>
              <h4 style={styles.subSkillTitle}>Soft Skills</h4>
              <div style={styles.badgeContainer}>
                {data.softSkills.map((s, i) => <Badge key={i}>{s}</Badge>)}
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e2e8f0",
    padding: "40px 0",
  },
  a4: {
    width: "210mm",
    height: "297mm",
    background: "#fff",
    display: "flex",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    color: "#1e293b",
  },
  /* Left Column */
  left: {
    width: "32%",
    background: "#1e293b", // Slate 800 (plus moderne que le bleu pur)
    color: "#f8fafc",
    padding: "40px 25px",
    display: "flex",
    flexDirection: "column",
  },
  photoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: "20%", // Carré arrondi pour un look moderne
    border: "4px solid rgba(255,255,255,0.1)",
    objectFit: "cover",
  },
  photoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: "20%",
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed rgba(255,255,255,0.3)",
  },
  sidebarSection: {
    marginBottom: 30,
  },
  sidebarTitle: {
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "1.5px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    paddingBottom: 8,
    marginBottom: 15,
    color: "#94a3b8",
  },
  sidebarContent: {
    fontSize: 12,
    lineHeight: 1.6,
  },
  contactItem: {
    marginBottom: 8,
    opacity: 0.9,
  },
  /* Right Column */
  right: {
    width: "68%",
    padding: "50px 45px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    marginBottom: 35,
  },
  name: {
    fontSize: 32,
    fontWeight: 900,
    margin: 0,
    color: "#0f172a",
    letterSpacing: "-0.5px",
  },
  mainPoste: {
    fontSize: 18,
    color: "#64748b",
    marginTop: 5,
    fontWeight: 500,
  },
  separator: {
    width: 60,
    height: 4,
    background: "#2563eb",
    marginTop: 15,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#1e293b",
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
  },
  bioText: {
    fontSize: 13,
    lineHeight: 1.6,
    color: "#475569",
    textAlign: "justify",
  },
  /* Timeline Style for Exp */
  timelineItem: {
    position: "relative",
    paddingLeft: 20,
    borderLeft: "2px solid #e2e8f0",
    marginBottom: 20,
    paddingBottom: 5,
  },
  timelineDot: {
    position: "absolute",
    left: -6,
    top: 5,
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#2563eb",
  },
  expHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  expPoste: {
    fontSize: 14,
    color: "#0f172a",
  },
  expDate: {
    fontSize: 11,
    fontWeight: 600,
    color: "#2563eb",
    background: "#eff6ff",
    padding: "2px 8px",
    borderRadius: 10,
  },
  expEntreprise: {
    fontSize: 13,
    color: "#64748b",
    margin: "2px 0",
  },
  expDesc: {
    fontSize: 12,
    color: "#475569",
    marginTop: 5,
  },
  educationItem: {
    marginBottom: 15,
  },
  /* Skills Badges */
  subSkillTitle: {
    fontSize: 12,
    color: "#94a3b8",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  badgeContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  badge: {
    background: "#f1f5f9",
    color: "#334155",
    padding: "5px 12px",
    borderRadius: "6px",
    fontSize: 11,
    fontWeight: 600,
    border: "1px solid #e2e8f0",
  },
};
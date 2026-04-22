import React from 'react';

// Composant de Badge stylisé
const Badge = ({ children, variant = "default" }) => {
  const badgeStyle = variant === "primary" 
    ? { ...styles.badge, background: "#2563eb", color: "#fff", border: "none" }
    : styles.badge;
  return <span style={badgeStyle}>{children}</span>;
};

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
    adresse: "12 rue des Lilas, 34000 Montpellier",
    linkedin: "linkedin.com/in/alexmartin",
    bio: "Développeur front-end passionné par la création d’interfaces modernes, performantes et accessibles. Expérience en React, Next.js et design UI/UX. Autonome et orienté résultats.",
    softSkills: ["Esprit d’équipe", "Communication", "Adaptabilité"],
    hardSkills: ["React / Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "Figma"],
    langues: ["Français (Maternel)", "Anglais (B2)", "Espagnol (A2)"],
    hobbies: ["Photographie", "Randonnée", "Échecs"],
    permis: ["Permis B"],
    diplomes: [
      { titre: "Bachelor Développement Web", ecole: "Ecole Informatique Montpellier", annee: "2021" },
    ],
    experiences: [
      { id: 1, poste: "Développeur Front-End", entreprise: "Digital Studio Agency", start: "2022", end: "Présent", desc: "Conception d'interfaces complexes et optimisation des performances Core Web Vitals." },
      { id: 2, poste: "Intégrateur Web", entreprise: "Freelance", start: "2021", end: "2022", desc: "Création de sites vitrines responsives et accessibles (WCAG)." },
    ],
    projets: [
      { nom: "E-commerce App", desc: "App fullstack avec Next.js 14 et Stripe." }
    ]
  };

  const data = { ...fallback, ...form };

  return (
    <div style={styles.wrapper}>
      <div style={styles.a4}>
        
        {/* ================= SIDEBAR ================= */}
        <div style={styles.left}>
          <div style={styles.photoContainer}>
            {data.photo ? (
              <img src={data.photo} alt="Profile" style={styles.photo} />
            ) : (
              <div style={styles.photoPlaceholder}>
                <span style={{ fontSize: 32, fontWeight: 800, color: '#64748b' }}>{data.prenom[0]}</span>
              </div>
            )}
          </div>

          <SidebarSection title="CONTACT">
            <div style={styles.contactItem}>
                <div style={styles.iconBox}>📱</div>
                <div>{data.telephone}</div>
            </div>
            <div style={styles.contactItem}>
                <div style={styles.iconBox}>✉️</div>
                <div style={{ wordBreak: 'break-all' }}>{data.email}</div>
            </div>
            <div style={styles.contactItem}>
                <div style={styles.iconBox}>📍</div>
                <div>{data.adresse}</div>
            </div>
            {data.linkedin && (
                <div style={styles.contactItem}>
                    <div style={styles.iconBox}>🔗</div>
                    <div>{data.linkedin}</div>
                </div>
            )}
          </SidebarSection>

          <SidebarSection title="LANGUES">
            {data.langues.map((l, i) => (
              <div key={i} style={styles.skillRow}>
                <span>{l}</span>
                <div style={styles.dotBuffer}></div>
              </div>
            ))}
          </SidebarSection>

          <SidebarSection title="LOISIRS">
            <div style={styles.hobbiesGrid}>
                {data.hobbies.map((h, i) => (
                    <span key={i} style={styles.hobbyTag}>{h}</span>
                ))}
            </div>
          </SidebarSection>

          <SidebarSection title="AUTRE">
             <p style={{ fontSize: 11, opacity: 0.8 }}>🚗 {data.permis.join(', ')}</p>
          </SidebarSection>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div style={styles.right}>
          <header style={styles.header}>
            <h1 style={styles.name}>
              {data.prenom} <span style={{ color: '#2563eb', fontWeight: 400 }}>{data.nom.toUpperCase()}</span>
            </h1>
            <p style={styles.mainPoste}>{data.poste}</p>
          </header>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Profil</h2>
            <p style={styles.bioText}>{data.bio}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Expériences</h2>
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

          <div style={styles.twoColumn}>
            <section style={{ ...styles.section, flex: 1 }}>
                <h2 style={styles.sectionTitle}>Formation</h2>
                {data.diplomes.map((d, i) => (
                <div key={i} style={styles.educationItem}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{d.titre}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{d.ecole} | {d.annee}</div>
                </div>
                ))}
            </section>

            <section style={{ ...styles.section, flex: 1 }}>
                <h2 style={styles.sectionTitle}>Projets</h2>
                {data.projets?.map((p, i) => (
                <div key={i} style={styles.educationItem}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{p.nom}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{p.desc}</div>
                </div>
                ))}
            </section>
          </div>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Compétences Techniques</h2>
            <div style={styles.badgeContainer}>
            {data.hardSkills.map((s, i) => <Badge key={i} variant="primary">{s}</Badge>)}
            </div>
            
            <h2 style={{ ...styles.sectionTitle, marginTop: 20 }}>Soft Skills</h2>
            <div style={styles.badgeContainer}>
            {data.softSkills.map((s, i) => <Badge key={i}>{s}</Badge>)}
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
    background: "#f1f5f9",
    padding: "40px 0",
  },
  a4: {
    width: "210mm",
    height: "297mm",
    background: "#fff",
    display: "flex",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    fontFamily: "'Inter', system-ui, sans-serif",
    color: "#334155",
    overflow: "hidden",
  },
  left: {
    width: "30%",
    background: "#f8fafc",
    borderRight: "1px solid #e2e8f0",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
  },
  photoContainer: {
    marginBottom: 30,
    alignSelf: 'center',
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: "30px",
    objectFit: "cover",
    border: "4px solid white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  photoPlaceholder: {
    width: 130,
    height: 130,
    borderRadius: "30px",
    background: "#e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sidebarSection: { marginBottom: 25 },
  sidebarTitle: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "1px",
    color: "#2563eb",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 11,
    marginBottom: 10,
    color: "#475569",
  },
  iconBox: {
    width: 24,
    height: 24,
    background: "#fff",
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
    border: "1px solid #e2e8f0",
  },
  right: {
    width: "70%",
    padding: "40px 50px",
    display: "flex",
    flexDirection: "column",
  },
  header: { marginBottom: 30 },
  name: {
    fontSize: 36,
    fontWeight: 800,
    margin: 0,
    color: "#0f172a",
    letterSpacing: "-1px",
  },
  mainPoste: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: 600,
    marginTop: 4,
  },
  section: { marginBottom: 25 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 12,
    paddingBottom: 4,
    borderBottom: "2px solid #f1f5f9",
  },
  bioText: { fontSize: 12.5, lineHeight: 1.6, color: "#475569" },
  timelineItem: {
    position: "relative",
    paddingLeft: 20,
    borderLeft: "1px solid #e2e8f0",
    marginBottom: 15,
  },
  timelineDot: {
    position: "absolute",
    left: -4,
    top: 6,
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#2563eb",
  },
  expHeader: { display: "flex", justifyContent: "space-between" },
  expPoste: { fontSize: 13, color: "#1e293b" },
  expDate: { fontSize: 10, fontWeight: 700, color: "#64748b" },
  expEntreprise: { fontSize: 12, color: "#2563eb", fontWeight: 500, margin: "2px 0" },
  expDesc: { fontSize: 11, color: "#64748b", marginTop: 4 },
  twoColumn: { display: 'flex', gap: 20 },
  badgeContainer: { display: "flex", flexWrap: "wrap", gap: 6 },
  badge: {
    background: "#f8fafc",
    color: "#475569",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: 10,
    fontWeight: 600,
    border: "1px solid #e2e8f0",
  },
  hobbiesGrid: { display: 'flex', flexWrap: 'wrap', gap: 5 },
  hobbyTag: {
    fontSize: 10,
    background: "#fff",
    padding: "3px 8px",
    borderRadius: 4,
    border: "1px solid #e2e8f0",
    color: "#64748b"
  }
};
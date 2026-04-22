import React from 'react';

const SectionTitle = ({ children }) => (
  <h2 style={styles.sectionTitle}>{children}</h2>
);

export default function CorporateExecutivePreview({ form = {} }) {
  const fallback = {
    prenom: "Jean-Baptiste",
    nom: "De La Roche",
    poste: "Directeur de la Stratégie & Développement",
    telephone: "+33 1 45 67 89 00",
    email: "jb.delaroche@executive-mail.com",
    adresse: "Avenue Montaigne, 75008 Paris",
    linkedin: "linkedin.com/in/jdelaroche",
    bio: "Leader stratégique avec 15 ans d'expérience dans l'accompagnement de la croissance des entreprises du CAC 40. Expert en fusion-acquisition et restructuration d'organisations complexes. Orienté culture du résultat et excellence opérationnelle.",
    hardSkills: ["Stratégie d'Entreprise", "Gouvernance IT", "M&A", "Risk Management", "Compliance", "Public Speaking"],
    softSkills: ["Leadership", "Négociation", "Intelligence Émotionnelle", "Vision Stratégique"],
    langues: ["Français (Natif)", "Anglais (Bilingue C2)", "Mandarin (Notions)"],
    hobbies: ["Équitation (Saut d'obstacles)", "Philanthropie", "Opéra"],
    diplomes: [
      { titre: "MBA - Global Management", ecole: "INSEAD Business School", annee: "2012" },
      { titre: "Master Grande École", ecole: "HEC Paris", annee: "2008" },
    ],
    experiences: [
      { id: 1, poste: "Senior Director Strategy", entreprise: "Capital Global Group", start: "2018", end: "Présent", desc: "Pilotage de la stratégie internationale sur 12 pays. Croissance du CA de +40% en 3 ans. Management d'un board de 8 directeurs régionaux." },
      { id: 2, poste: "Associate Partner", entreprise: "McKinsey & Company", start: "2013", end: "2018", desc: "Conseil en transformation digitale pour des institutions financières. Direction de missions d'audit et de due diligence." },
      { id: 3, poste: "Consultant Senior", entreprise: "Boston Consulting Group (BCG)", start: "2009", end: "2013", desc: "Analyse de marché et optimisation de la supply chain pour le secteur du luxe." },
    ],
  };

  const data = { ...fallback, ...form };

  return (
    <div style={styles.wrapper}>
      <div style={styles.a4}>
        
        {/* BARRE DÉCORATIVE SUPÉRIEURE */}
        <div style={styles.topBar}></div>

        <header style={styles.header}>
          <div style={styles.headerInfo}>
            <h1 style={styles.name}>
              {data.prenom} <span style={{ fontWeight: 800 }}>{data.nom.toUpperCase()}</span>
            </h1>
            <div style={styles.posteBadge}>{data.poste.toUpperCase()}</div>
            <div style={styles.contactGrid}>
              <span><strong>T.</strong> {data.telephone}</span>
              <span><strong>E.</strong> {data.email}</span>
              <span><strong>L.</strong> {data.linkedin}</span>
              <span><strong>A.</strong> {data.adresse}</span>
            </div>
          </div>
          
          <div style={styles.photoWrapper}>
            {data.photo ? (
              <img src={data.photo} alt="Portrait" style={styles.photo} />
            ) : (
              <div style={styles.photoPlaceholder}>PHOTO</div>
            )}
          </div>
        </header>

        <div style={styles.content}>
          {/* COLONNE GAUCHE (Plus large) */}
          <div style={styles.leftCol}>
            <section style={styles.section}>
              <SectionTitle>Profil Exécutif</SectionTitle>
              <p style={styles.bioText}>{data.bio}</p>
            </section>

            <section style={styles.section}>
              <SectionTitle>Parcours Professionnel</SectionTitle>
              {data.experiences.map((exp) => (
                <div key={exp.id} style={styles.expBlock}>
                  <div style={styles.expHeader}>
                    <span style={styles.expPoste}>{exp.poste}</span>
                    <span style={styles.expDate}>{exp.start} — {exp.end}</span>
                  </div>
                  <div style={styles.expEntreprise}>{exp.entreprise.toUpperCase()}</div>
                  <p style={styles.expDesc}>{exp.desc}</p>
                </div>
              ))}
            </section>

            <section style={styles.section}>
              <SectionTitle>Cursus Académique</SectionTitle>
              {data.diplomes.map((d, i) => (
                <div key={i} style={styles.eduBlock}>
                  <div style={styles.expHeader}>
                    <span style={styles.expPoste}>{d.titre}</span>
                    <span style={styles.expDate}>{d.annee}</span>
                  </div>
                  <div style={styles.expEntreprise}>{d.ecole}</div>
                </div>
              ))}
            </section>
          </div>

          {/* COLONNE DROITE (Expertise) */}
          <div style={styles.rightCol}>
            <section style={styles.sideSection}>
              <h3 style={styles.sideTitle}>Expertises Clés</h3>
              <ul style={styles.skillList}>
                {data.hardSkills.map((s, i) => <li key={i} style={styles.skillItem}>{s}</li>)}
              </ul>
            </section>

            <section style={styles.sideSection}>
              <h3 style={styles.sideTitle}>Soft Skills</h3>
              <ul style={styles.skillList}>
                {data.softSkills.map((s, i) => <li key={i} style={styles.skillItem}>{s}</li>)}
              </ul>
            </section>

            <section style={styles.sideSection}>
              <h3 style={styles.sideTitle}>Langues</h3>
              {data.langues.map((l, i) => (
                <div key={i} style={styles.sideText}>• {l}</div>
              ))}
            </section>

            <section style={styles.sideSection}>
              <h3 style={styles.sideTitle}>Centres d'Intérêt</h3>
              {data.hobbies.map((h, i) => (
                <div key={i} style={styles.sideText}>• {h}</div>
              ))}
            </section>
          </div>
        </div>

        <footer style={styles.footer}>
          <div style={styles.footerNote}>Document strictement confidentiel - {new Date().getFullYear()}</div>
        </footer>
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
    background: "#37474f", // Fond sombre pour faire ressortir le CV
    padding: "40px 0",
  },
  a4: {
    width: "210mm",
    height: "297mm",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
    fontFamily: "'Playfair Display', serif", // Si disponible, sinon Times
    color: "#1a1a1a",
    position: "relative",
  },
  topBar: {
    height: "12px",
    background: "linear-gradient(90deg, #1a237e 0%, #0d47a1 100%)",
  },
  header: {
    padding: "40px 50px 30px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e0e0e0",
  },
  headerInfo: { flex: 1 },
  name: {
    fontSize: "34px",
    fontWeight: "400",
    margin: 0,
    letterSpacing: "1px",
    color: "#0d47a1",
  },
  posteBadge: {
    display: "inline-block",
    padding: "4px 12px",
    background: "#f5f5f5",
    border: "1px solid #e0e0e0",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#455a64",
    margin: "10px 0",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5px",
    fontSize: "10px",
    color: "#757575",
    marginTop: "10px",
  },
  photoWrapper: {
    marginLeft: "30px",
  },
  photo: {
    width: "110px",
    height: "135px",
    objectFit: "cover",
    border: "1px solid #1a237e",
    padding: "5px",
    background: "#fff",
  },
  photoPlaceholder: {
    width: "110px",
    height: "135px",
    background: "#eceff1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "#b0bec5",
    border: "1px solid #cfd8dc",
  },
  content: {
    display: "flex",
    flex: 1,
    padding: "30px 50px",
    gap: "40px",
  },
  leftCol: { flex: 2.2 },
  rightCol: { 
    flex: 0.8, 
    borderLeft: "1px solid #f0f0f0", 
    paddingLeft: "30px" 
  },
  section: { marginBottom: "35px" },
  sectionTitle: {
    fontSize: "14px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#1a237e",
    borderBottom: "2px solid #1a237e",
    paddingBottom: "3px",
    marginBottom: "15px",
  },
  bioText: {
    fontSize: "12px",
    lineHeight: "1.7",
    color: "#333",
    textAlign: "justify",
  },
  expBlock: { marginBottom: "20px" },
  expHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  expPoste: { fontSize: "14px", fontWeight: "700", color: "#1a1a1a" },
  expDate: { fontSize: "11px", fontWeight: "600", color: "#0d47a1" },
  expEntreprise: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#78909c",
    margin: "3px 0",
  },
  expDesc: {
    fontSize: "11.5px",
    lineHeight: "1.5",
    color: "#546e7a",
    marginTop: "5px",
  },
  eduBlock: { marginBottom: "15px" },
  sideSection: { marginBottom: "30px" },
  sideTitle: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#1a237e",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  skillList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  skillItem: {
    fontSize: "11px",
    color: "#455a64",
    marginBottom: "6px",
    paddingLeft: "10px",
    borderLeft: "2px solid #cfd8dc",
  },
  sideText: { fontSize: "11px", color: "#546e7a", marginBottom: "4px" },
  footer: {
    padding: "20px 50px",
    borderTop: "1px solid #f0f0f0",
    textAlign: "center",
  },
  footerNote: {
    fontSize: "9px",
    color: "#b0bec5",
    textTransform: "uppercase",
    letterSpacing: "1px",
  }
};
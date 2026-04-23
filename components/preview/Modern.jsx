import React, { useState, useEffect, useRef } from 'react';

// Composant de Badge
const Badge = ({ children }) => (
  <span style={styles.badge}>{children}</span>
);

const SidebarSection = ({ title, children, titleColor }) => (
  <div style={styles.sidebarSection}>
    <h3 style={{ ...styles.sidebarTitle, color: titleColor }}>{title}</h3>
    <div style={styles.sidebarContent}>{children}</div>
  </div>
);

export default function ModernPreview({ form = {}, colors = {} }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Valeurs par défaut si l'objet colors n'est pas encore défini
  const theme = {
    background: colors.background || "#ffffff",
    sidebar: colors.sidebar || "#0f172a",
    textPrimary: colors.textPrimary || "#000000",
    textSecondary: colors.textSecondary || "#475569"
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        const cvWidth = 794; 
        if (parentWidth < cvWidth) {
          setScale(parentWidth / cvWidth - 0.02);
        } else {
          setScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    prenom: form.prenom || "Alexandre",
    nom: form.nom || "Martin",
    poste: form.poste || "Développeur Front-End Senior",
    naissance: form.naissance || "12/03/1995",
    telephone: form.telephone || "06 12 34 56 78",
    email: form.email || "alex.martin@email.com",
    adresse: form.adresse || "12 rue des Lilas",
    codePostal: form.codePostal || "34000",
    ville: form.ville || "Montpellier",
    bio: form.bio || "Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web performantes. Expert en écosystème React, j'accorde une importance capitale à l'expérience utilisateur.",
    
    softSkills: form.softSkills && form.softSkills.length > 0 ? form.softSkills : ["Esprit d’équipe", "Adaptabilité", "Résolution de problèmes"],
    hardSkills: form.hardSkills && form.hardSkills.length > 0 ? form.hardSkills : ["React / Next.js", "TypeScript", "Tailwind CSS"],
    langues: form.langues && form.langues.length > 0 ? form.langues : ["Français (Maternel)", "Anglais (C1)"],
    permis: form.permis && form.permis.length > 0 ? form.permis : ["Permis B"],
    hobbies: form.hobbies && form.hobbies.length > 0 ? form.hobbies : ["Photographie", "Voyages"],
    
    experiences: form.experiences?.length ? form.experiences : [
      { id: 1, poste: "Lead Développeur Front-End", entreprise: "Tech Solutions Global", start: "2021", end: "Présent", desc: "Direction technique de l'équipe front-end." },
      { id: 2, poste: "Développeur Fullstack", entreprise: "Innovation Lab", start: "2018", end: "2021", desc: "Développement d'interfaces SaaS complexes." }
    ],
    
    diplomes: form.diplomes?.length ? form.diplomes : [
      { id: 1, titre: "Master Expert en Ingénierie Informatique", ecole: "EPSI Montpellier", annee: "2018" }
    ],
  };

  return (
    <div ref={containerRef} style={styles.wrapper} className="cv-preview-container">
      <div style={{
        ...styles.scaleWrapper,
        transform: `scale(${scale})`,
        marginBottom: scale < 1 ? `-${(1122 * (1 - scale))}px` : '0px'
      }}>
        <div style={{ ...styles.a4, backgroundColor: theme.background }}>
          
          <div style={{ ...styles.left, backgroundColor: theme.sidebar }}>
            <div style={styles.photoContainer}>
              {form.photo ? (
                <img src={form.photo} alt="Profile" style={styles.photo} />
              ) : (
                <div style={styles.photoPlaceholder}>
                  <span style={{ fontSize: 32, fontWeight: 'bold' }}>{data.prenom[0]}</span>
                </div>
              )}
            </div>

            <SidebarSection title="CONTACT" titleColor="#3b82f6">
              <p style={styles.contactItem}><strong>📞</strong> {data.telephone}</p>
              <p style={styles.contactItem}><strong>✉️</strong> {data.email}</p>
              <p style={styles.contactItem}>
                <strong>📍</strong> {data.adresse}{data.adresse && ","} {data.codePostal} {data.ville}
              </p>
              <p style={styles.contactItem}><strong>🎂</strong> {data.naissance}</p>
            </SidebarSection>

            <SidebarSection title="LANGUES" titleColor="#3b82f6">
              {data.langues.map((l, i) => <p key={i} style={styles.contactItem}>{l}</p>)}
            </SidebarSection>
            
            <SidebarSection title="PERMIS" titleColor="#3b82f6">
              {data.permis.map((p, i) => <p key={i} style={styles.contactItem}>{p}</p>)}
            </SidebarSection>

            <SidebarSection title="SOFT SKILLS" titleColor="#3b82f6">
              {data.softSkills.map((s, i) => <p key={i} style={styles.contactItem}>• {s}</p>)}
            </SidebarSection>

            <SidebarSection title="CENTRES D'INTÉRÊT" titleColor="#3b82f6">
              {data.hobbies.map((h, i) => <p key={i} style={styles.contactItem}>• {h}</p>)}
            </SidebarSection>
          </div>

          <div style={styles.right}>
            <header style={styles.header}>
              <h1 style={styles.name}>
                <span style={{ color: theme.textPrimary }}>{data.prenom.toUpperCase()}</span> <span style={{ color: theme.textPrimary }}>{data.nom.toUpperCase()}</span>
              </h1>
              <p style={{ ...styles.mainPoste, color: theme.textSecondary }}>{data.poste}</p>
              <div style={styles.separator}></div>
            </header>

            <section style={styles.section}>
              <h2 style={{ ...styles.sectionTitle, color: theme.textPrimary }}>Profil Personnel</h2>
              <p style={{ ...styles.bioText, color: theme.textSecondary }}>{data.bio}</p>
            </section>

            <section style={styles.section}>
              <h2 style={{ ...styles.sectionTitle, color: theme.textPrimary }}>Expériences Professionnelles</h2>
              {data.experiences.map((exp) => (
                <div key={exp.id} style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.expHeader}>
                    <strong style={{ ...styles.expPoste, color: theme.textPrimary }}>{exp.poste}</strong>
                    <span style={styles.expDate}>{exp.start} — {exp.end}</span>
                  </div>
                  <p style={styles.expEntreprise}>{exp.entreprise}</p>
                  {exp.desc && <p style={{ ...styles.expDesc, color: theme.textSecondary }}>{exp.desc}</p>}
                </div>
              ))}
            </section>

            <section style={styles.section}>
              <h2 style={{ ...styles.sectionTitle, color: theme.textPrimary }}>Formation & Diplômes</h2>
              {data.diplomes.map((d, i) => (
                <div key={i} style={{marginBottom: 15}}>
                  <strong style={{fontSize: 13, color: theme.textPrimary}}>{d.titre}</strong>
                  <p style={styles.expEntreprise}>{d.ecole} | {d.annee}</p>
                </div>
              ))}
            </section>

            <section style={styles.section}>
              <h2 style={{ ...styles.sectionTitle, color: theme.textPrimary }}>Compétences Techniques</h2>
              <div style={styles.badgeContainer}>
                {data.hardSkills.map((s, i) => <Badge key={i}>{s}</Badge>)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", background: "#f1f5f9", padding: "20px 0" },
  scaleWrapper: { transformOrigin: "top center", width: "210mm", height: "297mm", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
  a4: { width: "210mm", height: "297mm", display: "flex", overflow: "hidden", fontFamily: "Inter, system-ui, sans-serif" },
  left: { width: "30%", color: "#f8fafc", padding: "40px 20px" },
  right: { width: "70%", padding: "40px 40px" },
  photoContainer: { marginBottom: 30, textAlign: 'center' },
  photo: { width: 120, height: 120, borderRadius: "20px", objectFit: "cover", border: "3px solid #2563eb" },
  photoPlaceholder: { width: 120, height: 120, borderRadius: "20px", background: "#1e293b", margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' },
  sidebarTitle: { fontSize: 11, fontWeight: 800, letterSpacing: "2px", marginBottom: 12, textTransform: 'uppercase' },
  contactItem: { fontSize: 10.5, marginBottom: 8, color: "#cbd5e1" },
  header: { marginBottom: 40 },
  name: { fontSize: 32, fontWeight: 800, letterSpacing: "-1px", margin: 0, lineHeight: 1 },
  mainPoste: { fontSize: 18, fontWeight: 500, marginTop: 8 },
  separator: { width: 45, height: 4, background: "#2563eb", marginTop: 12, borderRadius: 10 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 13, fontWeight: 800, textTransform: 'uppercase', borderBottom: "2px solid #f1f5f9", paddingBottom: 4, marginBottom: 15 },
  bioText: { fontSize: 11.5, lineHeight: 1.5, textAlign: 'justify' },
  timelineItem: { position: "relative", paddingLeft: 18, borderLeft: "2px solid #f1f5f9", marginBottom: 15 },
  timelineDot: { position: "absolute", left: -6, top: 4, width: 10, height: 10, borderRadius: "50%", background: "#2563eb" },
  expHeader: { display: "flex", justifyContent: "space-between", alignItems: 'center' },
  expPoste: { fontSize: 13 },
  expDate: { fontSize: 9.5, fontWeight: 700, color: "#2563eb", background: '#f0f7ff', padding: '2px 8px', borderRadius: '4px' },
  expEntreprise: { fontSize: 12, color: "#64748b", margin: '2px 0' },
  expDesc: { fontSize: 11, marginTop: 4, lineHeight: 1.4 },
  badgeContainer: { display: "flex", flexWrap: "wrap", gap: 6 },
  badge: { background: "#f8fafc", color: "#334155", padding: "4px 10px", borderRadius: "6px", fontSize: 10, fontWeight: 600, border: "1px solid #e2e8f0" },
  sidebarSection: { marginBottom: 30 }
};
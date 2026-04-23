import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Svg,
  Path,
} from "@react-pdf/renderer";

// --- COMPOSANTS ICÔNES SVG ---
const IconPhone = ({ color }) => (
  <Svg width="10" height="10" viewBox="0 0 24 24" style={{ marginRight: 5 }}>
    <Path fill={color} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </Svg>
);

const IconMail = ({ color }) => (
  <Svg width="10" height="10" viewBox="0 0 24 24" style={{ marginRight: 5 }}>
    <Path fill={color} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </Svg>
);

const IconMap = ({ color }) => (
  <Svg width="10" height="10" viewBox="0 0 24 24" style={{ marginRight: 5 }}>
    <Path fill={color} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </Svg>
);

export default function ModernPDF({ form, colors = {} }) {
  const theme = {
    background: colors?.background || "#ffffff",
    sidebar: colors?.sidebar || "#0f172a",
    textPrimary: colors?.textPrimary || "#000000",
    textSecondary: colors?.textSecondary || "#475569",
    accent: "#3b82f6", // Couleur des icônes et séparateurs
  };

  const pdfStyles = StyleSheet.create({
    page: { flexDirection: "row", backgroundColor: theme.background, fontFamily: "Helvetica" },
    
    // GAUCHE
    leftColumn: { width: "30%", backgroundColor: theme.sidebar, color: "#ffffff", padding: 25 },
    photo: { 
      width: 100, 
      height: 100, 
      borderRadius: 10, 
      marginBottom: 20, 
      alignSelf: 'center', 
      objectFit: 'cover',
      border: `2pt solid ${theme.accent}` 
    },
    sidebarSection: { marginBottom: 15 },
    sidebarTitle: { fontSize: 10, fontWeight: "bold", color: theme.accent, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 },
    sidebarText: { fontSize: 9, marginBottom: 5, color: "#cbd5e1" },
    iconRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },

    // DROITE
    rightColumn: { width: "70%", padding: 35 },
    name: { fontSize: 28, fontWeight: "bold", color: theme.textPrimary, textTransform: "uppercase" },
    job: { fontSize: 15, color: theme.textSecondary, marginTop: 4, fontWeight: 'medium' },
    separator: { width: 40, height: 4, backgroundColor: theme.accent, marginVertical: 15, borderRadius: 2 },
    
    sectionTitle: { 
      fontSize: 12, 
      fontWeight: "bold", 
      color: theme.textPrimary, 
      borderBottom: "1pt solid #eeeeee", 
      paddingBottom: 3, 
      marginBottom: 10,
      marginTop: 15,
      textTransform: 'uppercase'
    },
    text: { fontSize: 10, color: theme.textSecondary, lineHeight: 1.5 },
    
    // ITEMS (Exp & Diplômes)
    itemBox: { marginBottom: 12, paddingLeft: 12, borderLeft: `1.5pt solid ${theme.accent}` },
    itemHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: 'center' },
    itemTitle: { fontSize: 11, fontWeight: "bold", color: theme.textPrimary },
    itemDate: { fontSize: 8, color: theme.accent, fontWeight: 'bold' },
    itemSub: { fontSize: 9, color: "#64748b", marginBottom: 4, fontStyle: 'italic' },
    
    // SKILLS
    badgeContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 5 },
    badge: { 
      backgroundColor: "#f1f5f9", 
      padding: "4 8", 
      borderRadius: 4, 
      marginRight: 5, 
      marginBottom: 5, 
      fontSize: 8, 
      color: "#334155",
      border: "0.5pt solid #e2e8f0"
    }
  });

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        {/* SIDEBAR GAUCHE */}
        <View style={pdfStyles.leftColumn}>
          {form.photo && <Image src={form.photo} style={pdfStyles.photo} />}
          
          <View style={pdfStyles.sidebarSection}>
            <Text style={pdfStyles.sidebarTitle}>Contact</Text>
            {form.telephone && (
              <View style={pdfStyles.iconRow}>
                <IconPhone color={theme.accent} />
                <Text style={pdfStyles.sidebarText}>{form.telephone}</Text>
              </View>
            )}
            {form.email && (
              <View style={pdfStyles.iconRow}>
                <IconMail color={theme.accent} />
                <Text style={pdfStyles.sidebarText}>{form.email}</Text>
              </View>
            )}
            {form.adresse && (
              <View style={pdfStyles.iconRow}>
                <IconMap color={theme.accent} />
                <Text style={pdfStyles.sidebarText}>{form.adresse}</Text>
              </View>
            )}
          </View>

          {form.langues?.length > 0 && (
            <View style={pdfStyles.sidebarSection}>
              <Text style={pdfStyles.sidebarTitle}>Langues</Text>
              {form.langues.map((l, i) => <Text key={i} style={pdfStyles.sidebarText}>• {l}</Text>)}
            </View>
          )}

          {form.softSkills?.length > 0 && (
            <View style={pdfStyles.sidebarSection}>
              <Text style={pdfStyles.sidebarTitle}>Soft Skills</Text>
              {form.softSkills.map((s, i) => <Text key={i} style={pdfStyles.sidebarText}>• {s}</Text>)}
            </View>
          )}

          {form.permis?.length > 0 && (
            <View style={pdfStyles.sidebarSection}>
              <Text style={pdfStyles.sidebarTitle}>Permis</Text>
              {form.permis.map((p, i) => <Text key={i} style={pdfStyles.sidebarText}>• {p}</Text>)}
            </View>
          )}

          {form.hobbies?.length > 0 && (
            <View style={pdfStyles.sidebarSection}>
              <Text style={pdfStyles.sidebarTitle}>Loisirs</Text>
              {form.hobbies.map((h, i) => <Text key={i} style={pdfStyles.sidebarText}>• {h}</Text>)}
            </View>
          )}
        </View>

        {/* CONTENU DROITE */}
        <View style={pdfStyles.rightColumn}>
          <Text style={pdfStyles.name}>{form.prenom} {form.nom}</Text>
          <Text style={pdfStyles.job}>{form.poste}</Text>
          <View style={pdfStyles.separator} />

          {form.bio && (
            <>
              <Text style={pdfStyles.sectionTitle}>Profil</Text>
              <Text style={pdfStyles.text}>{form.bio}</Text>
            </>
          )}

          {form.experiences?.length > 0 && (
            <>
              <Text style={pdfStyles.sectionTitle}>Expériences Professionnelles</Text>
              {form.experiences.map((exp) => (
                <View key={exp.id} style={pdfStyles.itemBox}>
                  <View style={pdfStyles.itemHeader}>
                    <Text style={pdfStyles.itemTitle}>{exp.poste}</Text>
                    <Text style={pdfStyles.itemDate}>{exp.start} - {exp.end}</Text>
                  </View>
                  <Text style={pdfStyles.itemSub}>{exp.entreprise}</Text>
                  <Text style={pdfStyles.text}>{exp.desc}</Text>
                </View>
              ))}
            </>
          )}

          {form.diplomes?.length > 0 && (
            <>
              <Text style={pdfStyles.sectionTitle}>Formation</Text>
              {form.diplomes.map((edu) => (
                <View key={edu.id} style={pdfStyles.itemBox}>
                   <View style={pdfStyles.itemHeader}>
                    <Text style={pdfStyles.itemTitle}>{edu.titre}</Text>
                    <Text style={pdfStyles.itemDate}>{edu.annee}</Text>
                  </View>
                  <Text style={pdfStyles.itemSub}>{edu.ecole}</Text>
                </View>
              ))}
            </>
          )}

          {form.hardSkills?.length > 0 && (
            <>
              <Text style={pdfStyles.sectionTitle}>Compétences Techniques</Text>
              <View style={pdfStyles.badgeContainer}>
                {form.hardSkills.map((s, i) => (
                  <View key={i} style={pdfStyles.badge}><Text>{s}</Text></View>
                ))}
              </View>
            </>
          )}
        </View>
      </Page>
    </Document>
  );
}
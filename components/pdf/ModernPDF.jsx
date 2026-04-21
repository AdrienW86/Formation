import {
  Document,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";

import styles from "./moderPDFStyles";

export default function ModernPDF({ form }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ================= LEFT ================= */}
        <View style={styles.left}>

          {/* PHOTO */}
          {form.photo && (
            <Image
              src={form.photo}
              style={styles.photo}
            />
          )}

          {/* CONTACT */}
          <Text style={styles.sectionTitle}>
            Contact
          </Text>

          {form.telephone && (
            <Text style={styles.text}>
              {form.telephone}
            </Text>
          )}

          {form.email && (
            <Text style={styles.text}>
              {form.email}
            </Text>
          )}

          {(form.adresse ||
            form.codePostal ||
            form.ville) && (
            <Text style={styles.text}>
              {form.adresse}{"\n"}
              {form.codePostal} {form.ville}
            </Text>
          )}

          {/* LANGUES */}
          {form.langues?.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>
                Langues
              </Text>

              {form.langues.map((l, i) => (
                <Text key={i} style={styles.text}>
                  {l}
                </Text>
              ))}
            </>
          )}

          {/* PERMIS */}
          {form.permis?.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>
                Permis
              </Text>

              {form.permis.map((p, i) => (
                <Text key={i} style={styles.text}>
                  {p}
                </Text>
              ))}
            </>
          )}

        </View>

        {/* ================= RIGHT ================= */}
        <View style={styles.right}>

          {/* HEADER */}
          <Text style={styles.name}>
            {form.prenom} {form.nom}
          </Text>

          <Text style={styles.job}>
            {form.poste}
          </Text>

          {/* PROFIL */}
          <Text style={styles.title}>
            Profil
          </Text>

          <Text style={styles.paragraph}>
            {form.profil}
          </Text>

          {/* EXPERIENCES */}
          <Text style={styles.title}>
            Expériences
          </Text>

          {form.experiences?.length > 0 ? (
            form.experiences.map((exp) => (
              <View
                key={exp.id}
                style={styles.expCard}
              >
                <Text style={styles.expTitle}>
                  {exp.poste}
                </Text>

                <Text style={styles.expCompany}>
                  {exp.entreprise}
                </Text>

                <Text style={styles.expDate}>
                  {exp.start} → {exp.end}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.paragraph}>
              Aucune expérience
            </Text>
          )}

        </View>

      </Page>
    </Document>
  );
}
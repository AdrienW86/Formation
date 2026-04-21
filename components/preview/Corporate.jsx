import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  name: { fontSize: 22, marginBottom: 5 },
  section: { marginTop: 10 },
  title: { fontSize: 12, fontWeight: "bold" },
  text: { fontSize: 10 },
});

export default function CvCorporate({ form }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>
          {form.prenom} {form.nom}
        </Text>

        <Text>{form.poste}</Text>

        <View style={styles.section}>
          <Text style={styles.title}>Profil</Text>
          <Text style={styles.text}>{form.profil}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Expérience</Text>
          <Text style={styles.text}>{form.experience}</Text>
        </View>
      </Page>
    </Document>
  );
}
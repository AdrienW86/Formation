import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 25, backgroundColor: "#f8fafc" },
  header: { backgroundColor: "#111827", padding: 15, color: "white" },
  title: { fontSize: 20 },
  text: { fontSize: 10, marginTop: 5 },
});

export default function CvCreative({ form }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {form.prenom} {form.nom}
          </Text>
          <Text>{form.poste}</Text>
        </View>

        <Text style={styles.text}>{form.profil}</Text>
        <Text style={styles.text}>{form.experience}</Text>
      </Page>
    </Document>
  );
}
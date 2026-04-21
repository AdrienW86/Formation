import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "row", padding: 20 },
  left: { width: "35%", backgroundColor: "#2563eb", color: "white", padding: 20 },
  right: { width: "65%", padding: 20 },
  photo: { width: 80, height: 80, borderRadius: 40 }, // ❌ PAS "50%"
});

export default function CvModern({ form }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.left}>
          {form.photo && <Image src={form.photo} style={styles.photo} />}

          <Text>{form.prenom} {form.nom}</Text>
          <Text>{form.poste}</Text>
        </View>

        <View style={styles.right}>
          <Text>Profil</Text>
          <Text>{form.profil}</Text>
        </View>

      </Page>
    </Document>
  );
}
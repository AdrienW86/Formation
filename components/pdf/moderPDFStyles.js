import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({

  /* PAGE */
  page: {
    flexDirection: "row",
    fontSize: 10,
    backgroundColor: "#ffffff",
  },

  /* LEFT COLUMN */
  left: {
    width: "32%",
    backgroundColor: "#0f172a",
    padding: 20,
    color: "#ffffff",
  },

  photo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    textTransform: "uppercase",
    color: "#38bdf8",
  },

  text: {
    fontSize: 9,
    marginBottom: 5,
    lineHeight: 1.4,
  },

  /* RIGHT COLUMN */
  right: {
    width: "68%",
    padding: 25,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#0f172a",
  },

  job: {
    fontSize: 13,
    marginBottom: 20,
    color: "#2563eb",
  },

  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "#0f172a",
  },

  paragraph: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 15,
    color: "#333",
  },

  expCard: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },

  expTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },

  expCompany: {
    fontSize: 10,
    color: "#555",
  },

  expDate: {
    fontSize: 9,
    color: "#888",
  },
});
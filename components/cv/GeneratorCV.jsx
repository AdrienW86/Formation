"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";

import PreviewCV from "./PreviewCV";
import { getPdfTemplate } from "./cvEngine";
import styles from "./generator.module.css";

export default function GeneratorCV() {
  const [template, setTemplate] = useState("modern");

  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    poste: "",
    telephone: "",
    email: "",
    adresse: "",
    codePostal: "",
    ville: "",
    profil: "",
    competences: "",
    photo: "",
    experiences: [],
  });

  const [modalOpen, setModalOpen] = useState(false);

  const [expForm, setExpForm] = useState({
    poste: "",
    entreprise: "",
    start: "",
    end: "",
  });

  // -----------------------
  // INPUTS
  // -----------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // -----------------------
  // PHOTO
  // -----------------------
  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setForm({ ...form, photo: reader.result });
    };

    reader.readAsDataURL(file);
  };

  // -----------------------
  // ADD EXPERIENCE
  // -----------------------
  const addExperience = () => {
    const newExp = {
      ...expForm,
      id: Date.now().toString(),
    };

    setForm({
      ...form,
      experiences: [...form.experiences, newExp],
    });

    setExpForm({
      poste: "",
      entreprise: "",
      start: "",
      end: "",
    });

    setModalOpen(false);
  };

  // -----------------------
  // DELETE EXPERIENCE
  // -----------------------
  const deleteExperience = (id) => {
    setForm({
      ...form,
      experiences: form.experiences.filter((e) => e.id !== id),
    });
  };

  // -----------------------
  // SORT CHRONO
  // -----------------------
  const sortedExperiences = [...form.experiences].sort(
    (a, b) => new Date(b.start) - new Date(a.start)
  );

  // -----------------------
  // PDF
  // -----------------------
  const downloadPDF = async () => {
    const doc = getPdfTemplate(template, form);

    const instance = pdf(doc);
    const blob = await instance.toBlob();

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cv.pdf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.container}>
      {/* ================= LEFT ================= */}
      <div className={styles.generator}>
        <h2 className={styles.h2}>Créateur de CV</h2>

        {/* TEMPLATE */}
        <select
          className={styles.select}
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        >
          <option value="modern">Moderne</option>
          <option value="corporate">Corporate</option>
          <option value="creative">Créatif</option>
        </select>

        {/* ================= IDENTITY ================= */}
        <h3 className={styles.h3}>Identité</h3>

        <div className={styles.identity}>
          <input
            className={styles.input}
            name="prenom"
            placeholder="Prénom"
            onChange={handleChange}
          />

          <input
            className={styles.input}
            name="nom"
            placeholder="Nom"
            onChange={handleChange}
          />

          <input
            className={styles.input}
            name="poste"
            placeholder="Poste recherché"
            onChange={handleChange}
          />
        </div>

        <h3 className={styles.h3}>Adresse</h3>

        <div className={styles.identity}>
          <input
            className={styles.input}
            name="adresse"
            placeholder="Numéro et voie"
            onChange={handleChange}
          />

          <input
            className={styles.input}
            name="codePostal"
            placeholder="Code postal"
            onChange={handleChange}
          />

          <input
            className={styles.input}
            name="ville"
            placeholder="Ville"
            onChange={handleChange}
          />
        </div>

        <h3 className={styles.h3}>Coordonnées</h3>

        <div className={styles.identity}>
          <input
            className={styles.input}
            type="tel"
            name="telephone"
            placeholder="Numéro de téléphone"
            onChange={handleChange}
          />

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Adresse email"
            onChange={handleChange}
          />
        </div>

      {/* ================= LANGUES ================= */}
<h3 className={styles.h3}>Langues</h3>

<div className={styles.identity}>
  <select
    className={styles.input}
    onChange={(e) => {
      const value = e.target.value;

      if (!value) return;

      if (!form.langues?.includes(value)) {
        setForm({
          ...form,
          langues: [...(form.langues || []), value],
        });
      }
    }}
  >
    <option value="">Choisir une langue</option>
    <option value="Français">Français</option>
    <option value="Anglais">Anglais</option>
    <option value="Espagnol">Espagnol</option>
    <option value="Allemand">Allemand</option>
    <option value="Italien">Italien</option>
    <option value="Portugais">Portugais</option>
    <option value="Arabe">Arabe</option>
    <option value="Chinois">Chinois</option>
    <option value="Japonais">Japonais</option>
    <option value="Russe">Russe</option>
  </select>
</div>

<div className={styles.expCard}>
  {(form.langues || []).length === 0 && (
    <p>Aucune langue sélectionnée</p>
  )}

  {(form.langues || []).map((langue, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "8px",
      }}
    >
      <span>{langue}</span>

      <button
        type="button"
        onClick={() =>
          setForm({
            ...form,
            langues: form.langues.filter(
              (_, i) => i !== index
            ),
          })
        }
      >
        Supprimer
      </button>
    </div>
  ))}
</div>

{/* ================= PERMIS ================= */}
<h3 className={styles.h3}>Permis</h3>

<div className={styles.identity}>
  <select
    className={styles.input}
    onChange={(e) => {
      const value = e.target.value;

      if (!value) return;

      if (value === "Aucun") {
        setForm({
          ...form,
          permis: ["Aucun"],
        });

        return;
      }

      const current = form.permis || [];

      const filtered = current.filter(
        (p) => p !== "Aucun"
      );

      if (!filtered.includes(value)) {
        setForm({
          ...form,
          permis: [...filtered, value],
        });
      }
    }}
  >
    <option value="">+ Ajouter un permis</option>
    <option value="Aucun">Aucun</option>
    <option value="Permis AM">Permis AM</option>
    <option value="Permis A1">Permis A1</option>
    <option value="Permis A2">Permis A2</option>
    <option value="Permis A">Permis A</option>
    <option value="Permis B">Permis B</option>
    <option value="Permis BE">Permis BE</option>
    <option value="Permis C">Permis C</option>
    <option value="Permis CE">Permis CE</option>
    <option value="Permis D">Permis D</option>
    <option value="Permis DE">Permis DE</option>
  </select>
</div>

<div className={styles.expCard}>
  {(!form.permis || form.permis.length === 0) && (
    <p>Aucun</p>
  )}

  {(form.permis || []).map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "8px",
      }}
    >
      <span>{item}</span>

      <button
        type="button"
        onClick={() =>
          setForm({
            ...form,
            permis: form.permis.filter(
              (_, i) => i !== index
            ),
          })
        }
      >
        Supprimer
      </button>
    </div>
  ))}
</div>


        {/* PHOTO */}
        <h4 className={styles.h3}>Photo de profil</h4>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhoto}
        />
   
        {/* ================= PROFIL ================= */}
        <h3 className={styles.h3}>Profil</h3>

        <textarea
          className={styles.textarea}
          name="profil"
          placeholder="Décrivez-vous en quelques mots"
          onChange={handleChange}
        />

        {/* ================= EXPERIENCES ================= */}
        <h3 className={styles.h3}>Expériences</h3>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
        >
          + Ajouter une expérience
        </button>

        {sortedExperiences.map((exp) => (
          <div key={exp.id} className={styles.expCard}>
            <div>
              <strong>{exp.poste}</strong> - {exp.entreprise}

              <p>
                {exp.start} → {exp.end}
              </p>
            </div>

            <button onClick={() => deleteExperience(exp.id)}>
              Supprimer
            </button>
          </div>
        ))}

        {/* DOWNLOAD */}
        <button onClick={downloadPDF}>
          Télécharger PDF
        </button>
      </div>

      {/* ================= PREVIEW ================= */}
      <div className={styles.preview}>
        <PreviewCV form={form} template={template} />
      </div>

      {/* ================= MODAL ================= */}
      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Ajouter une expérience</h3>

            <input
              placeholder="Poste"
              value={expForm.poste}
              onChange={(e) =>
                setExpForm({
                  ...expForm,
                  poste: e.target.value,
                })
              }
            />

            <input
              placeholder="Entreprise"
              value={expForm.entreprise}
              onChange={(e) =>
                setExpForm({
                  ...expForm,
                  entreprise: e.target.value,
                })
              }
            />

            <input
              type="date"
              value={expForm.start}
              onChange={(e) =>
                setExpForm({
                  ...expForm,
                  start: e.target.value,
                })
              }
            />

            <input
              type="date"
              value={expForm.end}
              onChange={(e) =>
                setExpForm({
                  ...expForm,
                  end: e.target.value,
                })
              }
            />

            <div className={styles.modalActions}>
              <button onClick={addExperience}>
                Ajouter
              </button>

              <button onClick={() => setModalOpen(false)}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
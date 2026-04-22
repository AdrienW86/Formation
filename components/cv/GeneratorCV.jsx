"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";

import PreviewCV from "./PreviewCV";
import { getPdfTemplate } from "./cvEngine";
import styles from "./generator.module.css";

export default function GeneratorCV() {
  const [template, setTemplate] = useState("modern");
  const [isAiLoading, setIsAiLoading] = useState(false); // État pour l'IA

  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    poste: "",
    telephone: "",
    email: "",
    adresse: "",
    linkedin: "",
    naissance: "",
    bio: "", 
    photo: "",
    experiences: [],
    diplomes: [],
    hardSkills: [],
    softSkills: [],
    langues: [],
    permis: [],
    hobbies: [],
    projets: [],
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("experience");

  const [hardSkillInput, setHardSkillInput] = useState("");
  const [softSkillInput, setSoftSkillInput] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");

  const [expForm, setExpForm] = useState({ poste: "", entreprise: "", start: "", end: "", desc: "" });
  const [eduForm, setEduForm] = useState({ titre: "", ecole: "", annee: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // --- LOGIQUE AGENT IA ---
  const handleAiImprove = async () => {
    if (!form.poste) {
      alert("S'il vous plaît, indiquez d'abord votre 'Poste' dans la section Identité pour guider l'IA.");
      return;
    }

    setIsAiLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          poste: form.poste,
          skills: form.hardSkills,
          bio: form.bio,
        }),
      });

      const data = await res.json();
      if (data.suggestion) {
        setForm({ ...form, bio: data.suggestion });
      } else {
        alert("L'IA n'a pas pu générer de réponse. Vérifiez votre clé API.");
      }
    } catch (err) {
      console.error("Erreur IA:", err);
      alert("Une erreur est survenue lors de l'appel à l'IA.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, photo: reader.result });
    reader.readAsDataURL(file);
  };

  const addItem = (field, item, setItemForm, initialForm) => {
    setForm({ ...form, [field]: [...form[field], { ...item, id: Date.now().toString() }] });
    setItemForm(initialForm);
    setModalOpen(false);
  };

  const deleteItem = (field, id) => {
    setForm({ ...form, [field]: form[field].filter((item) => item.id !== id) });
  };

  const addTag = (field, value, setInput) => {
    if (!value) return;
    if (!form[field].includes(value)) {
      setForm({ ...form, [field]: [...form[field], value] });
    }
    setInput("");
  };

  const removeTag = (field, value) => {
    setForm({ ...form, [field]: form[field].filter((t) => t !== value) });
  };

  const downloadPDF = async () => {
    const doc = getPdfTemplate(template, form);
    const instance = pdf(doc);
    const blob = await instance.toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cv_${form.nom}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.generator}>
        <h2 className={styles.h2}>Générateur de CV</h2>

        <select className={styles.select} value={template} onChange={(e) => setTemplate(e.target.value)}>
          <option value="modern">Moderne / Tech</option>
          <option value="corporate">Executive Corporate</option>
          <option value="creative">Créatif / Design</option>
        </select>

        {/* IDENTITY */}
        <h3 className={styles.h3}>Identité & Réseaux</h3>
        <div className={styles.identity}>
          <input className={styles.input} name="prenom" placeholder="Prénom" onChange={handleChange} />
          <input className={styles.input} name="nom" placeholder="Nom" onChange={handleChange} />
          <input className={styles.input} name="poste" placeholder="Poste" onChange={handleChange} />
          <input className={styles.input} name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
          <div className={styles.inputGroup}>
            <label className={styles.labelSmall}>Date de naissance :</label>
            <input className={styles.input} type="date" name="naissance" onChange={handleChange} />
          </div>
        </div>

        {/* PHOTO & BIO + AGENT IA */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
          <h3 className={styles.h3} style={{ margin: 0 }}>Photo & Profil</h3>
          <button 
            onClick={handleAiImprove} 
            disabled={isAiLoading}
            className={styles.aiButton}
          >
            {isAiLoading ? "🪄 Rédaction..." : "🪄 Améliorer la bio (IA)"}
          </button>
        </div>
        
        <input type="file" accept="image/*" onChange={handlePhoto} className={styles.input} style={{ marginTop: "10px" }} />
        <textarea 
          className={styles.textarea} 
          name="bio" 
          value={form.bio} // Ajout du value pour que l'IA puisse mettre à jour le texte
          placeholder="Votre accroche ou profil personnel..." 
          onChange={handleChange} 
        />

        {/* FORMATIONS */}
        <h3 className={styles.h3}>Diplômes & Formations</h3>
        <button onClick={() => { setModalType("education"); setModalOpen(true); }}>+ Ajouter un diplôme</button>
        <div className={styles.listPreview}>
          {form.diplomes.map((edu) => (
            <div key={edu.id} className={styles.expCard}>
              <span><b>{edu.titre}</b> ({edu.annee})</span>
              <button onClick={() => deleteItem("diplomes", edu.id)}>Suppr.</button>
            </div>
          ))}
        </div>

        {/* EXPERIENCES */}
        <h3 className={styles.h3}>Expériences</h3>
        <button onClick={() => { setModalType("experience"); setModalOpen(true); }}>+ Ajouter une expérience</button>
        <div className={styles.listPreview}>
          {form.experiences.map((exp) => (
            <div key={exp.id} className={styles.expCard}>
              <span>{exp.poste} @ {exp.entreprise}</span>
              <button onClick={() => deleteItem("experiences", exp.id)}>Suppr.</button>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <h3 className={styles.h3}>Expertises & Qualités</h3>
        <div className={styles.tagSection}>
          <input 
            className={styles.input} 
            value={hardSkillInput} 
            placeholder="Ajouter Hard Skill (Entrée)" 
            onChange={(e) => setHardSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTag("hardSkills", hardSkillInput, setHardSkillInput)}
          />
          <div className={styles.tagList}>
            {form.hardSkills.map(s => <span key={s} className={styles.tag}>{s} <b onClick={() => removeTag("hardSkills", s)}>×</b></span>)}
          </div>
        </div>

        {/* HOBBIES */}
        <h3 className={styles.h3}>Loisirs</h3>
        <div className={styles.tagSection}>
          <input 
            className={styles.input} 
            value={hobbyInput} 
            placeholder="Ex: Photographie, Tennis..." 
            onChange={(e) => setHobbyInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTag("hobbies", hobbyInput, setHobbyInput)}
          />
          <div className={styles.tagList}>
            {form.hobbies.map(h => <span key={h} className={styles.tag}>{h} <b onClick={() => removeTag("hobbies", h)}>×</b></span>)}
          </div>
        </div>

        <button className={styles.downloadBtn} onClick={downloadPDF}>Télécharger le PDF</button>
      </div>

      <div className={styles.preview}>
        <PreviewCV form={form} template={template} />
      </div>

      {/* MODAL SYSTEM */}
      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            {modalType === "experience" ? (
              <>
                <h3>Expérience</h3>
                <input placeholder="Poste" onChange={e => setExpForm({...expForm, poste: e.target.value})} />
                <input placeholder="Entreprise" onChange={e => setExpForm({...expForm, entreprise: e.target.value})} />
                <div className={styles.dateRow}>
                  <div className={styles.dateBlock}><label>Début</label><input type="date" onChange={e => setExpForm({...expForm, start: e.target.value})} /></div>
                  <div className={styles.dateBlock}><label>Fin</label><input type="date" onChange={e => setExpForm({...expForm, end: e.target.value})} /></div>
                </div>
                <textarea placeholder="Description..." onChange={e => setExpForm({...expForm, desc: e.target.value})} />
                <button onClick={() => addItem("experiences", expForm, setExpForm, {poste:"", entreprise:"", start:"", end:"", desc:""})}>Ajouter</button>
              </>
            ) : (
              <>
                <h3>Diplôme / Formation</h3>
                <input placeholder="Intitulé du diplôme" onChange={e => setEduForm({...eduForm, titre: e.target.value})} />
                <input placeholder="École / Université" onChange={e => setEduForm({...eduForm, ecole: e.target.value})} />
                <input type="number" placeholder="Année d'obtention" onChange={e => setEduForm({...eduForm, annee: e.target.value})} />
                <button onClick={() => addItem("diplomes", eduForm, setEduForm, {titre:"", ecole:"", annee:""})}>Ajouter</button>
              </>
            )}
            <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
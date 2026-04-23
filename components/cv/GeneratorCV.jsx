"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";

import PreviewCV from "./PreviewCV";
import { getPdfTemplate } from "./cvEngine";
import styles from "./generator.module.css";

export default function GeneratorCV() {
  const [template, setTemplate] = useState("modern");
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Personnalisation des couleurs
  const [colors, setColors] = useState({
    background: "#ffffff",
    sidebar: "#0f172a",
    textPrimary: "#000000",
    textSecondary: "#475569"
  });

  const [form, setForm] = useState({
    prenom: "", nom: "", poste: "", telephone: "", email: "",
    adresse: "", linkedin: "", naissance: "", bio: "", photo: "",
    experiences: [], diplomes: [], hardSkills: [], softSkills: [],
    langues: [], permis: [], hobbies: [],
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("experience");

  // Inputs pour les tags
  const [hardSkillInput, setHardSkillInput] = useState("");
  const [softSkillInput, setSoftSkillInput] = useState("");
  const [permisInput, setPermisInput] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");
  const [langueInput, setLangueInput] = useState("");

  const [expForm, setExpForm] = useState({ poste: "", entreprise: "", start: "", end: "", desc: "" });
  const [eduForm, setEduForm] = useState({ titre: "", ecole: "", annee: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleColorChange = (key, value) => {
    setColors(prev => ({ ...prev, [key]: value }));
  };

  const handleAiImprove = async () => {
    if (!form.poste) {
      alert("Indiquez d'abord votre 'Poste' pour guider l'IA.");
      return;
    }
    setIsAiLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ poste: form.poste, skills: form.hardSkills, bio: form.bio }),
      });
      const data = await res.json();
      if (data.suggestion) setForm({ ...form, bio: data.suggestion });
    } catch (err) {
      alert("Erreur IA.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const removeTag = (field, value) => {
    setForm({ ...form, [field]: form[field].filter((t) => t !== value) });
  };

  const deleteItem = (field, id) => {
    setForm({ ...form, [field]: form[field].filter((item) => item.id !== id) });
  };

  const addTag = (field, value, setInput) => {
    if (!value.trim()) return;
    if (!form[field].includes(value)) {
      setForm({ ...form, [field]: [...form[field], value] });
    }
    setInput("");
  };

  const addItem = (field, item, setItemForm, initialForm) => {
    setForm({ ...form, [field]: [...form[field], { ...item, id: Date.now().toString() }] });
    setItemForm(initialForm);
    setModalOpen(false);
  };

  const downloadPDF = async () => {
    const doc = getPdfTemplate(template, { ...form, colors });
    const instance = pdf(doc);
    const blob = await instance.toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cv_${form.nom}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, photo: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.generator}>
        <h2 className={styles.h2}>Générateur de CV</h2>

        {/* IDENTITÉ */}
        <h3 className={styles.h3}>Identité & Réseaux</h3>
        <div className={styles.identity}>
          <input className={styles.input} name="prenom" placeholder="Prénom" onChange={handleChange} />
          <input className={styles.input} name="nom" placeholder="Nom" onChange={handleChange} />
          <input className={styles.input} name="poste" placeholder="Poste" onChange={handleChange} />
          <input className={styles.input} name="telephone" placeholder="Téléphone" onChange={handleChange} />
          <input className={styles.input} name="email" placeholder="Email" onChange={handleChange} />
          <input className={styles.input} name="adresse" placeholder="Adresse" onChange={handleChange} />
          <input className={styles.input} name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
          <div className={styles.inputGroup}>
            <label className={styles.labelSmall}>Photo :</label>
            <input type="file" accept="image/*" onChange={handlePhoto} className={styles.input} />
          </div>
        </div>

        {/* BIO & IA */}
        <h3 className={styles.h3}>Profil & Bio</h3>
        <textarea className={styles.textarea} name="bio" value={form.bio} placeholder="Décrivez votre parcours..." onChange={handleChange} />
        <button onClick={handleAiImprove} disabled={isAiLoading} className={styles.aiButton}>
          {isAiLoading ? "🪄 Rédaction IA..." : "🪄 Améliorer avec l'IA"}
        </button>

        {/* TOUTES LES COMPÉTENCES (Hard, Soft, Langues, Permis, Hobbies) */}
        <h3 className={styles.h3}>Compétences & Informations</h3>
        
        {/* Hard Skills */}
        <div className={styles.tagInputRow}>
          <input className={styles.input} value={hardSkillInput} placeholder="Hard Skill (ex: React)" onChange={(e) => setHardSkillInput(e.target.value)} />
          <button className={styles.plusBtn} onClick={() => addTag("hardSkills", hardSkillInput, setHardSkillInput)}>+</button>
        </div>
        <div className={styles.tagList}>
          {form.hardSkills.map(s => <span key={s} className={styles.tag}>{s} <b onClick={() => removeTag("hardSkills", s)}>×</b></span>)}
        </div>

        {/* Soft Skills */}
        <div className={styles.tagInputRow} style={{marginTop: '10px'}}>
          <input className={styles.input} value={softSkillInput} placeholder="Soft Skill (ex: Leadership)" onChange={(e) => setSoftSkillInput(e.target.value)} />
          <button className={styles.plusBtn} onClick={() => addTag("softSkills", softSkillInput, setSoftSkillInput)}>+</button>
        </div>
        <div className={styles.tagList}>
          {form.softSkills.map(s => <span key={s} className={styles.tag}>{s} <b onClick={() => removeTag("softSkills", s)}>×</b></span>)}
        </div>

        {/* Langues */}
        <div className={styles.tagInputRow} style={{marginTop: '10px'}}>
          <input className={styles.input} value={langueInput} placeholder="Langue (ex: Anglais - C1)" onChange={(e) => setLangueInput(e.target.value)} />
          <button className={styles.plusBtn} onClick={() => addTag("langues", langueInput, setLangueInput)}>+</button>
        </div>
        <div className={styles.tagList}>
          {form.langues.map(l => <span key={l} className={styles.tag}>{l} <b onClick={() => removeTag("langues", l)}>×</b></span>)}
        </div>

        {/* Permis */}
        <div className={styles.tagInputRow} style={{marginTop: '10px'}}>
          <input className={styles.input} value={permisInput} placeholder="Permis" onChange={(e) => setPermisInput(e.target.value)} />
          <button className={styles.plusBtn} onClick={() => addTag("permis", permisInput, setPermisInput)}>+</button>
        </div>
        <div className={styles.tagList}>
          {form.permis.map(p => <span key={p} className={styles.tag}>{p} <b onClick={() => removeTag("permis", p)}>×</b></span>)}
        </div>

        {/* Hobbies */}
        <div className={styles.tagInputRow} style={{marginTop: '10px'}}>
          <input className={styles.input} value={hobbyInput} placeholder="Loisir" onChange={(e) => setHobbyInput(e.target.value)} />
          <button className={styles.plusBtn} onClick={() => addTag("hobbies", hobbyInput, setHobbyInput)}>+</button>
        </div>
        <div className={styles.tagList}>
          {form.hobbies.map(h => <span key={h} className={styles.tag}>{h} <b onClick={() => removeTag("hobbies", h)}>×</b></span>)}
        </div>

        {/* PARCOURS */}
        <h3 className={styles.h3}>Parcours</h3>
        <div className={styles.addedItemsList}>
          {form.experiences.map(exp => (
            <div key={exp.id} className={styles.addedItem}>
              <span><strong>{exp.poste}</strong> ({exp.start}-{exp.end})</span>
              <button onClick={() => deleteItem("experiences", exp.id)} className={styles.deleteBtnSmall}>🗑️</button>
            </div>
          ))}
        </div>
        <button className={styles.addForm} onClick={() => { setModalType("experience"); setModalOpen(true); }}>+ Ajouter Expérience</button>

        <div className={styles.addedItemsList} style={{marginTop: '10px'}}>
          {form.diplomes.map(edu => (
            <div key={edu.id} className={styles.addedItem}>
              <span><strong>{edu.titre}</strong> - {edu.annee}</span>
              <button onClick={() => deleteItem("diplomes", edu.id)} className={styles.deleteBtnSmall}>🗑️</button>
            </div>
          ))}
        </div>
        <button className={styles.addForm} onClick={() => { setModalType("education"); setModalOpen(true); }}>+ Ajouter Diplôme</button>

        {/* PERSONNALISATION */}
        <h3 className={styles.h3}>Personnalisation</h3>
        <div className={styles.colorGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label className={styles.labelSmall}>Fond Global</label>
            <input type="color" value={colors.background} onChange={(e) => handleColorChange("background", e.target.value)} className={styles.colorPicker} />
          </div>
          <div>
            <label className={styles.labelSmall}>Sidebar (Gauche)</label>
            <input type="color" value={colors.sidebar} onChange={(e) => handleColorChange("sidebar", e.target.value)} className={styles.colorPicker} />
          </div>
          <div>
            <label className={styles.labelSmall}>Texte 1 (Titres)</label>
            <input type="color" value={colors.textPrimary} onChange={(e) => handleColorChange("textPrimary", e.target.value)} className={styles.colorPicker} />
          </div>
          <div>
            <label className={styles.labelSmall}>Texte 2 (Contenu)</label>
            <input type="color" value={colors.textSecondary} onChange={(e) => handleColorChange("textSecondary", e.target.value)} className={styles.colorPicker} />
          </div>
        </div>

        <button className={styles.downloadBtn} onClick={downloadPDF} style={{ marginTop: '30px' }}>Télécharger le PDF</button>
      </div>

      <div className={styles.preview}>
        <PreviewCV form={form} template={template} colors={colors} />
      </div>

      {/* MODALE */}
      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>{modalType === "experience" ? "Expérience" : "Diplôme"}</h3>
            {modalType === "experience" ? (
              <>
                <input className={styles.inputModal} placeholder="Poste" onChange={e => setExpForm({...expForm, poste: e.target.value})} />
                <input className={styles.inputModal} placeholder="Entreprise" onChange={e => setExpForm({...expForm, entreprise: e.target.value})} />
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input className={styles.inputModal} placeholder="Début" onChange={e => setExpForm({...expForm, start: e.target.value})} />
                  <input className={styles.inputModal} placeholder="Fin" onChange={e => setExpForm({...expForm, end: e.target.value})} />
                </div>
                <textarea className={styles.textArea} placeholder="Description..." onChange={e => setExpForm({...expForm, desc: e.target.value})} />
                <button className={styles.addBtn} onClick={() => addItem("experiences", expForm, setExpForm, {poste:"", entreprise:"", start:"", end:"", desc:""})}>Ajouter</button>
              </>
            ) : (
              <>
                <input className={styles.inputModal} placeholder="Diplôme" onChange={e => setEduForm({...eduForm, titre: e.target.value})} />
                <input className={styles.inputModal} placeholder="École" onChange={e => setEduForm({...eduForm, ecole: e.target.value})} />
                <input className={styles.inputModal} placeholder="Année" onChange={e => setEduForm({...eduForm, annee: e.target.value})} />
                <button className={styles.addBtn} onClick={() => addItem("diplomes", eduForm, setEduForm, {titre:"", ecole:"", annee:""})}>Ajouter</button>
              </>
            )}
            <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
}
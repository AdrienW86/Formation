"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, GraduationCap, CheckCircle, Loader2 } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Extraction des données du formulaire
    const formData = {
      name: e.target[0].value,
      phone: e.target[1].value,
      formation: e.target[2].value,
      message: e.target[3].value,
      // Note: On peut ajouter l'email si tu rajoutes le champ, 
      // sinon on envoie une valeur par défaut ou le tel
      email: "Non renseigné", 
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Erreur envoi:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Boostez votre <span className={styles.accent}>Carrière</span></h1>
          <p className={styles.description}>
            Nos experts vous accompagnent dans le choix de votre formation. 
            Échangez avec un conseiller pédagogique dès maintenant.
          </p>
        </header>

        <div className={styles.grid}>
          
          {/* Sidebar Focus Formations */}
          <aside className={styles.infoSidebar}>
            <div className={styles.formationBadge}>
              <GraduationCap size={20} />
              <span>Pôle Formation</span>
            </div>
            
            <h2 className={styles.sidebarTitle}>Besoin d'un conseil ?</h2>
            <p className={styles.sidebarSub}>Appelez-nous pour un diagnostic gratuit :</p>
            
            <div className={styles.phoneHighlight}>
              <Phone size={24} className={styles.phoneIcon} />
              <a href="tel:0628286967" className={styles.phoneNumber}>06 28 28 69 67</a>
            </div>

            <div className={styles.divider} />

            <div className={styles.contactRow}>
              <div className={styles.iconBox}><Mail size={18} /></div>
              <div>
                <p className={styles.rowLabel}>Email</p>
                <p className={styles.rowValue}>contact@formatiz.fr</p>
              </div>
            </div>

            <div className={styles.contactRow}>
              <div className={styles.iconBox}><MapPin size={18} /></div>
              <div>
                <p className={styles.rowLabel}>Campus</p>
                <p className={styles.rowValue}>Dans toute la France</p>
              </div>
            </div>

            <div className={styles.argumentaire}>
              <div className={styles.argItem}>
                <CheckCircle size={14} className={styles.check} />
                <span>Réponse en moins de 24h</span>
              </div>
              <div className={styles.argItem}>
                <CheckCircle size={14} className={styles.check} />
                <span>Conseils personnalisés</span>
              </div>
            </div>
          </aside>

          {/* Formulaire */}
          <main className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}><CheckCircle size={48} color="#10b981" /></div>
                <h3 className={styles.h3success}>Demande bien reçue !</h3>
                <p>Un conseiller pédagogique va vous recontacter par téléphone sur le 06 28 28 69 67.</p>
                <button onClick={() => setSubmitted(false)} className={styles.submitBtn} style={{margin: '20px auto'}}>
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Recevoir la brochure détaillée</h3>
                
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Nom & Prénom</label>
                    <input type="text" name="name" required placeholder="Jean Dupont" className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Téléphone</label>
                    <input type="tel" name="phone" required placeholder="06 .. .. .. .." className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Formation souhaitée</label>
                  <select 
                    name="formation" 
                    className={styles.select} 
                    required 
                    defaultValue="" // C'est ici que React gère la sélection par défaut
                  >
                    <option value="" disabled>Choisissez votre parcours</option>
                    <option value="Recherche Emploi">Objectif Emploi : Booster ma recherche & décrocher un poste</option>
                    <option value="IA & SEO">Productivité & SEO : Optimiser mon business avec l'IA</option>
                    <option value="Creation Entreprise">Tremplin Entreprendre : Créer et lancer mon entreprise</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Parlez-nous de votre projet</label>
                  <textarea name="message" placeholder="Quelle est votre situation actuelle ?" className={styles.textarea}></textarea>
                </div>

                {error && <p style={{color: '#ef4444', fontSize: '14px', marginBottom: '10px'}}>Une erreur est survenue. Veuillez réessayer.</p>}

                <button type="submit" disabled={loading} className={styles.submitBtn}>
                  {loading ? (
                    <>Envoi en cours... <Loader2 size={18} className={styles.spinner} /></>
                  ) : (
                    <>Obtenir les infos gratuites <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
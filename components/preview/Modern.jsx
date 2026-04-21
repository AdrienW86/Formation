export default function ModernPreview({ form }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100%",
        fontFamily: "Arial, sans-serif",
        background: "#ffffff",
      }}
    >
      {/* COLONNE GAUCHE */}
      <div
        style={{
          width: "35%",
          background: "#2563eb",
          color: "white",
          padding: 20,
        }}
      >
        {/* PHOTO */}
        {form.photo && (
          <img
            src={form.photo}
            alt="Photo de profil"
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 15,
            }}
          />
        )}

        {/* NOM */}
        <h2 style={{ marginBottom: 5 }}>
          {form.prenom} {form.nom}
        </h2>

        {/* POSTE */}
        <p style={{ marginBottom: 20 }}>
          {form.poste}
        </p>

        {/* COORDONNÉES */}
        <h3 style={{ marginBottom: 10 }}>Coordonnées</h3>

        {form.telephone && (
          <p style={{ fontSize: 14, marginBottom: 6 }}>
            {form.telephone}
          </p>
        )}

        {form.email && (
          <p style={{ fontSize: 14, marginBottom: 6 }}>
            {form.email}
          </p>
        )}

          <h3 style={{ marginBottom: 10 }}>Adresse</h3>

        {(form.adresse || form.codePostal || form.ville) && (
          <p style={{ fontSize: 14, marginBottom: 20 }}>
            {form.adresse} <br />
            {form.codePostal} {form.ville}
          </p>
        )}

  <h3 style={{ marginBottom: 10 }}>Langues</h3>
        {/* LANGUES */}
        {form.langues?.length > 0 && (
          <>
            

            {form.langues.map((langue, index) => (
              <p
                key={index}
                style={{
                  fontSize: 14,
                  marginBottom: 5,
                }}
              >
                {langue}
              </p>
            ))}
          </>
        )}

  <h3 style={{ marginBottom: 10 }}>Permis</h3>
        {/* PERMIS */}
        {form.permis?.length > 0 && (
          <>
           

            {form.permis.map((item, index) => (
              <p
                key={index}
                style={{
                  fontSize: 14,
                  marginBottom: 5,
                }}
              >
                {item}
              </p>
            ))}
          </>
        )}
      </div>

      {/* COLONNE DROITE */}
      <div
        style={{
          width: "65%",
          padding: 20,
        }}
      >
        {/* PROFIL */}
        <h3
          style={{
            color: "#2563eb",
            marginBottom: 10,
          }}
        >
          Profil
        </h3>

        <p style={{ marginBottom: 25 }}>
          {form.profil}
        </p>

        {/* EXPERIENCES */}
        <h3
          style={{
            color: "#2563eb",
            marginBottom: 10,
          }}
        >
          Expériences
        </h3>

        {form.experiences?.length > 0 ? (
          form.experiences.map((exp) => (
            <div
              key={exp.id}
              style={{
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: "1px solid #ddd",
              }}
            >
              <strong>
                {exp.poste}
              </strong>

              <p style={{ margin: "4px 0" }}>
                {exp.entreprise}
              </p>

              <small>
                {exp.start} → {exp.end}
              </small>
            </div>
          ))
        ) : (
          <p>Aucune expérience renseignée</p>
        )}
      </div>
    </div>
  );
}
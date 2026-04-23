/* =========================================================
   Floorplanner App.jsx
   Körs via Babel Standalone (utan build-steg)
========================================================= */

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf6ef",
        fontFamily: "Georgia, serif",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: "#2c2416",
          color: "#e8d5b7",
          padding: "12px 18px",
          fontSize: "18px",
          letterSpacing: "2px",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(0,0,0,0.35)"
        }}
      >
        PLANLÖSNING – PWA TEST
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            maxWidth: "460px"
          }}
        >
          <h1 style={{ marginBottom: "12px" }}>
            ✅ App.jsx fungerar
          </h1>

          <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
            React + JSX kör nu korrekt via
            <br />
            <b>GitHub Pages + Babel</b>.
          </p>

          <div
            style={{
              marginTop: "28px",
              padding: "16px",
              border: "2px dashed #b7a99a",
              borderRadius: "6px",
              background: "#f5f0e8"
            }}
          >
            Nästa steg:
            <ul style={{ textAlign: "left", marginTop: "10px" }}>
              <li>✔ Koppla in rit-canvas (SVG)</li>
              <li>✔ Verktyg: vägg, rum, text</li>
              <li>✔ Zoom, pan, undo</li>
              <li>✔ Spara / ladda projekt</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

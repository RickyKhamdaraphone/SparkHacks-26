export default function StartScreen({ onStart }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #1b2735, #090a0f)", // cinematic dark gradient
        color: "#f0f0f0",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "2rem",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        }}
      >
        🎬 Cinemap
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "3rem" }}>
        Explore popular movies by country on the interactive map
      </p>

      <button
        onClick={onStart}
        style={{
          padding: "15px 40px",
          fontSize: "1.2rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ff3c38", // cinematic red
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Start
      </button>
    </div>
  );
}

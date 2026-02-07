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
        backgroundColor: "#000000",
        color: "#ffffff",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          textShadow: "2px 2px 10px rgba(255,255,255,0.3)",
        }}
      >
        MapMyMovie
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
        }}
      >
        Find films around the globe
      </p>

      {/* Earth Image */}
        <img
          src="/earth.png"
          alt="Earth"
          style={{
            width: "350px",
            height: "350px",
            marginBottom: "2rem",
            borderRadius: "50%",
            filter: "drop-shadow(0 0 50px rgba(0,128,255,0.5))"
          }}
        />


      {/* Start Button */}
      <button
        onClick={onStart}
        style={{
          padding: "15px 40px",
          fontSize: "1.2rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#1e90ff", // nice blue
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

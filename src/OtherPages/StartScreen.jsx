export default function StartScreen({ onStart }) {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff", // white background
        color: "#000000",           // black text
      }}
    >
      <h1>Welcome to SparkHacks 26 🚀</h1>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
}

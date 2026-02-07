import { useState } from "react";
import StartScreen from "./OtherPages/StartScreen.jsx";

export default function App() {
  const [started, setStarted] = useState(false);

  // Main app content after clicking Start
  const mainContent = (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <h1>Hackathon App</h1>
      <p>Start building your project here!</p>
    </div>
  );

  return <>{started ? mainContent : <StartScreen onStart={() => setStarted(true)} />}</>;
}

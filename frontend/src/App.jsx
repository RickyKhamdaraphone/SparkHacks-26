import { useState } from "react";
import StartScreen from "./OtherPages/StartScreen.jsx";
import WorldMap from "./OtherPages/WorldMap/WorldMap.jsx";

export default function App() {
  const [started, setStarted] = useState(false);

  return <>{started ? <WorldMap /> : <StartScreen onStart={() => setStarted(true)} />}</>;
}

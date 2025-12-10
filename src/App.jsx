import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import PaletteDisplay from "./components/PaletteDisplay";
import { generatePalette } from "./utils/generatePalette";

export default function App() {
  const [palette, setPalette] = useState([]);

  const handleMood = (mood) => {
    setPalette(generatePalette(mood));
  };

  return (
    <div className="min-h-screen p-10 text-center bg-gray-50">
      <h1 className="text-4xl font-bold">Mood-Based Color Palette 🎨</h1>
      <p className="text-gray-600 mt-2">Select your mood to generate a palette.</p>

      <MoodSelector onSelect={handleMood} />

      <PaletteDisplay colors={palette} />
    </div>
  );
}

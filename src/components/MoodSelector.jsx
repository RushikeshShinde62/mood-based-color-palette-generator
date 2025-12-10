const moods = [
  { id: "happy", icon: "😊", label: "Happy" },
  { id: "calm", icon: "😌", label: "Calm" },
  { id: "sad", icon: "😢", label: "Sad" },
  { id: "angry", icon: "😡", label: "Angry" },
  { id: "excited", icon: "🤩", label: "Excited" },
];

export default function MoodSelector({ onSelect }) {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {moods.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect(m.id)}
          className="text-4xl p-4 border rounded-xl bg-white hover:bg-gray-100 transition"
        >
          {m.icon}
        </button>
      ))}
    </div>
  );
}

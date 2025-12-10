const moods = [
  { id: "happy", icon: "😊", label: "Happy" },
  { id: "calm", icon: "😌", label: "Calm" },
  { id: "sad", icon: "😢", label: "Sad" },
  { id: "angry", icon: "😡", label: "Angry" },
  { id: "excited", icon: "🤩", label: "Excited" },

  { id: "tired", icon: "🥱", label: "Tired" },
  { id: "stressed", icon: "😓", label: "Stressed" },
  { id: "overwhelmed", icon: "😫", label: "Overwhelmed" },
  { id: "anxious", icon: "😰", label: "Anxious" },
  { id: "worried", icon: "😟", label: "Worried" },

  { id: "lonely", icon: "🥺", label: "Lonely" },
  { id: "insecure", icon: "😣", label: "Insecure" },
  { id: "hurt", icon: "💔", label: "Hurt" },
  { id: "frustrated", icon: "😤", label: "Frustrated" },
  { id: "confused", icon: "😕", label: "Confused" },

  { id: "grateful", icon: "🙏", label: "Grateful" },
  { id: "relieved", icon: "😮‍💨", label: "Relieved" },
  { id: "hopeful", icon: "🤞", label: "Hopeful" },
  { id: "content", icon: "🙂", label: "Content" },
  { id: "peaceful", icon: "🧘‍♂️", label: "Peaceful" },

  { id: "motivated", icon: "🔥", label: "Motivated" },
  { id: "focused", icon: "🎯", label: "Focused" },
  { id: "drained", icon: "🪫", label: "Drained" },
  { id: "bored", icon: "😐", label: "Bored" },
  { id: "amused", icon: "😂", label: "Amused" },

  { id: "embarrassed", icon: "😅", label: "Embarrassed" },
  { id: "awkward", icon: "🙃", label: "Awkward" },
  { id: "guilty", icon: "😔", label: "Guilty" },
  { id: "jealous", icon: "😒", label: "Jealous" },
  { id: "nostalgic", icon: "🕰️", label: "Nostalgic" },

  { id: "proud", icon: "😌", label: "Proud" },
  { id: "energized", icon: "⚡", label: "Energized" },
  { id: "restless", icon: "😬", label: "Restless" },
  { id: "lost", icon: "🌫️", label: "Lost" },
  { id: "quiet", icon: "🤫", label: "Quiet" },

  { id: "loved", icon: "❤️", label: "Loved" },
  { id: "affectionate", icon: "🥰", label: "Affectionate" },
  { id: "supported", icon: "🤝", label: "Supported" },
  { id: "scared", icon: "😨", label: "Scared" },
  { id: "optimistic", icon: "🌤️", label: "Optimistic" }
];


export default function MoodSelector({ onSelect }) {
  return (
    <div className="flex justify-center gap-6 mt-6 flex-wrap">
      {moods.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect(m.id)}
          className="text-4xl p-4 text-[14px] border rounded-xl bg-white hover:bg-gray-100 transition"
        >
          {m.icon} {m.label}
        </button>
      ))}
    </div>
  );
}

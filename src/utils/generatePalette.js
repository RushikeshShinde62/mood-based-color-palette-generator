const moods = {
  happy: ["#FFD700", "#FFA500"],
  calm: ["#7FDBFF", "#39CCCC"],
  sad: ["#001f3f", "#0074D9"],
  angry: ["#FF4136", "#85144b"],
  excited: ["#B10DC9", "#F012BE"],

  tired: ["#A3A3A3", "#6E6E6E"],
  stressed: ["#8B0000", "#B22222"],
  overwhelmed: ["#5A5A5A", "#2E2E2E"],
  anxious: ["#4B6EAF", "#2C3E50"],
  worried: ["#556B7F", "#3A4750"],

  lonely: ["#4A4E69", "#22223B"],
  insecure: ["#6C757D", "#495057"],
  hurt: ["#A4161A", "#660708"],
  frustrated: ["#D1495B", "#8B2F3E"],
  confused: ["#8E9AAF", "#CBC0D3"],

  grateful: ["#FFD8A8", "#FFC078"],
  relieved: ["#9CE5CB", "#63C5B0"],
  hopeful: ["#A3E6A3", "#5CCF5C"],
  content: ["#F0E3A3", "#D9C76A"],
  peaceful: ["#CFE8FF", "#A4D4FF"],

  motivated: ["#FF8C00", "#FF5400"],
  focused: ["#003049", "#1A659E"],
  drained: ["#B0B0B0", "#8C8C8C"],
  bored: ["#BDBDBD", "#9E9E9E"],
  amused: ["#FFE066", "#FAB666"],

  embarrassed: ["#FFB3B3", "#FF9999"],
  awkward: ["#D3C0F9", "#B39DDB"],
  guilty: ["#7F8C8D", "#5C6E73"],
  jealous: ["#3C6E47", "#2A5033"],
  nostalgic: ["#C2B280", "#A8996E"],

  proud: ["#F4D35E", "#EE964B"],
  energized: ["#FF6B35", "#FF9F1C"],
  restless: ["#7A7265", "#59554A"],
  lost: ["#6D8299", "#4F5D75"],
  quiet: ["#E8E8E8", "#CFCFCF"],

  loved: ["#FF6F91", "#FF9671"],
  affectionate: ["#FFC6FF", "#FFABF7"],
  supported: ["#A0D995", "#6CC57A"],
  scared: ["#2C3E50", "#1C2833"],
  optimistic: ["#A8E6CF", "#85D6A6"]
};

// lighten / darken helper
const adjust = (hex, amount) => {
  let col = hex.replace("#", "");

  let r = parseInt(col.substring(0, 2), 16);
  let g = parseInt(col.substring(2, 4), 16);
  let b = parseInt(col.substring(4, 6), 16);

  r = Math.min(255, Math.max(0, r + amount));
  g = Math.min(255, Math.max(0, g + amount));
  b = Math.min(255, Math.max(0, b + amount));

  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
};


export const generatePalette = (mood) => {
  const [c1, c2] = moods[mood] || moods.happy;

  return [
    adjust(c1, 40),
    c1,
    adjust(c1, -40),
    c2,
    adjust(c2, 40),
  ];
};

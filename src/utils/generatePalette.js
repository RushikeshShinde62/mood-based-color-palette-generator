const moods = {
  happy: ["#FFD700", "#FFA500"],
  calm: ["#7FDBFF", "#39CCCC"],
  sad: ["#001f3f", "#0074D9"],
  angry: ["#FF4136", "#85144b"],
  excited: ["#B10DC9", "#F012BE"],
};

// lighten / darken helper
const adjust = (hex, amount) => {
  let col = hex.replace("#", "");
  let num = parseInt(col, 16);

  let r = Math.min(255, Math.max(0, (num >> 16) + amount));
  let g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  let b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));

  return (
    "#" +
    (r << 16 | g << 8 | b)
      .toString(16)
      .padStart(6, "0")
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

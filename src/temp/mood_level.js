export const MOOD_LEVELS = [
  {
    value: 1,
    key: "exhausted",
    label: "Kiệt quệ",
    hex: "#B71C1C",
  },
  {
    value: 2,
    key: "frustrated",
    label: "Tức giận",
    hex: "#E53935",
  },
  {
    value: 3,
    key: "anxious",
    label: "Lo âu",
    hex: "#F4511E",
  },
  {
    value: 4,
    key: "unsettled",
    label: "Bồn chồn",
    hex: "#FB8C00",
  },
  {
    value: 5,
    key: "neutral",
    label: "Bình thường",
    hex: "#FDD835",
  },
  {
    value: 6,
    key: "calm",
    label: "Thanh thản",
    hex: "#C0CA33",
  },
  {
    value: 7,
    key: "optimistic",
    label: "Lạc quan",
    hex: "#7CB342",
  },
  {
    value: 8,
    key: "cheerful",
    label: "Phấn khởi",
    hex: "#43A047",
  },
  {
    value: 9,
    key: "thriving",
    label: "Thăng hoa",
    hex: "#1B5E20",
  },
];

// Map tra cứu nhanh theo key (ví dụ: MOOD_BY_KEY['cheerful'])
export const MOOD_BY_KEY = Object.fromEntries(
  MOOD_LEVELS.map((mood) => [mood.key, mood])
);

// Map tra cứu nhanh theo value (ví dụ: MOOD_BY_VALUE[8])
export const MOOD_BY_VALUE = Object.fromEntries(
  MOOD_LEVELS.map((mood) => [mood.value, mood])
);

// Helper lấy mood theo key hoặc value
export const getMoodByKey = (key) => MOOD_BY_KEY[key] ?? null;
export const getMoodByValue = (value) => MOOD_BY_VALUE[value] ?? null;

export default MOOD_LEVELS;

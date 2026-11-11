import { getMoodByValue } from "./mood_level";

/**
 * @typedef {Object} Entry
 * @property {string} id - Định danh duy nhất của bài viết
 * @property {string} title - Tiêu đề bài viết
 * @property {string} content - Nội dung bài viết (HTML / text / Tiptap JSON)
 * @property {number} mood - Mức độ cảm xúc từ 1 đến 9 (khớp với value trong mood_level.js)
 * @property {string[]} tags - Danh sách nhãn / chủ đề
 * @property {string} createdAt - Thời gian tạo dạng ISO 8601 string
 * @property {string} updatedAt - Thời gian cập nhật gần nhất dạng ISO 8601 string
 */

// Dữ liệu mẫu 1 bài viết chuẩn hóa
export const SAMPLE_ENTRY = {
  id: "1234",
  title: "Hôm nay học React",
  content: "Nội dung bài viết...",
  mood: 8, // Mức 8 - Vui vẻ (cheerful), hex: #43A047
  tags: ["react", "mindx"],
  createdAt: "2026-11-10T10:00:00Z",
  updatedAt: "2026-11-10T10:00:00Z",
};

// Danh sách bài viết mẫu để test giao diện và lưu trữ Dexie
export const SAMPLE_ENTRIES = [
  SAMPLE_ENTRY,
  {
    id: "1235",
    title: "Buổi chiều thư giãn đọc sách",
    content: "Đọc xong một chương sách hay về tâm lý học và nhâm nhi trà.",
    mood: 6, // Mức 6 - Thư thái (calm), hex: #C0CA33
    tags: ["relax", "reading"],
    createdAt: "2026-11-09T15:30:00Z",
    updatedAt: "2026-11-09T15:30:00Z",
  },
  {
    id: "1236",
    title: "Deadline dí sát nút",
    content: "Nhiều bài tập cần nộp trước cuối tuần, cảm thấy hơi áp lực.",
    mood: 3, // Mức 3 - Lo lắng (anxious), hex: #F4511E
    tags: ["school", "deadline"],
    createdAt: "2026-11-08T21:00:00Z",
    updatedAt: "2026-11-08T21:00:00Z",
  },
];

/**
 * Lấy thông tin chi tiết về tâm trạng của một entry theo số (1 - 9)
 * @param {Entry} entry
 */
export const getEntryMood = (entry) => getMoodByValue(entry?.mood);

/**
 * Hàm khởi tạo một bài viết rỗng mặc định
 * @returns {Entry}
 */
export const createDefaultEntry = () => ({
  id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
  title: "",
  content: "",
  mood: 5, // Mặc định ở mức 5 - Bình thường (neutral)
  tags: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export default SAMPLE_ENTRY;

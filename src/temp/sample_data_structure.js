const data = {
  id: "550e8400-e29b-41d4-a716-446655440000", // crypto.randomUUID()
  title: "Chiều Hồ Tây",
  moodId: "peaceful",
  contentJSON: {}, // Dữ liệu Tiptap
  plainText: "...", // Text thuần cho AI & Search
  images: ["data:image/webp;base64,..."], // Mảng ảnh đã nén & rút trích từ Tiptap
  createdAt: 1794451260000, // Date.now() lúc tạo bài
  updatedAt: 1794451260000, // Date.now() lúc tạo, cập nhật lại mỗi khi lưu sửa
};

console.log(data);

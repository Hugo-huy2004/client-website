const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Cấu hình thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, "public")));

// Route cho admin.html
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// Route cho client.html
app.get("/client", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "client.html"));
});

// Xử lý lỗi 404 (Không hiển thị lỗi nếu truy cập trang gốc "/")
app.get("/", (req, res) => {
  res.send("Welcome! No index.html file is needed.");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

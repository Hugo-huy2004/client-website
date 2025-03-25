const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Kiểm tra nếu thư mục "public" tồn tại trước khi serve file tĩnh
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

// Route cho admin.html
app.get("/admin", (req, res) => {
  res.sendFile(path.join(publicPath, "admin.html"));
});

// Route cho client.html
app.get("/client", (req, res) => {
  res.sendFile(path.join(publicPath, "client.html"));
});

// Xử lý trang gốc "/" nếu không có index.html
app.get("/", (req, res) => {
  res.send("<h1>Welcome! No index.html file is needed.</h1>");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

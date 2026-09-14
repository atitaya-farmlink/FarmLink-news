import { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const publishNews = () => {
    if (!title || !detail) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const news = JSON.parse(localStorage.getItem("news")) || [];

    const newNews = {
      title,
      detail,
      image,
      category,
      date: new Date().toLocaleDateString("th-TH"),
    };

    news.unshift(newNews);

    localStorage.setItem("news", JSON.stringify(news));

    alert("เผยแพร่ข่าวสำเร็จ ✅");

    setTitle("");
    setDetail("");
    setImage("");
    setCategory("");
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f9f4",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#2e7d32" }}>
          🛠️ Admin Dashboard
        </h1>

        <Link to="/">
          <button
            style={{
              marginBottom: "20px",
            }}
          >
            ← กลับหน้าข่าว
          </button>
        </Link>

        <input
          type="text"
          placeholder="หัวข้อข่าว"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          placeholder="รายละเอียดข่าว"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="URL รูปภาพ"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <option value="">เลือกหมวดหมู่</option>
          <option value="🌧️ สภาพอากาศ">
            🌧️ สภาพอากาศ
          </option>
          <option value="💰 ราคาตลาด">
            💰 ราคาตลาด
          </option>
          <option value="🎉 กิจกรรม">
            🎉 กิจกรรม
          </option>
          <option value="🏛️ ภาครัฐ">
            🏛️ ภาครัฐ
          </option>
        </select>

        <button
          onClick={publishNews}
          style={{
            width: "100%",
            backgroundColor: "#2e7d32",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          📢 เผยแพร่ข่าว
        </button>
      </div>
    </div>
  );
}

export default Admin;
import news from "../data/news.json";

function User() {
  return (
    <div
      style={{
        background: "#F5F9F4",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#fff",
          padding: "18px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#2E7D32", margin: 0 }}>🌱 FarmLink</h2>

        <div>
          <span style={{ marginLeft: 20 }}>ข่าวสาร</span>
          <span style={{ marginLeft: 20 }}>ราคาตลาด</span>
          <span style={{ marginLeft: 20 }}>สภาพอากาศ</span>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <p style={{ color: "#4CAF50" }}>
          🌱 Smart Agriculture Platform
        </p>

        <h1
          style={{
            color: "#2E7D32",
            fontSize: "48px",
            margin: "10px 0",
          }}
        >
          FarmLink
        </h1>

        <p style={{ fontSize: "18px", color: "#666" }}>
          เชื่อมโยงเกษตรกร ผู้บริโภค และข้อมูลด้านการเกษตรไว้ในที่เดียว
        </p>

        <button
          onClick={() =>
            document.getElementById("news")?.scrollIntoView()
          }
          style={{
            background: "#2E7D32",
            color: "#fff",
            border: "none",
            padding: "12px 22px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          อ่านข่าวล่าสุด
        </button>
      </section>

      {/* Features */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          padding: "0 8% 50px",
        }}
      >
        {[
          "📢 ข่าวประชาสัมพันธ์",
          "📈 ราคาตลาด",
          "🌦️ สภาพอากาศ",
          "🛒 Marketplace",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "#fff",
              padding: "22px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 2px 8px #0000000d",
            }}
          >
            {item}
          </div>
        ))}
      </section>

      {/* News */}
      <section
        id="news"
        style={{
          padding: "20px 8% 70px",
        }}
      >
        <h2>ข่าวสารการเกษตร</h2>

        {!news || news.length === 0 ? (
          <p>ยังไม่มีข่าวประชาสัมพันธ์</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {news.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 3px 12px #0000000d",
                }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                )}

                <div style={{ padding: "18px" }}>
                  <small style={{ color: "#4CAF50" }}>
                    {item.category}
                  </small>

                  <h3>{item.title}</h3>

                  <p style={{ color: "#666", lineHeight: 1.6 }}>
                    {item.detail}
                  </p>

                  <small style={{ color: "#999" }}>
                    📅 {item.date}
                  </small>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#2E7D32",
          color: "#fff",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © 2026 FarmLink · Smart Agricultural Platform
      </footer>
    </div>
  );
}

export default User;
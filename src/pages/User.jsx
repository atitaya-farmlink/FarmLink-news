import { Link } from "react-router-dom";

function User() {
  const news =
    JSON.parse(localStorage.getItem("news")) || [];

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
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2e7d32",
          }}
        >
          🌱 FarmLink News
        </h1>

        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <Link to="/admin">
            <button>
              ⚙️ จัดการข่าว
            </button>
          </Link>
        </div>

        {news.length === 0 ? (
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            ยังไม่มีข่าวประชาสัมพันธ์
          </div>
        ) : (
          news.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                marginBottom: "20px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt="ข่าว"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div style={{ padding: "20px" }}>
                <span>{item.category}</span>

                <h2>{item.title}</h2>

                <p>{item.detail}</p>

                <small>
                  📅 {item.date}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default User;
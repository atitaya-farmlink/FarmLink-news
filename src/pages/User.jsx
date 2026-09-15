import news from "../data/news.json";

function User() {
  if (!news || news.length === 0) {
    return (
      <div className="user-page">
        <h1>ข่าวประชาสัมพันธ์</h1>
        <p>ยังไม่มีข่าวประชาสัมพันธ์</p>
      </div>
    );
  }

  return (
    <div className="user-page">
      <h1>ข่าวประชาสัมพันธ์</h1>
      <div className="news-list">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="news-image"
              />
            ) : null}
            <div className="news-content">
              <span className="news-category">{item.category}</span>
              <h2 className="news-title">{item.title}</h2>
              <p className="news-detail">{item.detail}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
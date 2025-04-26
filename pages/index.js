import '../styles/globals.css';
// pages/index.js

export default function Home() {
    return (
      <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>SneakersUA Магазин</h1>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
          <div style={{ margin: "10px", padding: "20px", backgroundColor: "white", borderRadius: "10px", width: "200px", textAlign: "center" }}>
            <img src="/nike-logo.png" alt="Nike" style={{ width: "100px", height: "100px" }} />
            <h3>Nike</h3>
            <button style={{ marginTop: "10px" }}>Смотреть модели</button>
          </div>
          <div style={{ margin: "10px", padding: "20px", backgroundColor: "white", borderRadius: "10px", width: "200px", textAlign: "center" }}>
            <img src="/adidas-logo.png" alt="Adidas" style={{ width: "100px", height: "100px" }} />
            <h3>Adidas</h3>
            <button style={{ marginTop: "10px" }}>Смотреть модели</button>
          </div>
          {/* Добавим другие бренды так же */}
        </div>
      </div>
    );
  }
  
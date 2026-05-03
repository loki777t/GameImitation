
import { BUILDS_DATA } from "../data";

const Product = ({ id, onBack }) => {

  const build = BUILDS_DATA.find((item) => item.id === id);

  if (!build)
    return (
      <h1 style={{ padding: "50px", textAlign: "center" }}>
        Сборка не найдена
      </h1>
    );

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "50px",
      }}
    >
<div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

      {build.id === 1 && (
        <img
          src="./assets/maindesign.pdf/Light.png"
          alt={build.name}
          className="alive-img"
          style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain", display: "block", marginLeft: "-50px" }}
        />
      )}
      {build.id === 3 && (
        <img
          src="./assets/maindesign.pdf/Ultra.png"
          alt={build.name}
          className="alive-img"
          style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain", display: "block", marginLeft: "-50px" }}
        />
        
      )}
      {build.id === 2 && (
        <img
          src="./assets/maindesign.pdf/Pro.png"
          alt={build.name}
          className="alive-img"
          style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain", display: "block", marginLeft: "-50px" }}
        />
        
      )}  

      </div>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
          {build.name}
        </h2>

        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "1px solid #000",
            padding: "10px 15px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          ← НАЗАД
        </button>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #eee",
            width: "100%",
            marginBottom: "30px",
          }}
        />

        {build.benchmarks && (
          <div style={{ marginTop: "40px" }}>
            
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {build.benchmarks.map((test, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {test.label}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "900" }}>
                    {test.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          style={{
            marginTop: "40px",
            padding: "30px",
            border: "1px solid #000",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: "900",
              marginBottom: "20px",
            }}
          >
            {build.price.toLocaleString()} ₽
          </div>
          <a
            href="https://web.telegram.org/k/#@Game_Imitation_Bot"
            style={{
              display: "block",
              backgroundColor: "#5900ff",
              color: "#000000",
              padding: "15px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            ПЕРЕЙТИ К ПОКУПКЕ
          </a>
        </div>
      </div>
    </div>
  );
};

import './Product.css';
export default Product;


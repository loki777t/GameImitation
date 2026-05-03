const About = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <section style={{ padding: "80px 50px", borderBottom: "1px solid #eee" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          О проекте
        </h1>
      </section>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50px",
          left: "700px",
          width: "30%",
          height: "30%",
          objectFit: "cover",
          opacity: 0.6,
          filter: "brightness(1.2) contrast(1.2)",
          transform: "scaleX(-1)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      >
        <source src="public/assets/bg3.mp4" type="video/mp4" />
      </video>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ padding: "60px 50px", borderRight: "1px solid #eee" }}>
          <h2
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              color: "#000000",
              marginBottom: "40px",
            }}
          >
          <h2>НАША МИССИЯ</h2>
          </h2>
          <p style={{ fontSize: "24px", lineHeight: "1.4", fontWeight: "500" }}>
           Наша цель: сделать так, чтобы ПК клиента выдавал на 30–70% больше FPS в любимых проектах, оставаясь стабильным и холодным. Мы не продаём новое железо — мы раскрываем потенциал того, что уже есть у клиента.
          </p>
        </div>
        <div
          style={{
            padding: "60px 50px",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.6" }}>
Проект Game Imitation стремится сократить разрыв между владельцем флагманской видеокарты и человеком с ПК среднего или начального уровня. Производительность не должна быть роскошью — это вопрос правильной настройки.
            в сборке.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default About;

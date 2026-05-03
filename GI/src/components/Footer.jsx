import logo from "/assets/maindesign.pdf/normlogo.png";

const Footer = ({ onNavigate }) => {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #eee",
        padding: "80px 50px 40px 50px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "50px",
          marginBottom: "60px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0px", marginBottom: "30px",left:"20px" }}>
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
            <span style={{fontSize: "24px", fontWeight: "bold", color: "#000", marginLeft: "5px",marginTop:"20px"}}>Imitation</span>
          </div>
          <p
            style={{
              color: "#888",
              fontSize: "14px",
              lineHeight: "1.6",
              maxWidth: "300px",
            }}
          >
            Хороший буст совсем близко забирай и кайфуй.
            Быстро и четко.
          </p>
        </div>

        <div>
          <h4
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            НАВИГАЦИЯ
          </h4>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <button onClick={() => onNavigate("catalog")} style={footerLinkStyle}>
              КАТАЛОГ
            </button>
            <button onClick={() => onNavigate("about")} style={footerLinkStyle}>
              О ПРОЕКТЕ
            </button>
            <button onClick={() => onNavigate("support")} style={footerLinkStyle}>
              ПОДДЕРЖКА
            </button>
          </nav>
        </div>

        <div>
          <h4
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            СВЯЗЬ
          </h4>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <a href="https://t.me/hillmepercovka" style={footerLinkStyle}>
              TELEGRAM
            </a>
            <a href="mailto:work@example.com" style={footerLinkStyle}>
              EMAIL
            </a>
          </nav>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #eee",
          paddingTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "10px",
          color: "#bbb",
          letterSpacing: "1px",
        }}
      >
        <span>© 2026 GameImitation</span>
        <span>ОСН. 2026 / ВЛАДИВОСТОК</span>
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  fontSize: "12px",
  color: "#000",
  textDecoration: "none",
  fontWeight: "500",
  background: "none",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
};

export default Footer;

import logo from "/assets/maindesign.pdf/normlogo.png";

const Header = ({ currentPage, onNavigate }) => {
  const pages = [
    { id: "catalog", label: "КАТАЛОГ" },
    { id: "about", label: "О ПРОЕКТЕ" },
    { id: "support", label: "ПОДДЕРЖКА" },
  ];

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 50px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Logo" style={{ height: "70px" }} />
      </div>
      <nav style={{ display: "flex", gap: "30px" }}>
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onNavigate(page.id)}
            style={{
              ...linkStyle,
              background: "none",
              border: "none",
              cursor: "pointer",
              opacity: currentPage === page.id ? 1 : 0.5,
            }}
          >
            {page.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

const linkStyle = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#000",
  textDecoration: "none",
  letterSpacing: "1px",
};

export default Header;

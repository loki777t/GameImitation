import React from "react";

const Catalog = ({ onProductClick }) => {
  const [hoveredProduct, setHoveredProduct] = React.useState(null);

  const handleMouseEnter = (id) => setHoveredProduct(id);
  const handleMouseLeave = () => setHoveredProduct(null);
  return (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "transparent",
        boxSizing: "border-box"
      }}>


     <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.6,
          filter: "brightness(1.2) contrast(1.2)",
          transform: "scaleX(-1)",
          zIndex: 4,
          pointerEvents: "none"
        }}
      >
        <source src="public/assets/bg2.mp4" type="video/mp4" />
      </video>

      
      <div style={{
        maxWidth: "1200px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 20px",
        position: "relative",
        zIndex: 10,
        backgroundColor: "rgba(255, 255, 255, 0.85)"


      }}>
        <h1 style={{
          margin: "60px 0 60px 0",
          color: "#000",
          fontSize: "3rem",
          textAlign: "center",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        }}>
          КАТАЛОГ:
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "60px",
            width: "100%"
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={() => onProductClick(1)}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="./assets/maindesign.pdf/Rectangle 6.png"
                alt="Gaming PC Basic"
                style={{ width: "350px", height: "auto" }}
              />
              <img 
                src="./assets/maindesign.pdf/Group 6.png" 
                alt="Group 6" 
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "15px",
                  width: "80%",
                  height: "auto"
                }}
              />
              <img
                src="./assets/maindesign.pdf/button.png"
                alt="Button"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "55%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: "auto",
                  cursor: "pointer",
                  zIndex: 5,
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  transform: hoveredProduct === 1 ? "scale(1.05) translateY(-5px) translateX(-50%)" : "translateX(-50%)",
                  
                }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              />
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "33px",
                bottom: "60px",
                
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 20px",
                color: "#000",
                
              }}>
                <h1 style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  textAlign: "center",
                  color: "#000",
                  margin: 0,
                  textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                  maxWidth: "90%"
                }}>Чистка системы + приоритет процессов.<br/>Подними FPS на 15-20% в дота 2 и кс.<br/>Без лишних настроек — включил и забыл.</h1>
              </div>
            </div>
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => onProductClick(2)}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="./assets/maindesign.pdf/Rectangle 8.png"
                alt="Gaming PC Pro"
                style={{ width: "350px", height: "auto" }}
              />
              <img 
                src="./assets/maindesign.pdf/Group 7.png" 
                alt="Group 7" 
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "40px",
                  width: "80%",
                  height: "auto"
                }}
              />
              <img
                src="./assets/maindesign.pdf/button.png"
                alt="Button"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "60%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: "auto",
                  cursor: "pointer",
                  zIndex: 5,
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  transform: hoveredProduct === 2 ? "scale(1.05) translateY(-5px) translateX(-50%)" : "translateX(-50%)",
                  
                }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              />
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "60px",
                
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 20px",
                color: "#000",
              }}>
                <h1 style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  textAlign: "center",
                  color: "#000",
                  margin: 0,
                  textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                  maxWidth: "90%"
                }}>Разгон скрытых резервов. Снимаем софт-блоки видеокарты и процессора. Уберет «фризы» (резкие зависания) и просадки. Средний прирост +30-40 FPS.</h1>
              </div>
            </div>
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => onProductClick(3)}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="./assets/maindesign.pdf/Rectangle 7.png"
                alt="Gaming PC Ultimate"
                style={{ width: "350px", height: "auto" }}
              />
              <img 
                src="./assets/maindesign.pdf/Group 10.png" 
                alt="Group 10" 
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "60px",
                  width: "80%",
                  height: "auto"
                }}
              />
              <img
                src="./assets/maindesign.pdf/button.png"
                alt="Button"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "65%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: "auto",
                  cursor: "pointer",
                  zIndex: 5,
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  transform: hoveredProduct === 3 ? "scale(1.05) translateY(-5px) translateX(-50%)" : "translateX(-50%)",
                 
                }}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              />
              <div style={{
                position: "absolute",
                top: "0",
                left: "33px",
                right: "0",
                bottom: "60px",
                
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 20px",
                color: "#000",
              }}>
                <h1 style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  textAlign: "center",
                  color: "#000",
                  margin: 0,
                  textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                  maxWidth: "90%"
                }}>Драйвер + твикер низкой задержки. Все настройки NVIDIA/AMD под ноль (режим бога). Отключает телеметрию и фоновый мусор. Ping снижается, картинка плавнее.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
            margin: 40px 0 !important;
          }
          img[width="350px"] {
            width: 280px !important;
          }
          div[style*="gap: \"40px\""] {
            gap: 20px !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="padding: \"20px\""] {
            padding: 10px !important;
          }
          img[width="350px"] {
            width: 250px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Catalog;

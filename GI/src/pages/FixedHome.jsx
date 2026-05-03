import { useState } from "react";

const Home = ({ onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleTelegramClick = () => {
    window.open("https://web.telegram.org/k/#-3886940286", "_blank");
  };

  const handleButtonClick = () => {
    onNavigate("catalog");
  };

  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      backgroundColor: 'rgba(255,255,255,0.6)' 
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
          zIndex: 1,
          pointerEvents: "none"
        }}
      >
        <source src="public/assets/beacground.mp4" type="video/mp4" />
      </video>
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        padding: "100px 50px", 
        backgroundColor: "rgba(255, 255, 255, 0.6)", 
        minHeight: "100vh", 
        color: "#000" 
      }}>
        <section
          style={{ borderBottom: "1px solid #eee", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "800",
              margin: "0 0 60px 0",
              textTransform: "uppercase",
              lineHeight: "0.9",
            }}
          >
           Быстрый и удобный способ поднять FPS в любимых играх
          </h1>
          <p
            style={{
              maxWidth: "600px",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#333",
            }}
          >
            Уберает лаги,понижает задержку,повышает плавность           
          </p>
          <div
            style={{
              width: "450px",
              height: "1px",
              backgroundColor: "#000000",
              borderRadius: "2px",
              marginTop: "3px",
            }}
          />
          <img 
            src="./assets/maindesign.pdf/кнопка.png" 
            alt="кнопка" 
            style={{
              marginTop: "30px",
              marginLeft: "100px",
              maxWidth: "317px",
              maxHeight: "202px",
              cursor: "pointer",
              alignSelf: "center",
              transition: "transform 0.3s ease, boxShadow 0.3s ease",
              transform: isButtonHovered ? "scale(1.05) translateY(-5px)" : "scale(1)",
            }} 
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={handleButtonClick}
          />

          {/* Images Container - Horizontal Row */}
          <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "flex-start", 
            width: "100%", 
            gap: "10px",
            flexWrap: "nowrap"
          }}>
            <div style={{ display: "block", textAlign: "left" }}>
              <img 
                src="./assets/maindesign.pdf/Group 1.png" 
                alt="Group 1" 
                style={{
                  maxWidth: "130%",
                  height: "auto",
                }}
              />
            </div>

            <div style={{ display: "block", textAlign: "left" }}>
              <img 
                src="./assets/maindesign.pdf/Group 2.png" 
                alt="Group 2"
                style={{
                  maxWidth: "105%",
                  height: "auto",
                  marginTop: "250px"
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: "-300px", textAlign: "right" }}>
              <img 
                src="./assets/maindesign.pdf/Rectangle 4.png" 
                alt="Rectangle 4" 
                style={{
                  maxWidth: "80%",
                  height: "auto",
                }}
              />
              <h1 style={{ marginTop: "-160px", fontSize: "40px", color: "#333", transform: "translate(-400px)" }}>Переходи в наш тг</h1>
          </div>

          <div style={{transform: isHovered ? "translate(290px) scale(1.05)" : "translate(290px)", marginTop:"-110px", cursor: "pointer"}}>
            <img 
              src="./assets/maindesign.pdf/кнопка тг.png" 
              alt="кнопка тг"
              style={{
                transition: "transform 0.3s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleTelegramClick}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;


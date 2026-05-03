import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/FixedHome";
import Catalog from "./pages/Catalog.jsx";
import About from "./pages/About";
import Support from "./pages/Support";
import Product from "./pages/Product";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedProductId(null);
  };

  const handleProductClick = (id) => {
    setSelectedProductId(id);
  };

  const handleBackToCatalog = () => {
    setSelectedProductId(null);
  };

  const renderPage = () => {
    if (selectedProductId) {
      return <Product id={selectedProductId} onBack={handleBackToCatalog} />;
    }

    switch (currentPage) {
      case "catalog":
        return <Catalog onProductClick={handleProductClick} />;
      case "about":
        return <About />;
      case "support":
        return <Support />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}
    >
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main style={{ backgroundColor: "#fff", flex: 1 }}>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

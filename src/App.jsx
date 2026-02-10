import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./modules/ProductPage";
import AboutPage from "./modules/AboutPage";

function App() {

  return (
    <BrowserRouter>
      <nav style={{ padding: '15px', background: '#2196F3', color: 'white' }}>
        <Link to="/" style={{ marginRight: '20px', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Trang chủ</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Giới thiệu</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

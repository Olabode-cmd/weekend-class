import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/about.jsx";
import Profile from "./pages/profile.jsx";
import Products from "./pages/products.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>
);

// npm run dev
// npx yarn dev

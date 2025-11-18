// src/App.js
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "@/App.css";

// Pages
import HomePage from "@/pages/HomePage";
import Article1 from "@/pages/Article1";
import Article2 from "@/pages/Article2";
import Article3 from "@/pages/Article3";
import Article4 from "@/pages/Article4";
import Article5 from "@/pages/Article5";
import SerialKillers from "@/pages/SerialKillers";
import ColdCases from "@/pages/ColdCases";
import CourtJudgments from "@/pages/CourtJudgments";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  // Backend test call (optional)
  useEffect(() => {
    const helloWorldApi = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log("Backend:", response.data.message);
      } catch (e) {
        console.error("Backend error:", e);
      }
    };

    helloWorldApi();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Articles */}
          <Route path="/article/dahmer" element={<Article1 />} />
          <Route path="/article/jaishankar" element={<Article2 />} />
          <Route path="/article/sharma" element={<Article3 />} />
          <Route path="/article/gacy" element={<Article4 />} />
          <Route path="/article/jha" element={<Article5 />} />

          {/* Categories */}
          <Route path="/serial-killers" element={<SerialKillers />} />
          <Route path="/cold-cases" element={<ColdCases />} />
          <Route path="/court-judgments" element={<CourtJudgments />} />

          {/* Info */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Default fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

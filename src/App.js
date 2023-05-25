import "./App.css"
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { CharacterInfo } from "./pages/CharacterInfo";
import { Conditions } from "./pages/Conditions";

export function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="character/:id" element={<CharacterInfo />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}


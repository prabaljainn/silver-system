import "./styles/App.css";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Showcase from "./pages/Showcase";
// import ParticleBackground from "./components/background";
function App() {
  return (
    // <ParticleBackground>
    <div className="main-content">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </div>
    // </ParticleBackground>
  );
}

export default App;

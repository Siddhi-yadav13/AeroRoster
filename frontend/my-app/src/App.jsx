import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/organs/MainPage";
import ResultPage from "./components/organs/ResultPage";
import StationPage from "./components/organs/StationPage";
import LoginPage from "./components/organs/Login";
import Contact from "./components/organs/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stations" element={<StationPage />} />
        <Route path="/stations/:code" element={<ResultPage />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );cc
}

export default App;
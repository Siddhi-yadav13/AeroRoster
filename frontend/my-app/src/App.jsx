import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/organs/MainPage";
import ResultPage from "./components/organs/ResultPage";
import StationPage from "./components/organs/StationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/stations" element={<StationPage />} />
        <Route path="/stations/:code" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
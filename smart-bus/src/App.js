import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import SearchBusPage from "./SearchBusPage";
import ResultsPages from "./ResultsPages";
import ReportIssuePage from "./ReportIssuePage";
import BusTrackingPage from "./pages/BusTrackingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/" element={<SearchBusPage />} />
        <Route path="/results" element={<ResultsPages />} />
        <Route path="/track-bus" element={<BusTrackingPage />} />
        <Route path="/report" element={<ReportIssuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
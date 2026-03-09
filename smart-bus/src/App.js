import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBusPage from "../../SearchBusPage";
import ResultsPage from "./ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBusPage />} />
          <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
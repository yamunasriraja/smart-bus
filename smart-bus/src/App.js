import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBusPage from "../../SearchBusPage";
import ResultsPage from "./ResultsPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBusPage />} />
          <Route path="/results" element={<ResultsPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
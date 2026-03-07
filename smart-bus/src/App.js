import { Routes, Route } from "react-router-dom";
import SearchBusPage from "./SearchBusPage";
import BusResultsPage from "./BusResultsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchBusPage />} />
      <Route path="/results" element={<BusResultsPage />} />
    </Routes>
  );
}

export default App;
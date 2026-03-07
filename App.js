import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBusPage from "./SearchBusPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBusPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
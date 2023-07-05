import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
import Log from "./pages/Log";
import CreeazaCont from "./pages/CreeazaCont";
import Dashboard from "./pages/Dashboard";
import Dosare from "./pages/Dosare";
import CreeazaDosare from "./pages/CreeazaDosare";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dosar-transport" element={<DosarTransportPage />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/CreeazaCont" element={<CreeazaCont />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dosare" element={<Dosare />} />
          <Route path="/CreeazaDosare" element={<CreeazaDosare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

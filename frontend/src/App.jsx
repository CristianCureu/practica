import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import StatusPage from "./pages/StatusPage";
import UpdateDosarPage from "./pages/UpdateDosarPage"
import DetailsDosarPage from "./pages/DetailsDosarPage"
import CreateDosarPage from "./pages/CreateDosarPage"
import FacturiDosarPage from "./pages/FacturiDosarPage"
import UpdateStatusPage from "./pages/UpdateStatusPage"
import DosarPage from "./pages/ScanDosarPage";
;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/dosar-transport" element={<DosarTransportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/updatestatus/:id" element={<UpdateStatusPage />} />
          <Route path="/facturi/:idDosar" element={<FacturiDosarPage />} />
          <Route path="/updatedosar/:id" element={<UpdateDosarPage />} />
          <Route path="/detaliidosar/:id" element={<DetailsDosarPage />} />
          <Route path="/createdosar" element={<CreateDosarPage />} />

          <Route path="/scan/dosar/:idDosar" element={<DosarPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import StatusPage from "./pages/StatusPage";
import Facturi from "./pages/Facturi"
import UpdateDosarPage from "./pages/UpdateDosarPage"
import DetailsDosarPage from "./pages/DetailsDosarPage"
import CreateDosarPage from "./pages/CreateDosarPage"

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
          <Route path="/facturi" element={<Facturi />} />
          <Route path="/createdosar" element={<CreateDosarPage />} />
          <Route path="/updatedosar/:id" element={<UpdateDosarPage />} />
          <Route path="/detaliidosar/:id" element={<DetailsDosarPage />} />
          <Route path="/createdosar" element={<CreateDosarPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
<<<<<<<<< Temporary merge branch 1
=========
import Users from "./pages/Users";
import StatusPage from "./pages/StatusPage";
import UpdateStatusPage from "./pages/UpdateStatusPage";
import UpdateDosarPage from "./pages/UpdateDosarPage";
import DetailsDosarPage from "./pages/DetailsDosarPage";
import CreateDosarPage from "./pages/CreateDosarPage";
import FacturiDosarPage from "./pages/FacturiDosarPage";

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

          <Route path="/users" element={<Users />} />
          <Route path="/createstatus" element={<CreateStatusPage/>}/>
          <Route path="/status" element={<StatusPage />} />
          <Route path="/updatestatus/:id" element={<UpdateStatusPage />} />
          <Route path="/updatedosar/:id" element={<UpdateDosarPage />} />
          <Route path="/detaliidosar/:id" element={<DetailsDosarPage />} />
          <Route path="/facturi/:id" element={<FacturiDosarPage />} />
          <Route path="/createdosar" element={<CreateDosarPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
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
import DosarPage from "./pages/ScanDosarPage"
import UsersPage from "./pages/UsersPage"
import { createContext, useState } from "react";
// structura pentru userContext
let userContext = JSON.stringify({
  loggedId: false,
  user: "",
  role: "sofer",
  name: "",
  auto: "",
});
export const UserContext = createContext(null);
function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userContext") || userContext)
  );
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
  
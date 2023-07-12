import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import Users from "./pages/UsersPage";

import StatusPage from "./pages/StatusPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dosar-transport" element={<DosarTransportPage />} />
          <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/users" element={<Users />} />
=======
          <Route path="/status" element={<StatusPage />} />
          <Route path="/users" element={<Users />} />

>>>>>>> 2ab9898bca069ba63d61b87728606882e7d24904
        </Routes>
      </Router>
    </div>
  );
}

export default App;

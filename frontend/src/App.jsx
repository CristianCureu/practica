import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

=======
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
>>>>>>> main

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
      <Navbar/>
=======
        <Navbar/>
>>>>>>> main
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/dosar-transport" element={<DosarTransportPage />} />
          <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
          <Route path="/register" element={<RegisterPage />} />
          
=======
>>>>>>> main
        </Routes>
      </Router>
    </div>
  );
}

export default App;

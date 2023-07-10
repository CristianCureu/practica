import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";

import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import Users from "./pages/Users";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/dosar-transport" element={<DosarTransportPage />} />

          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/users" element={<Users/>}/>

         
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosarTransportPage from "./pages/DosarTransportPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
<<<<<<<<< Temporary merge branch 1
=========
import Users from "./pages/Users";
>>>>>>>>> Temporary merge branch 2

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
<<<<<<<<< Temporary merge branch 1
=========
          <Route path="/users" element={<Users />} />
>>>>>>>>> Temporary merge branch 2
        </Routes>
      </Router>
    </div>
  );
}

export default App;
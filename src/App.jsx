import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CriminalCase from "./components/CriminalCase/CriminalCase";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/criminal-case" element={<CriminalCase />} />
        <Route path="/login-page" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
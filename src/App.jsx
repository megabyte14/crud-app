import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CriminalCase from "./components/CriminalCase/CriminalCase";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/criminal-case" element={<CriminalCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
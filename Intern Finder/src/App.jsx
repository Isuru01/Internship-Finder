import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Search,
  Job,
  Admin,
  Dashboard,
  SignIn,
  SignUp,
} from "./pages/index.mjs";
import "./App.css";
import LogRoute from "./privateroute/LogRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/search"
          element={
            <LogRoute>
              <Search />
            </LogRoute>
          }
        />
        <Route
          path="/job/:jid"
          element={
            <LogRoute>
              <Job />
            </LogRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <LogRoute>
              <Dashboard />
            </LogRoute>
          }
        />
        <Route path="/admin/dashboard/:type/:action?" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  return (
    <>
      <Nav role={role} setRole={setRole} />

      <Routes>
        <Route
          path="/"
          element={role ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/addproduct"
          element={
            role === "admin" ? (
              <AddProduct />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/about"
          element={role ? <About /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login setRole={setRole} />}
        />
      </Routes>
    </>
  );
}

export default App;
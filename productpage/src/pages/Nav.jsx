import { Link, useNavigate } from "react-router-dom";

function Nav({ role, setRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole(null);      // ✅ important
    navigate("/login");
  };

  return (
    <nav style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      {role && (
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
      )}

      {role === "admin" && (
        <Link to="/addproduct" style={{ marginRight: "10px" }}>
          Add Product
        </Link>
      )}

      {role && (
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
      )}

      {!role ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}

export default Nav;
import { Link } from "react-router-dom";


function Nav() {
  return (
    <ul style={{ display: "flex", gap: "20px" }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/addproduct">Add Product</Link></li>
    </ul>
  );
}

export default Nav;

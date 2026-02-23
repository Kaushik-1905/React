import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  const navigate = useNavigate();

  // ✅ Protect route (admin only)
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/products", {
        ...product,
        price: Number(product.price)
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
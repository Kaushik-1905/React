import React, { useEffect, useState } from "react";

function ProductStockAlert() {
  const [products, setProducts] = useState([]);
  const [lowStockItems, setLowStockItems] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();


        const productsWithStock = data.map((item) => ({
          ...item,
          stock: Math.floor(Math.random() * 10),
        }));

        setProducts(productsWithStock);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

 
  useEffect(() => {
    const lowStock = products.filter((product) => product.stock < 5);
    setLowStockItems(lowStock);
  }, [products]);

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          {product.title} - Stock: {product.stock}
        </div>
      ))}

      
      <div style={styles.alertContainer}>
        {lowStockItems.map((item) => (
          <div key={item.id} style={styles.alert}>
            ⚠ Low Stock: {item.title} ({item.stock} left)
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  alertContainer: {
    position: "fixed",
    top: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  alert: {
    backgroundColor: "#ff4d4f",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

export default ProductStockAlert;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/productAction";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: Date.now(),
      name,
      price,
    };

    console.log(product); // console log here

    dispatch(addProduct(product));

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Product Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
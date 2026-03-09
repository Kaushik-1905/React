import React, { useState } from "react";
import "./style.css";

function AddReview() {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      name,
      comment,
      rating,
      image
    };

    const oldData = JSON.parse(localStorage.getItem("reviews")) || [];

    const updatedData = [...oldData, newReview];

    localStorage.setItem("reviews", JSON.stringify(updatedData));

    alert("Review Added!");

    setName("");
    setComment("");
    setRating("");
    setImage("");
  };

  return (
    <div>
      <h2>Add Review</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <br/><br/>

        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />

        <br/><br/>

        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e)=>setRating(e.target.value)}
        />

        <br/><br/>

        <input type="file" onChange={handleImage} />

        <br/><br/>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default AddReview;
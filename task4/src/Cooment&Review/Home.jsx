import React, { useEffect, useState } from "react";
import "./style.css";

function Home() {

  const [reviews, setReviews] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(data);
  }, []);

  const deleteReview = (id) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
  };

  const sortReviews = (order) => {
    setSortOrder(order);

    const sorted = [...reviews].sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);   // A-Z
      } else {
        return b.name.localeCompare(a.name);   // Z-A
      }
    });

    setReviews(sorted);
  };

  return (
    <div>

      <h2>Home Page</h2>

      {/* Sorting Buttons */}
      <div style={{marginBottom:"20px"}}>
        <button onClick={() => sortReviews("asc")}>
          Sort A-Z
        </button>

        <button onClick={() => sortReviews("desc")} style={{marginLeft:"10px"}}>
          Sort Z-A
        </button>
      </div>

      {reviews.map((r) => (
        <div
          key={r.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{r.name}</h3>

          {r.image && (
            <img
              src={r.image}
              alt=""
              width="150"
            />
          )}

          <p>{r.comment}</p>

          <strong>Rating: {r.rating}</strong>

          <br /><br />

          <button onClick={() => deleteReview(r.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default Home;
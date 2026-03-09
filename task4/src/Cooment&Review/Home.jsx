import React, { useEffect, useState } from "react";
import "./style.css";

function Home() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(data);
  }, []);

  const deleteReview = (id) => {

    const updated = reviews.filter(r => r.id !== id);

    setReviews(updated);

    localStorage.setItem("reviews", JSON.stringify(updated));
  };

  return (
    <div>

      <h2>Home Page</h2>

      {reviews.map((r)=>(
        <div key={r.id} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

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

          <br/><br/>

          <button onClick={()=>deleteReview(r.id)}>
            Delete
          </button>


        </div>
      ))}

    </div>
  );
}

export default Home;
import React, { useEffect, useState } from "react";
import "./style.css";

function ViewReviews(){

  const [reviews,setReviews] = useState([]);
  const [editId,setEditId] = useState(null);
  const [editComment,setEditComment] = useState("");

  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(data);

  },[]);

  const deleteReview = (id)=>{

    const updated = reviews.filter(r=>r.id!==id);

    setReviews(updated);

    localStorage.setItem("reviews",JSON.stringify(updated));
  };

  const startEdit = (r)=>{

    setEditId(r.id);
    setEditComment(r.comment);
  };

  const saveEdit = ()=>{

    const updated = reviews.map(r=>{
      if(r.id===editId){
        return {...r,comment:editComment};
      }
      return r;
    });

    setReviews(updated);
    localStorage.setItem("reviews",JSON.stringify(updated));
    setEditId(null);
  };

  return(

    <div>

      <h2>All Reviews</h2>

      {reviews.map((r)=>(

        <div key={r.id} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>

          <h3>{r.name}</h3>

          {r.image && (
            <img src={r.image} alt="" width="150"/>
          )}

          {editId === r.id ? (

            <>
              <textarea
                value={editComment}
                onChange={(e)=>setEditComment(e.target.value)}
              />

              <br/>

              <button onClick={saveEdit}>
                Save
              </button>

            </>

          ) : (

            <p>{r.comment}</p>

          )}

          <strong>Rating: {r.rating}</strong>

          <br/><br/>

          <button onClick={()=>startEdit(r)}>
            Edit
          </button>

          <button onClick={()=>deleteReview(r.id)}>
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default ViewReviews;
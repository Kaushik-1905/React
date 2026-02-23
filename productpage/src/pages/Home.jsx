// import { useEffect, useState } from "react";
// import axios from "axios";

// function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//   axios.get("http://localhost:5001/products")
//     .then(res => setProducts(res.data))
//     .catch(err => console.log(err));
// }, []);


//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Products</h2>

//       {products.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             border: "1px solid gray",
//             margin: 10,
//             padding: 10,
//             width: "200px"
//           }}
//         >
//           <h3>{item.name}</h3>
//           <p>Price: {item.price}</p>
//           <p>Category: {item.category}</p>

//           {item.image && (
//             <img
//               src={item.image}
//               alt="product"
//               width="150"
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;


import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      
      {/* Flex container for grid layout */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "200px",
              borderRadius: "8px"
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
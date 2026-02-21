import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);


  const getDog = () => {
    setData(null);

    fetch("https://api.thedogapi.com/v1/images/search?limit=1")
      .then((response) => response.json())
      .then((json) => setData(json));
  };


  useEffect(() => {
    getDog();
  }, []);

  return (
    <div>
      <h1>Dog API</h1>

      {data ? (
        <img src={data[0].url} alt="dog" width="300" />
      ) : (
        <p>Loading...</p>
      )}

      <br /><br />

      <button onClick={getDog} style={{position: "fixed",bottom: "20px",left: "50%",}} >
        Get New Dog
      </button>
    </div>
  );
}

export default App;

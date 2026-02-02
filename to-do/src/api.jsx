import { useState } from "react";

function RandomUser() {
  // Default data
  const [user, setUser] = useState({
    name: "Default User",
    image: "https://via.placeholder.com/150"
  });

  const getRandomUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    const randomUser = data.results[0];

    setUser({
      name: `${randomUser.name.first} ${randomUser.name.last}`,
      image: randomUser.picture.large
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Random User</h2>

      <img
        src={user.image}
        alt="user"
        style={{ width: "150px", borderRadius: "50%" }}
      />

      <h3>{user.name}</h3>

      <button onClick={getRandomUser}>
        Get Random User
      </button>
    </div>
  );
}

export default RandomUser;

import React, { useEffect, useState } from "react";

function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);


    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{width: "15px",height: "15px",borderRadius: "50%",backgroundColor: isOnline ? "green" : "red",}}></div>

      <span>{isOnline ? "Online" : "Offline"}</span>
    </div>
  );
}

export default OnlineStatus;

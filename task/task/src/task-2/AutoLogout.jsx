import React, { useEffect, useRef, useState } from "react";

function AutoLogout() {
  const [expired, setExpired] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const logout = () => {
      setExpired(true);
    };

    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(logout, 1000); 
    };

    
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    
    resetTimer();

    
    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  return (
    <div>
      <h2>Auto Logout Demo</h2>

      {expired ? (
        <div style={{ color: "red", fontWeight: "bold" }}>
          Session expired
        </div>
      ) : (
        <p>Move mouse or press any key to stay logged in.</p>
      )}
    </div>
  );
}

export default AutoLogout;

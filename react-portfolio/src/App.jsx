import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Pages/Loder";
import Hero from "./Pages/Hero";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && <Hero />}
    </>
  );
}

export default App;
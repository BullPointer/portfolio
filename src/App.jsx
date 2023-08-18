import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotfoundPage } from "./components";

const App = () => {
  const handleScrollTo = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener("load", handleScrollTo);
    return () => window.removeEventListener("load", handleScrollTo);
  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotfoundPage /> } />
        <Route path="/" element={<Home /> } />
        <Route path="/:page" element={<Home /> } />
      </Routes>
    </>
  );
};

export default App;

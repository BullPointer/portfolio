import { useEffect } from "react";
import {
  Welcome,
  Navbar,
  About,
  Projects,
  Contact,
  Footer,
} from "./components";

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
      <div id="home" className="gradient-bg-welcome h-auto md:h-screen">
        <Navbar />
        <Welcome />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

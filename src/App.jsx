import { Welcome, Navbar, About, Projects, Contact, Footer } from "./components";
const App = () => {
  return (
    <>
      <div className="gradient-bg-welcome h-auto md:h-screen">
        <Navbar />
        <Welcome />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Dodaj Routes i Route
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About"; // Przykład komponentu o stronie "About"
import Works from "./components/sections/Works"; // Przykład komponentu o stronie "Works"
import Contact from "./components/sections/Contact"; // Przykład komponentu o stronie "Contact"
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Symulacja ładowania treści np. API, obrazów
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2500); // Możesz dostosować czas trwania
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen />} {/* Pokazuje ekran ładowania */}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar />

        <Routes>
          {" "}
          {/* Dodaj Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

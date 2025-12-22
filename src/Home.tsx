import "./App.css";

import { useState, useEffect } from "react";
import "@radix-ui/themes/styles.css";
import Lander from "./components/Lander";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

function Home() {
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = 750;
      if (window.scrollY > scrollPoint) {
        setBgColor("#EEF1F4"); // New background color
      } else {
        setBgColor("black"); // Original background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1s ease",
      }}
    >
      <Nav />
      <Lander />

      <Experiences />

      <section className="side-spacing flex flex-col justify-center items-center">
        <Projects />
        <Footer />
      </section>
    </section>
  );
}

export default Home;

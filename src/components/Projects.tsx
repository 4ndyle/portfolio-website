import BlurFade from "./ui/blur-fade";
import { useState, useEffect } from "react";

function Projects() {
  return (
    <section className="flex flex-col items-center my-96">
      <div className="flex flex-col">
        <h2 className="text-7xl font-bold my-16 text-left max-md:text-6xl max-md:text-center max-[550px]:text-5xl">
          Latest Work.
        </h2>
        <div className="flex gap-8 max-[550px]:justify-center">
          <ProjectCards />
        </div>
      </div>
    </section>
  );
}

function ProjectCards() {
  const defaultCalc = "calculator.png";
  const mobileCalc = "calculatorLogo.png";
  const defaultBulbasaur = "bulbasaur.png";
  const mobileBulbasaur = "mobileBulbasaur.png";
  const [calcImage, setCalcImage] = useState(defaultCalc);
  const [bulbasaurImage, setBulbasaurImage] = useState(defaultBulbasaur);

  useEffect(() => {
    const handleImage = () => {
      if (window.innerWidth > 550) {
        // non-mobile device image
        setCalcImage(defaultCalc);
        setBulbasaurImage(defaultBulbasaur);
      } else {
        // mobile devices image
        setCalcImage(mobileCalc);
        setBulbasaurImage(mobileBulbasaur);
      }
    };

    // Call handleImage initially to set the correct image based on the initial window width
    handleImage();
    window.addEventListener("resize", handleImage);

    return () => {
      window.removeEventListener("resize", handleImage);
    };
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex gap-8">
        <BlurFade delay={0.5} inView className="w-full ">
          <a href="https://voxel51.codestacx.com/" target="_blank">
            <div className="flex flex-col">
              <img
                src={bulbasaurImage}
                alt="bulbasaur"
                className="rounded-[50px] hover:shadow-2xl max-[550px]:w-[250px] max-[550px]:aspect-square"
                id="bulbasaur"
              />
              <h4> Bulbasaur</h4>
              <p className="projDesc"> Wildfire Detection System </p>
            </div>
          </a>
        </BlurFade>
      </div>
      <div className="flex gap-8 max-[550px]:flex-col max-[550px]:items-center max-[550px]">
        <BlurFade
          delay={0.5}
          inView
          className="w-2/3 max-md:w-1/2 max-[550px]:w-fit"
        >
          <div className="flex flex-col">
            <a href="https://skribble-five.vercel.app/" target="_blank">
              <div className="bg-[#e2e2e2] card">
                <h3 className="skribbleGrad max-md:text-5xl">Skribble.</h3>
              </div>
            </a>
            <h4> SKRIBBLE</h4>
            <p className="projDesc"> Online Drawing Platform </p>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.5 + 0.1}
          inView
          className="w-1/3 max-md:w-1/2 max-[550px]:w-fit"
        >
          <div className="flex flex-col">
            <a href="https://github.com/Smit2553/Fiber" target="_blank">
              <div className="bg-[#FFA800] card">
                <img
                  src="avacado.png"
                  alt="avacado"
                  className="aspect-square w-[85%] max-w-[300px] max-md:w-[150px]"
                />
                <h3 className="text-white text-6xl max-md:text-4xl">FIBER</h3>
              </div>
            </a>
            <h4> FIBER</h4>
            <p className="projDesc"> AI Powered Food Rating App </p>
          </div>
        </BlurFade>
      </div>

      <div className="flex gap-8 max-[550px]:flex-col max-[550px]:items-center">
        <BlurFade
          delay={0.5}
          inView
          className="w-2/5 max-md:w-1/2 max-[550px]:w-fit"
        >
          <div className="flex flex-col">
            <a
              href="https://board-game-cafe-website.vercel.app/"
              target="_blank"
            >
              <div className="bg-[#DEEAD5] card">
                <img
                  src="sip&play.png"
                  alt="sip"
                  className="aspect-square w-[90%] min-w-[200px] max-w-[500px]"
                />
              </div>
            </a>
            <h4> SIP & PLAY</h4>
            <p className="projDesc"> 1st Place UI / UX Design </p>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.5 + 0.1}
          inView
          className="w-3/5 max-md:w-1/2 max-[550px]:w-fit"
        >
          <a href="https://4ndy1e.github.io/protein-pal/" target="_blank">
            <div className="flex flex-col">
              <div className="bg-white card">
                <h3 className="text-black font-[times] max-[1150px]:text-7xl max-md:text-4xl">
                  Protein<span className="text-[#FF6347]">Pal</span>
                </h3>
              </div>
              <h4> PROTEINPAL</h4>
              <p className="projDesc"> Recipe Page Frontend </p>
            </div>
          </a>
        </BlurFade>
      </div>
      <div className="flex gap-8">
        <BlurFade delay={0.5} inView className="w-full ">
          <a href="https://4ndy1e.github.io/calculator/" target="_blank">
            <div className="flex flex-col">
              <img
                src={calcImage}
                alt="calc"
                className="rounded-[50px] hover:shadow-2xl max-[550px]:w-[250px] max-[550px]:aspect-square"
                id="calcImage"
              />
              <h4> CALCULATOR</h4>
              <p className="projDesc"> Basic 4 function calculator </p>
            </div>
          </a>
        </BlurFade>
      </div>
    </section>
  );
}

export default Projects;

import BlurFade from "./components/ui/blur-fade.js";
import Nav from "./components/Nav";
import Info from "./components/Info.jsx";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer.jsx";
import { TypewriterEffect } from "./components/ui/type-writer.js";
import Masonry from "./blocks/Components/Masonry/Masonry.js";

function AboutPage() {
  const words = [
    {
      text: "Hi,",
      className:
        "text-[75px] text-black text-left max-md:text-center text-md:text-[60px] max-[570px]:text-[50px]",
    },
    {
      text: "I'm",
      className:
        "text-[75px] text-black text-left max-md:text-center text-md:text-[60px] max-[570px]:text-[50px]",
    },
    {
      text: "Andy...",
      className:
        "text-[75px] text-black text-left max-md:text-center text-md:text-[60px] max-[570px]:text-[50px]",
    },
  ];

  const items = [
    {
      id: "1",
      img: "meSnow3.png",
      height: 1000,
    },
    {
      id: "6",
      img: "boston.jpg",
      height: 750,
    },
    {
      id: "7",
      img: "flagstaff.jpeg",
      height: 600,
    },
    {
      id: "8",
      img: "vietnam.jpg",
      height: 900,
    },
    {
      id: "9",
      img: "profile2.jpg",
      height: 800,
    },
    {
      id: "10",
      img: "sky-flower.jpeg",
      height: 650,
    },
    {
      id: "11",
      img: "river.jpeg",
      height: 800,
    },
    {
      id: "12",
      img: "radio-city.jpeg",
      height: 800,
    },
    {
      id: "13",
      img: "apple-wall.jpeg",
      height: 900,
    },
    {
      id: "14",
      img: "nyc.jpeg",
      height: 900,
    },
    {
      id: "15",
      img: "cali-temple.JPG",
      height: 600,
    },
    {
      id: "16",
      img: "princeton.jpeg",
      height: 500,
    },
  ];

  return (
    <section className="flex flex-col side-spacing items-center mt-48 max-[570px]:mx-6 ">
      <Nav />
      <div className="flex w-full mb-48 max-[570px]:mb-24">
        <div className="text-black text-left max-md:text-center text-md:text-[60px] max-[570px]:text-[50px]">
          <TypewriterEffect
            words={words}
            cursorClassName="text-[75px]"
            className="text-[75px]"
          />
        </div>
      </div>
      <div className="w-full m-24">
        <p className="text-left border-t-2 text-[#b4b4b4] font-bold text-2xl">
          Info.
        </p>
      </div>
      <Info />
      <div className="w-full m-28">
        <p className="text-right border-t-2 text-[#b4b4b4] font-bold text-2xl">
          Education.
        </p>
      </div>
      <Education />
      <div className="w-full m-28">
        <p className="text-left border-t-2 text-[#b4b4b4] font-bold text-2xl">
          Hobbies.
        </p>
      </div>
      <Hobbies />
      <div className="w-full m-28">
        <p className="hidden md:block w-full text-right border-t-2 text-[#b4b4b4] font-bold text-2xl">
          Photography.
        </p>
      </div>
      <div className="hidden md:block w-full h-fit mb-96">
        <BlurFade inView>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </BlurFade>
      </div>
      <Footer />
    </section>
  );
}

export default AboutPage;

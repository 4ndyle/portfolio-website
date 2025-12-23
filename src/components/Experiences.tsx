import BlurFade from "./ui/blur-fade";

function Experiences() {
  return (
    <div className="my-92 flex flex-col w-full">
      <h2 className="side-spacing text-7xl font-bold my-16 text-left max-md:text-6xl max-md:text-center max-[550px]:text-5xl">
        Experience.
      </h2>
      <BlurFade delay={0.5} inView>
        <Work
          name="Charles Schwab"
          organization="Portfolio Management Technologies"
          imageName="schwab-logo.png"
          date="Summer 2026"
          color="#DBDBDB"
          imgHeight="25vh"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Shamrock Foods"
          organization="Special Forces Technologies"
          imageName="shamrock-logo.png"
          date="Summer 2025"
          color="#92AF8C"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="ebay"
          organization="Pathways Program"
          imageName="ebay-logo.png"
          date="Summer 2025"
          color="#E7DFFF"
          imgHeight="15vh"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Iron Mountain"
          organization="Asset Lifecycle Management"
          imageName="iron-mountain-logo.png"
          date="Summer 2024"
          color="#D5EAFF"
          imgHeight="15vh"
        />
      </BlurFade>
    </div>
  );
}

interface workInfo {
  name: string;
  organization: string;
  imageName: string;
  date: string;
  color: string;
  imgHeight: string;
}

function Work({
  name,
  organization,
  imageName,
  date,
  color,
  imgHeight = "20vh",
}: workInfo) {
  return (
    <div className="flex justify-between my-12 max-[550px]:flex-col max-[550px]:gap-4">
      <div className="flex flex-col text-left max-[550px]:text-center">
        <h5 className="side-spacing">{name}</h5>
        <p className="organizationText side-spacing">{organization}</p>
        <div
          className="flex flex-col items-center w-screen h-[45vh] p-12 font-extralight italic my-16"
          style={{ backgroundColor: color }}
        >
          <h5 className="w-full text-right"> {date} </h5>
          <img
            src={imageName}
            className="w-fit my-auto"
            style={{ height: imgHeight }}
          />
        </div>
      </div>
    </div>
  );
}

export default Experiences;

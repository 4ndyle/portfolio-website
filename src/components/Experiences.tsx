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
          date="Summer 2026"
          color="#DBDBDB"
        />
      </BlurFade>
      {/* <BlurFade delay={0.5} inView>
        <Work
          name="Shamrock Foods Company"
          role="Software Engineer Intern"
          date="May 2025 - Aug 2025"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="eBay"
          role="eBay Pathways 2025"
          date="May 2025 - Aug 2025"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work name="Acorns" role="Ambassador" date="Jan 2025 - May 2025" />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Iron Mountain"
          role="Computer Technician"
          date="May 2024 - Aug 2024"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Tutor Doctor"
          role="Comp Sci & Math Tutor"
          date="Dec 2023 - June 2024"
        />
      </BlurFade> */}
    </div>
  );
}

interface workInfo {
  name: string;
  organization: string;
  date: string;
  color: string;
}

function Work({ name, organization, date, color }: workInfo) {
  return (
    <div className="flex justify-between my-12 max-[550px]:flex-col max-[550px]:gap-4">
      <div className="flex flex-col text-left max-[550px]:text-center">
        <h5 className="side-spacing">{name}</h5>
        <p className="organizationText side-spacing">{organization}</p>
        <div
          className="w-screen h-96 p-12 font-extralight italic"
          style={{ backgroundColor: color }}
        >
          <h5 className="text-right"> {date} </h5>
        </div>
      </div>
    </div>
  );
}

export default Experiences;

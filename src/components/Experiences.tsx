import BlurFade from "./ui/blur-fade";

function Experiences() {
  return (
    <div className="my-[75vh] flex flex-col w-full">
      <h2 className="side-spacing text-7xl font-bold my-16 text-left max-md:text-6xl max-md:text-center max-[550px]:text-5xl">
        Experience.
      </h2>
      <BlurFade delay={1} inView>
        <Work
          name="Charles Schwab"
          organization="Portfolio Management Technologies"
          imageName="schwab-logo.png"
          date="Summer 2026"
          color="#DBDBDB"
          imgHeight="25vh"
        />

        <WorkDescription
          job="Software Engineer Intern"
          jobDesc={["Full-Stack", "C# / .NET", "Data Structures / Algorithms"]}
          organization="Cross Enterprise Technologies - "
          team="Portfolio Management Technologies"
        />
      </BlurFade>
      <BlurFade delay={1} inView>
        <Work
          name="Shamrock Foods"
          organization="Special Forces Technologies"
          imageName="shamrock-logo.png"
          date="Summer 2025"
          color="#92AF8C"
        />
      </BlurFade>
      <BlurFade delay={1} inView>
        <Work
          name="ebay"
          organization="Pathways Program"
          imageName="ebay-logo.png"
          date="Summer 2025"
          color="#E7DFFF"
          imgHeight="15vh"
        />
      </BlurFade>
      <BlurFade delay={1} inView>
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
  imgHeight?: string;
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

interface workDescription {
  job: string;
  jobDesc: string[];
  organization: string;
  team: string;
}

function WorkDescription({
  job,
  jobDesc,
  organization,
  team,
}: workDescription) {
  return (
    <section className="flex justify-center mb-96">
      <div className="w-[67%]">
        <div className="grid grid-cols-3 gap-1">
          <div className="flex flex-col justify-starth-24 w-full gap-8">
            <section>
              <p className="job-desc-format"> {job} </p>
              {jobDesc.map((item, index) => {
                return (
                  <p key={index} className="job-desc-format text-[#B4B4B4]">
                    {item}
                  </p>
                );
              })}
            </section>

            <section>
              <p className="job-desc-format"> Team: </p>
              <p className="job-desc-format text-[#B4B4B4]"> {organization} </p>
              <p className="job-desc-format text-[#B4B4B4]"> {team} </p>
            </section>
          </div>
          <div className="h-24 w-full col-span-2">
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem consectetur beatae dolorem! Corrupti ipsa
              accusamus, natus repudiandae cum modi dolore magni omnis
              reiciendis exercitationem veritatis quam quia! Recusandae, tempora
              neque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

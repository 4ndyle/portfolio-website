import BlurFade from "./ui/blur-fade";

function Experiences() {
  return (
    <div className="mt-[75vh] flex flex-col w-full">
      <h2 className="side-spacing text-7xl font-bold my-16 text-left max-md:text-6xl max-md:text-center max-[550px]:text-5xl">
        Experience.
      </h2>
      <BlurFade delay={0.75} inView>
        <Work
          name="Charles Schwab"
          organization="Portfolio Management Technologies"
          imageName="schwab-logo.png"
          date="Incoming Summer 2026"
          color="#DBDBDB"
          imgHeight="25vh"
        />

        <BlurFade delay={0.5} inView>
          <WorkDescription
            job="Software Engineer Intern"
            skills={["Full-Stack", "C# / .NET", "Data Structures / Algorithms"]}
            organization="Cross Enterprise Technologies - "
            team="Portfolio Management Technologies"
            description="To be determined :)"
          />
        </BlurFade>
      </BlurFade>
      <BlurFade delay={0.75} inView>
        <Work
          name="Shamrock Foods"
          organization="Special Forces Technologies"
          imageName="shamrock-logo.png"
          date="Summer 2025"
          color="#92AF8C"
        />

        <BlurFade delay={0.5} inView>
          <WorkDescription
            job="Software Engineer Intern"
            skills={["Full-Stack", "C# / .NET", "JavaScript", "SQL", "Azure"]}
            organization="Software Development - "
            team="Special Forces"
            description="Contributed to the modernization of a critical logistics system, helping transition a legacy application into a scalable web platform that improved efficiency for delivery drivers and warehouse operations. Supported backend development, data optimization, and secure access controls, streamlining daily workflows and enabling reliable operations across multiple locations."
            description2="Working on systems used daily at scale deepened my understanding of how software directly impacts operational efficiency. The role emphasized building reliable, user-focused solutions that support fast-paced, real-world logistics workflows."
          />
        </BlurFade>
      </BlurFade>
      <BlurFade delay={0.75} inView>
        <Work
          name="ebay"
          organization="Pathways Program"
          imageName="ebay-logo.png"
          date="Summer 2025"
          color="#E7DFFF"
          imgHeight="15vh"
        />

        <BlurFade delay={0.5} inView>
          <WorkDescription
            job="ebay Pathways Program"
            skills={["Python", "Data Structures", "Algorithms"]}
            organization="Early Career Program - "
            team="Pathways"
            description="Chosen as one of 80 students nationwide for the highly selective eBay Pathways Program, gaining exposure to industry best practices through panels with eBay software engineers."
            description2="Participating in the eBay Pathways Program enhanced my grasp of data structures and algorithm design while exposing me to industry-standard problem-solving methodologies. The program reinforced how foundational concepts drive effective software solutions at scale."
          />
        </BlurFade>
      </BlurFade>
      <BlurFade delay={0.75} inView>
        <Work
          name="Iron Mountain"
          organization="Asset Lifecycle Management"
          imageName="iron-mountain-logo.png"
          date="Summer 2024"
          color="#D5EAFF"
          imgHeight="12vh"
        />

        <BlurFade delay={0.5} inView>
          <WorkDescription
            job="Computer Technician"
            skills={["Quality Assurance", "Operating Systems", "Hardware"]}
            organization="Information Technology - "
            team="Asset Lifecycle Management"
            description="Supported quality assurance efforts by inspecting and validating computer hardware and software to ensure compliance with company and industry standards. Improved troubleshooting and repair workflows by organizing technical documentation into a centralized knowledge base, helping the team maintain consistency, accuracy, and system reliability."
            description2="This role strengthened my attention to detail and reinforced the importance of thorough testing and inspection in maintaining reliable systems. By working closely with both hardware and software, I developed a deeper understanding of quality assurance processes and computer systems."
          />
        </BlurFade>
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
          <p className="w-full text-right max-lg:text-center font-['Inter'] text-4xl max-sm:text-2xl">
            {" "}
            {date}{" "}
          </p>
          <img
            src={imageName}
            className="my-auto"
            style={{ height: imgHeight }}
          />
        </div>
      </div>
    </div>
  );
}

interface workDescription {
  job: string;
  skills: string[];
  organization: string;
  team: string;
  description: string;
  description2?: string;
}

function WorkDescription({
  job,
  skills,
  organization,
  team,
  description,
  description2 = "",
}: workDescription) {
  return (
    <section className="flex justify-center mb-96 h-fit">
      <div className="w-[67%] max-md:w-[80%]">
        <div className="grid grid-cols-3 gap-1 max-lg:grid-cols-1 max-lg:gap-10">
          <div className="flex flex-col justify-start w-full gap-8 max-lg:items-center">
            <section>
              <p className="job-desc-format max-lg:hidden"> {job} </p>
              <p className="font-['Inter'] text-4xl max-sm:text-2xl lg:hidden">
                {" "}
                {job}{" "}
              </p>
              {skills.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="job-desc-format text-[#B4B4B4] max-lg:hidden"
                  >
                    {item}
                  </p>
                );
              })}
            </section>

            <section className="max-lg:hidden">
              <p className="job-desc-format"> Team: </p>
              <p className="job-desc-format text-[#B4B4B4]"> {organization} </p>
              <p className="job-desc-format text-[#B4B4B4]"> {team} </p>
            </section>
          </div>
          <div className="w-full lg:col-span-2 flex flex-col gap-8">
            <p className="text-left max-lg:text-center">{description}</p>
            <p className="text-left max-lg:text-center">{description2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

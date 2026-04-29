import Footer from "./Footer";
import ExperienceCard from "./ExperienceCard";

function Resume() {
  return (
    <main className="flex flex-col min-h-screen bg-[#d6cfc7] justify-between items-center py-4 px-4 md:px-0">

      <div className="flex gap-1 items-center my-6 md:my-10">
        <div className="w-5 h-5 bg-blue-500 mt-2"></div>
        <h2 className="font-bold text-4xl">Resume</h2>
      </div>

      {/* Experience heading + button */}
      <div className="w-full max-w-3xl flex justify-between mt-4 md:mt-10">
        <h2 className="font-bold text-3xl">Experience</h2>
        <div>
          <a href="\cv.pdf" download>
            <button className="py-2 text-white px-4 bg-blue-600 rounded-full transition-transform duration-200 hover:scale-95">
              Download cv
            </button>
          </a>
        </div>
      </div>

      {/* Experience cards */}
      <div className="py-4 md:py-6 flex gap-3 flex-col w-full max-w-3xl">
        <ExperienceCard
          year="2025-Present"
          role="Web Designer"
          company="Efficient Spaces"
          location="Nakuru"
          description="I am a front-end developer who designs and builds visually engaging, user-friendly web applications using React. I craft dynamic, responsive interfaces with clean, component-based code that delivers seamless user experiences across all devices."
        />
        <ExperienceCard
          year="2023-2025"
          role="Graphic Designer"
          company="Chassy Technologies"
          location="Nairobi"
          description="I created engaging visual content for branding and marketing, including logos, posters, flyers, and digital graphics. I worked with clients and team members to turn ideas into effective designs, while managing multiple projects and meeting deadlines using tools like Adobe Photoshop, Adobe Illustrator, and Figma."
        />
        <ExperienceCard
          year="2022-2023"
          role="Network Technician"
          company="Netpoint Solutions"
          location="Nairobi"
          description="I worked as a network technician at Netpoint Solutions, where I installed, configured, and troubleshot network infrastructure to ensure reliable internet connectivity for customers. I diagnosed technical issues, maintained equipment, and delivered practical solutions to keep networks running smoothly."
        />
      </div>

      {/* Education */}
      <div className="my-4 md:my-7 w-full max-w-3xl">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-3xl">Education</h2>
          <ExperienceCard
            year="2018-2020"
            role="Information Technology"
            company="Co-operative University"
            location="Nairobi"
            description="In 2018, I began studying Information Technology at campus, where I developed a strong passion for technology, graphic design, and web development. Although I did not complete the program, this experience laid the foundation for my self-driven journey into the tech industry, where I have continued to grow and build practical skills ever since."
          />
          <ExperienceCard
            year="2024-2025"
            role="Front-End Development"
            company="ALX Foundation"
            location="Nairobi"
            description="In 2024, I completed a front-end web development bootcamp where I took a deep dive into modern web development and the full development process. This intensive program sharpened my skills in building responsive, dynamic web applications and gave me a solid, hands-on understanding of how professional projects are structured and delivered."
          />
        </div>
      </div>

      {/* Professional skillset */}
      <div className="w-full max-w-3xl bg-white mb-10 my-10 shadow-md">
        <div className="flex flex-col p-6 md:p-10">

          <p className="font-bold text-2xl mb-4">Professional skillset</p>

          {/* MOBILE — single column, DESKTOP — two columns */}
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <div className="flex flex-col">
              <div className="flex mt-5 gap-1">
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <p>Sprint Planning</p>
              </div>
              <div className="flex mt-5 gap-1">
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <p>UI/UX Design</p>
              </div>
              <div className="flex mt-5 gap-1">
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <p>Collaboration</p>
              </div>
              <div className="flex mt-5 gap-1">
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <p>Responsive Design</p>
              </div>
            </div>
          </div>

          <p className="font-bold text-2xl">Languages</p>
          <div className="flex flex-col">
            <div className="flex mt-5 gap-1">
              <div className="w-4 h-4 bg-blue-600 mt-1"></div>
              <p>English</p>
            </div>
            <div className="flex mt-5 gap-1">
              <div className="w-4 h-4 bg-blue-600 mt-1"></div>
              <p>Swahili</p>
            </div>
          </div>

        </div>
      </div>

      <div className="flex-grow"></div>
      <Footer />
    </main>
  );
}

export default Resume;
import Footer from "./Footer";
import ProjectsCard from "./ProjectsCard"

function Projects() {
  return (
    <div className=" bg-[#d6cfc7] min-h-screen flex flex-col justify-between items-center ">
      <div className="flex flex-col text-center items-center mb-4 ">
        <div className="flex gap-1 items-center pt-8 ">
        <div className="w-5 h-5 bg-blue-600 mt-2 "></div>
        <div>
        <h1 className="font-bold text-4xl   ">Projects</h1></div>
        </div>
        <p className="max-w-3xl py-5 pt-10 text-lg ">I build things that look good and feel right to use. The projects below represent my journey into web development, each one challenging me to think both as a designer and a developer. I work with React, JavaScript, Tailwind CSS and HTML, and I bring a strong eye for layout, typography, and visual detail to everything I build. Take a look at what I've been working on</p>

        <ProjectsCard
          name="Portfolio Website"
          role="Frontend Developer"
          details="A personal portfolio built with React and Tailwind CSS.It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
          image="/src/project.jpg"
          link="https://github.com/John51775/personal-website"
       />

       <ProjectsCard
          name="Portfolio Website"
          role="Frontend Developer"
          details="A personal portfolio built with React and Tailwind CSS.It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
          image="/src/project.jpg"
          link="https://github.com/John51775/personal-website"
       />

       <ProjectsCard
          name="Portfolio Website"
          role="Frontend Developer"
          details="A personal portfolio built with React and Tailwind CSS.It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
          image="/src/project.jpg"
          link="https://github.com/John51775/personal-website"
       />
        
        
         
        </div>
      
      <div className="w-full "><Footer/></div>
    </div>
    
    
  );
}

export default Projects;
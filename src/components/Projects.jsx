import Footer from "./Footer";


function Projects() {
  return (
    <div className=" bg-[#d6cfc7] min-h-screen flex flex-col justify-between items-center ">
      <div className="flex flex-col text-center items-center  ">
        <div className="flex gap-2 items-center pt-10 ">
        <div className="w-5 h-5 bg-blue-600 my-7"></div>
        <h1 className="font-bold text-4xl   ">Projects</h1>
        </div>
        <p className="max-w-xl ">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <div className="w-[800px] h-[400px] bg-white my-10 shadow-md flex gap-2 ">

          
         
             <div className="flex my-10 gap-5 ">
              <div className="w-4 h-15 bg-blue-600 "></div>
              <div className="flex flex-col text-left">
                <h2 className="text-blue-600 font-bold text-2xl">Project name 01</h2>
                <h1 className="font-bold text-sm">Role Title</h1>
                <p className="max-w-md pt-10">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <div className="flex gap-4 mt-10">
            <button className=" py-2 text-white px-4 bg-blue-600 rounded-full   transition-transform duration-200 hover:scale-95">
              Learn More
            </button>
            </div>
              </div>
             
             </div>

          <div className="w-1/2 object-cover h-full">
                 <img
            src="/src/project.jpg"
            alt="project"
            className=" h-full w-full  "
          />

              </div>
        </div>
        <div className="w-[800px] h-[400px] bg-white my-10 shadow-md flex gap-2 ">

          
         
             <div className="flex my-10 gap-5 ">
              <div className="w-4 h-15 bg-blue-600 "></div>
              <div className="flex flex-col text-left">
                <h2 className="text-blue-600 font-bold text-2xl">Project name 01</h2>
                <h1 className="font-bold text-sm">Role Title</h1>
                <p className="max-w-md pt-10">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <div className="flex gap-4 mt-10">
            <button className=" py-2 text-white px-4 bg-blue-600 rounded-full   transition-transform duration-200 hover:scale-95">
              Learn More
            </button>
            </div>
              </div>
             
             </div>

          <div className="w-1/2 object-cover h-full">
                 <img
            src="/src/project.jpg"
            alt="project"
            className=" h-full w-full  "
          />

              </div>
        </div>
        <div className="w-[800px] h-[400px] bg-white my-10 shadow-md flex gap-2 ">

          
         
             <div className="flex my-10 gap-5 ">
              <div className="w-4 h-15 bg-blue-600 "></div>
              <div className="flex flex-col text-left">
                <h2 className="text-blue-600 font-bold text-2xl">Project name 01</h2>
                <h1 className="font-bold text-sm">Role Title</h1>
                <p className="max-w-md pt-10">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <div className="flex gap-4 mt-10">
            <button className=" py-2 text-white px-4 bg-blue-600 rounded-full   transition-transform duration-200 hover:scale-95">
              Learn More
            </button>
            </div>
              </div>
             
             </div>

          <div className="w-1/2 object-cover h-full">
                 <img
            src="/src/project.jpg"
            alt="project"
            className=" h-full w-full  "
          />

              </div>
        </div>
         
        </div>
      
      <div className="w-full"><Footer/></div>
    </div>
    
    
  );
}

export default Projects;
import Footer from "./Footer";
import ExperienceCard from "./ExperienceCard"

function Resume() {
  return (
    <main className="flex flex-col  min-h-screen bg-[#d6cfc7] justify-between items-center py-4">
      

       
       <div className="flex gap-1 items-center my-10">
         <div className="w-5 h-5 bg-blue-500 mt-2 "></div>
         <div><h2 className="font-bold text-4xl">Resume</h2></div>


       </div>
       
       <div className="w-full max-w-3xl flex justify-between mt-10 ">
        <div><h2 className="font-bold text-3xl">Experience</h2></div>
        <div>
          <a href="\cv.pdf" download>
          <button className=" py-2 text-white px-4 bg-blue-600 rounded-full   transition-transform duration-200 hover:scale-95">
              Download cv
            </button>
            </a>
        </div>
          
       </div>
       
          {/* Experience */}
          <div className="py-6 flex gap-3 flex-col">
            <div className="">
        <ExperienceCard
        
        year="2025-Present"
        role="Graphic Designer"
        company="Efficient Spaces"
        location="Nakuru"
        description="I create engaging visual content for branding and marketing, including logos, posters, flyers, and digital graphics. I worked with clients and team members to turn ideas into effective designs, while managing multiple projects and meeting deadlines using tools like Adobe Photoshop, Adobe Illustrator, and Figma."

        
        
        
        />
        </div>
        <div className="">
        <ExperienceCard
        
        year="2025-Present"
        role="Graphic Designer"
        company="Efficient Spaces"
        location="Nakuru"
        description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."

        
        
        
        />
        </div>
        <div className="">
        <ExperienceCard
        
        year="2025-Present"
        role="Graphic Designer"
        company="Efficient Spaces"
        location="Nakuru"
        description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."

        
        
        
        />
        </div>
        </div>

      {/* Education  you used experience card in education..*/}

         <div className="my-7 ">
       <div className="flex flex-col gap-3">
            <div><h2 className="font-bold text-3xl">Education</h2></div>
            <ExperienceCard
        
        year="2025-Present"
        role="Graphic Designer"
        company="Efficient Spaces"
        location="Nakuru"
        description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."

        
        
        
        />

        <ExperienceCard
        
        year="2025-Present"
        role="Graphic Designer"
        company="Efficient Spaces"
        location="Nakuru"
        description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."

        
        
        
        />
        
       </div>
       </div>

       {/* Professional skillset */}

         <div className="w-full max-w-3xl min-h-[400px] bg-white mb-10 my-10 shadow-md">
          <div className="flex flex-col p-10 ">

             <div className="flex flex-col mb-12 ">
              <div><p className="font-bold text-2xl ">Professional skillset</p></div>
              <div className="flex justify-between w-full max-w-3/4">
              
              <div className="flex justify-between mt-5 gap-1">
                
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <div><p>Entrepreneurial Mindset</p></div>
                
                </div>
                <div className="flex justify-between mt-5 gap-1">
                
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <div><p>Entrepreneurial Mindset</p></div>
                
                </div>
              
              </div>

              <div className="flex justify-between w-full max-w-3/4">
              
              <div className="flex justify-between mt-5 gap-1">
                
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <div><p>Entrepreneurial Mindset</p></div>
                
                </div>
                <div className="flex justify-between mt-5 gap-1">
                
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <div><p>Entrepreneurial Mindset</p></div>
                
                </div>
              
              </div>
             
             </div>

              <div className="flex flex-col ">
              <div><p className="font-bold text-2xl ">Languages</p></div>
              <div className="flex justify-between w-full max-w-3/4">
              
              <div className="flex justify-between mt-5 gap-1">
                
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <div><p>Entrepreneurial Mindset</p></div>
                
                </div>
                <div className="flex justify-between mt-5 gap-1">
                
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <div><p>Entrepreneurial Mindset</p></div>
                
                </div>
              
              </div>

              <div className="flex justify-between w-full max-w-3/4">
              
              <div className="flex justify-between mt-5 gap-1">
                
                <div className="w-4 h-4 bg-blue-600 mt-1"></div>
                <div><p>Entrepreneurial Mindset</p></div>
                
                </div>
                
              
              </div>
             
             </div>


          </div>



         </div>
       
        
       <div className="flex-grow "></div>

      <Footer/>
    </main>
    
  );
}

export default Resume;
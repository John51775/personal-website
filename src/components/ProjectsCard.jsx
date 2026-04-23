import { Link } from "react-router-dom";

function ProjectsCard({name, role, details, link, image}){

return(

<div className="w-full max-w-4xl min-h-[400px] bg-white my-5 shadow-md flex gap-2  ">

          
         
             <div className="flex my-10 gap-5 ">
              <div className="w-4 h-15 bg-blue-600 "></div>
              <div className="flex flex-col text-left">
                <h2 className="text-blue-600 font-bold text-2xl">{name}</h2>
                <h1 className="font-bold text-sm">{role}</h1>
                <p className="max-w-md pt-10">{details}</p>
                <div className="flex gap-4 mt-10">
                    <a href={link} target="_blank" rel="noopener noreferrer">
            <button className=" py-2 text-white px-4 bg-blue-600 rounded-full   transition-transform duration-200 hover:scale-95">
              Learn More
            </button>
            </a>
            </div>
              </div>
             
             </div>

          <div className="w-1/2 object-cover h-full">
                 <img
            src={image}
            alt={name}
            className=" h-full w-full  "
          />

              </div>
        </div>



);



}

export default ProjectsCard;
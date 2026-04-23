function ExperienceCard({year, role, company, location, description}){

return(  


       <div className="w-full max-w-3xl min-h-[400px]  bg-white shadow-md my-3">
        <div className="flex justify-between gap-2 items-center">
         <div className="flex flex-col p-10">
            <h2 className="text-blue-600 text-2xl font-bold ">{year}</h2>
            <p className="text-xl ">{role}</p>
            <p className="text-lg ">{company}</p>
            <p className="text-lg">{location}</p>

         </div>
         <div className="w-1/2 max-w-prose leading-relaxed break-words text-lg  mt-10 ">
            <p>{description}
                </p>
                </div>
        </div>
       </div>




  );




}

export default ExperienceCard;
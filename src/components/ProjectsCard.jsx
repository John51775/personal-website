function ProjectsCard({ name, role, details, link, image }) {
  return (
    <div className="w-full max-w-4xl bg-white my-5 shadow-md">

      {/* MOBILE LAYOUT */}
      <div className="flex flex-col md:hidden">

        {/* TOP — name and role */}
        <div className="flex gap-5 px-6 pt-6">
          <div className="w-4 bg-blue-600 shrink-0"></div>
          <div>
            <h2 className="text-blue-600 font-bold text-2xl">{name}</h2>
            <h3 className="font-bold text-sm">{role}</h3>
          </div>
        </div>

        {/* MIDDLE — image */}
        <div className="w-full h-52 my-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* BOTTOM — details and button */}
        <div className="px-6 pb-6">
          <p className="text-base leading-relaxed">{details}</p>
          <div className="mt-6">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="py-2 text-white px-4 bg-blue-600 rounded-full transition-transform duration-200 hover:scale-95">
                Learn More
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* DESKTOP LAYOUT — original */}
      <div className="hidden md:flex gap-2 min-h-[400px]">
        <div className="flex my-10 gap-5">
          <div className="w-4 h-15 bg-blue-600"></div>
          <div className="flex flex-col text-left">
            <h2 className="text-blue-600 font-bold text-2xl">{name}</h2>
            <h3 className="font-bold text-sm">{role}</h3>
            <p className="max-w-md pt-10">{details}</p>
            <div className="flex gap-4 mt-10">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="py-2 text-white px-4 bg-blue-600 rounded-full transition-transform duration-200 hover:scale-95">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 object-cover h-full">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
      </div>

    </div>
  );
}

export default ProjectsCard;
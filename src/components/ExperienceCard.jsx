function ExperienceCard({ year, role, company, location, description }) {
  return (
    <div className="w-full max-w-3xl bg-white shadow-md my-3 md:min-h-[400px]">

      <div className="flex flex-col md:flex-row justify-between gap-2 items-start p-6 md:p-0">

        {/* LEFT — year, role, company, location */}
        <div className="flex flex-col md:p-10">
          <h2 className="text-blue-600 text-2xl font-bold">{year}</h2>
          <p className="text-xl">{role}</p>
          <p className="text-lg">{company}</p>
          <p className="text-lg">{location}</p>
        </div>

        {/* RIGHT — description */}
        <div className="w-full md:w-1/2 max-w-prose leading-relaxed break-words text-lg md:mt-10 md:pr-6">
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
}

export default ExperienceCard;
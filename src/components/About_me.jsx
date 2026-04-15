import Footer from "./Footer";

function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
    <div className="min-h-screen  flex-grow flex  items-center justify-center bg-gray-100">

      <div className="flex w-[900px]  shadow-lg  " >

        {/* LEFT CARD */}
        <div className="bg-[#d6cfc7] w-1/2 p-10 flex flex-col items-center text-center">
          
          <img
            src="/src/JOHN.jpg"
            alt="profile"
            className="w-40 h-40 rounded-full object-cover mb-5"
          />

          <h2 className="text-2xl font-bold">John Ngugi</h2>

          <div className="w-10 h-1 bg-blue-500 my-3"></div>

          <p className="tracking-widest text-sm">Front End Web Developer</p>

          <div className="flex gap-4 mt-6">
            <span>🌐</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white w-1/2 p-10 ">
          <h1 className="text-5xl font-bold mb-4">Hello</h1>

          <p className="mb-6 text-lg">
            Here's who I am & what I do
          </p>

          <div className="flex gap-4 mb-6">
            <button className=" py-2 border px-5 rounded-full hover:text-white hover:bg-blue-600 transition-colors duration-300">
              Resume
            </button>

            <button className="border px-5 py-2 rounded-full hover:text-white hover:bg-blue-600 transition-colors duration-300" >
              Projects
            </button>
          </div>

          <p className="text-gray-600">
            I’m a frontend developer with a design background, creating intuitive and visually engaging web experiences.
          </p>
        </div>
        
      </div>
      </div>
      <Footer />

      </div>
      
   
  );
}

export default AboutMe;
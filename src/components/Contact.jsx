import Footer from "./Footer";

function Contact() {
  return (
    <div className="flex  flex-col min-h-screen bg-[#d6cfc7] items-center ">
      <main className="flex-grow flex-col flex items-center justify-center">
        <div className="flex items-center gap-2 p-10">
          <div className="w-5 h-5 bg-blue-600 mt-2"></div>
          <div><h1 className="font-bold text-4xl ">Let's talk</h1></div>

        </div>
      <div className="bg-white shadow-md w-full max-w-2xl p-8   ">

          <form className="space-y-4">

            <div className="flex gap-4">
              <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border-b border-black bg-transparent outline-none py-2"
              />
          
              <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border-b border-black bg-transparent outline-none py-2"
              />

            </div>

            <input
            type="email"
            placeholder="email"
            className="w-full border-b border-black bg-transparent outline-none py-2"
             />

            <input
            type="text"
            placeholder="subject"
            className="w-full border-b border-black bg-transparent outline-none py-2"
             />
             
             <textarea
             placeholder="message"
             rows="4"  
             className="w-full border-b border-black bg-transparent outline-none py-2 resize-none"           
             ></textarea>

             {/* BUTTON */}
            <button className="py-2 text-white px-4 bg-blue-600 rounded-full   transition-transform duration-200 hover:scale-95">
             Send Message
            </button>

          </form>


      </div>
          




      </main>
      <div className="w-full "><Footer /></div>
    </div>
  );
}

export default Contact;
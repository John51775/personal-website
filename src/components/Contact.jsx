import Footer from "./Footer";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#d6cfc7] items-center">
      <main className="flex-grow flex-col flex items-center justify-center w-full px-4 md:px-0">

        <div className="flex items-center gap-2 p-6 md:p-10">
          <div className="w-5 h-5 bg-blue-600 mt-2"></div>
          <h1 className="font-bold text-4xl">Let's talk</h1>
        </div>

        <div className="bg-white shadow-md w-full max-w-2xl p-6 md:p-8">
          <form className="space-y-4">

            {/* FIRST + LAST NAME — stacks on mobile */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 border-b border-black bg-transparent outline-none py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 border-b border-black bg-transparent outline-none py-2"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-black bg-transparent outline-none py-2"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border-b border-black bg-transparent outline-none py-2"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border-b border-black bg-transparent outline-none py-2 resize-none"
            />

            <a href="mailto:ngaruiyajohn86@gmail.com">
              <button className="py-2 text-white px-4 bg-blue-600 rounded-full transition-transform duration-200 hover:scale-95">
                Send Message
              </button>
            </a>

          </form>
        </div>

      </main>
      <div className="w-full"><Footer /></div>
    </div>
  );
}

export default Contact;
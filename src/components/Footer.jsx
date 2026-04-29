import { FaTiktok, FaXTwitter, FaGithub } from "react-icons/fa6";

function CopyPhone() {
  const handleCopy = () => {
    navigator.clipboard.writeText("+254790064482");
    alert("Number copied!");
  };

  return (
    <p
      onClick={handleCopy}
      className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
      title="Click to copy"
    >
      +254-790-064-482
    </p>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-white px-10 py-8">

      {/* MOBILE LAYOUT */}
      <div className="md:hidden">

        {/* TOP ROW */}
        <div className="flex justify-between items-start mb-6">
          <div className="text-sm text-gray-500">
            <p>© {new Date().getFullYear()} John Ngugi</p>
            <p>All rights reserved</p>
          </div>
          <div className="text-sm text-gray-500 text-center">
            <h1 className="font-bold">Call</h1>
            <CopyPhone />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-start">
          <div className="text-sm text-gray-500">
            <h1 className="font-bold">Write</h1>
            <a href="mailto:ngaruiyajohn86@gmail.com" className="hover:text-blue-600 transition-colors duration-300">
              ngaruiyajohn86@gmail.com
            </a>
          </div>
          <div className="text-sm text-gray-500 text-center">
            <h1 className="font-bold">Follow</h1>
            <div className="flex gap-4 text-base justify-center mt-1">
              <a href="https://www.tiktok.com/@_.johnngugi" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com/@ngaruiya2541" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://github.com/John51775" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-blue-600 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex justify-between items-center">

        <div className="text-sm text-gray-500">
          <p>© {new Date().getFullYear()} John Ngugi</p>
          <p>All rights reserved</p>
        </div>

        <div className="flex gap-10 items-start">
          <div className="text-sm text-gray-500 text-center">
            <h1 className="font-bold">Call</h1>
            <CopyPhone />
          </div>
          <div className="text-sm text-gray-500 text-center">
            <h1 className="font-bold">Write</h1>
            <a href="mailto:ngaruiyajohn86@gmail.com" className="hover:text-blue-600 transition-colors duration-300">
              ngaruiyajohn86@gmail.com
            </a>
          </div>
          <div className="text-sm text-gray-500 text-center">
            <h1 className="font-bold">Follow</h1>
            <div className="flex gap-4 text-base justify-center mt-1">
              <a href="https://www.tiktok.com/@_.johnngugi" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com/@ngaruiya2541" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://github.com/John51775" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-blue-600 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
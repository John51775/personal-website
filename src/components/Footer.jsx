
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

return(

<footer className="w-full bg-white  flex justify-between items-center px-10 py-6">

      {/* LEFT */}
      <div className="text-sm text-gray-500">
        <p>© {new Date().getFullYear()} John Ngugi</p>
        <p>All rights reserved</p>
      </div>

      {/* RIGHT */}
      <div className="flex gap-10">

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
          <div className="flex gap-4 text-base justify-center">
            <a href="https://www.tiktok.com/@_.johnngugi" target="_blank" rel="noopener noreferrer">
            <FaTiktok  className="hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a href="https://twitter.com/@ngaruiya2541" target="_blank">
            <FaXTwitter className="hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a href="https://github.com/John51775" target="_blank">
            <FaGithub className="hover:text-blue-600 transition-colors duration-300" />
            </a>
          </div>
        </div>

      </div>

    </footer>

);
}
export default Footer;
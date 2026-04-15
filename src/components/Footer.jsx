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
          <p>+254-790-064-482</p>
        </div>

        <div className="text-sm text-gray-500 text-center">
          <h1 className="font-bold">Write</h1>
          <p>ngaruiyajohn86@gmail.com</p>
        </div>

        <div className="text-sm text-gray-500 text-center">
          <h1 className="font-bold">Follow</h1>
          <div className="flex gap-4 justify-center">
            <span>🌐</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

      </div>

    </footer>

);
}
export default Footer;
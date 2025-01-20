import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const activeLink = location.pathname;

  return (
    <header className="flex mx-auto max-w-md items-center justify-center mt-8 bg-[#2A2B2C] rounded py-2 space-x-5 text-lg mb-8 font-medium w-auto">
      <Link
        to="/"
        className={`flex items-center gap-2 text-white rounded-sm text-sm sm:text-xl px-3 py-2 transition-all duration-300 ${
          activeLink === "/" ? "bg-[#8B48E8]" : "hover:bg-[#8B48E8]"
        }`}
      >
        <i className="ri-home-2-line"></i>
      </Link>
      <Link
        to="/projects"
        className={`flex items-center gap-2 text-white rounded-sm text-sm sm:text-xl px-3 py-2 transition-all duration-300 ${
          activeLink === "/projects" ? "bg-[#8B48E8]" : "hover:bg-[#8B48E8]"
        }`}
      >
        <i className="ri-folder-open-line"></i>
      </Link>
      <Link
        to="/tools"
        className={`flex items-center gap-2 text-white rounded-sm text-sm sm:text-xl px-3 py-2 transition-all duration-300 ${
          activeLink === "/tools" ? "bg-[#8B48E8]" : "hover:bg-[#8B48E8]"
        }`}
      >
        <i className="ri-tools-fill"></i>
      </Link>
      <Link
        to="/how-it-works"
        className={`flex items-center gap-2 text-white rounded-sm text-sm sm:text-xl px-3 py-2 transition-all duration-300 ${
          activeLink === "/how-it-works" ? "bg-[#8B48E8]" : "hover:bg-[#8B48E8]"
        }`}
      >
        <i className="ri-line-chart-line"></i>
      </Link>
      <a
        href="/Muhammad_Yasir_Resume.pdf"
        download="Muhammad_Yasir_Resume.pdf"
        className="flex items-center gap-2 text-white rounded-sm text-sm sm:text-xl px-3 py-2 transition-all duration-300 hover:bg-[#8B48E8]"
      >
        <i className="ri-file-download-line"></i>
      </a>
    </header>
  );
}

export default Navbar;

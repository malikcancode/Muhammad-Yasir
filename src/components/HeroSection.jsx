import { Link } from "react-router-dom";
import Marquee from "./Marquee";
import Projects from "./Projects";
import HowItWorks from "./HowItWorks";
import Questions from "./Questions";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-evenly items-center h-auto mt-8 px-4 sm:px-8">
        <div className="bg-[#262728] p-2 sm:p-4 w-full sm:w-[25%] rounded-md flex flex-col justify-center items-center mb-6 sm:mb-0 h-full">
          <img
            src="/pic.png"
            alt="Yasir Malik"
            className="w-56 h-auto rounded-md object-cover mb-4"
          />
          <p className="text-white text-base sm:text-sm md:text-2xl font-semibold mb-2 tracking-wide">
            Yasir Malik
          </p>
          <p className="text-white text-center text-xs sm:text-sm mb-2 tracking-wide font-normal capitalize">
            Full stack developer and UI designer
          </p>
          <p className="text-white text-center text-xs sm:text-sm mb-4 tracking-wide font-normal">
            <i className="ri-flag-fill"></i> Mianwali, Pakistan
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            <a
              href="https://web.facebook.com/profile.php?id=100022254347226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1877F2] transition-colors"
            >
              <i className="ri-facebook-line text-lg sm:text-xl font-semibold"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-yasir3233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0077B5] transition-colors"
            >
              <i className="ri-linkedin-line text-lg sm:text-xl"></i>
            </a>
            <a
              href="https://github.com/malikcancode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black transition-colors"
            >
              <i className="ri-github-line text-lg sm:text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/immalik_32/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[red] transition-colors"
            >
              <i className="ri-instagram-line text-lg sm:text-xl"></i>
            </a>
          </div>
          <a
            href="https://wa.me/923029144398"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-sm text-xs sm:text-sm flex items-center justify-center gap-1 px-16 py-2 tracking-wide bg-[#8B48E8]"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            Let's Talk
          </a>
        </div>

        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-snug md:leading-[5rem] text-white tracking-wide font-bold">
            Website Developer <br />
            <span className="text-[#8B48E8] font-semibold">&</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-snug md:leading-[5rem] text-white mb-5 font-bold">
            Website Designer
          </h1>
          <h3 className="text-sm sm:text-lg text-white p-3">
            I am a Full Stack Developer and Website Designer specializing in
            creating dynamic, responsive, and visually stunning web
            applications. With expertise in front-end design and back-end
            development, I craft seamless user experiences. My focus is on
            delivering high-quality, custom solutions tailored to client needs.
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/923029144398"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-auto sm:justify-start text-white bg-[#8B48E8] rounded-sm text-sm sm:text-md py-2 gap-1 px-16 transition-all"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Let's Talk
              <i className="ri-arrow-right-line"></i>
            </a>
            <Link
              to="/projects"
              className="flex items-center justify-center sm:justify-start text-white bg-transparent rounded-sm text-sm sm:text-md px-5 sm:px-6 py-2 transition-all"
            >
              My Work
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </div>

      <Marquee />
      <Projects />
      <HowItWorks />
      <Questions />
    </>
  );
}

export default HeroSection;

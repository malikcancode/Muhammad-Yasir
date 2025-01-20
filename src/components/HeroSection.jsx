import { Link } from "react-router-dom";
import Marquee from "./Marquee";
import Projects from "./Projects";
import HowItWorks from "./HowItWorks";
import Questions from "./Questions";
import Footer from "./Footer";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-evenly items-center h-auto mt-8 px-4 sm:px-0">
        <div className="bg-[#262728] p-6 w-full sm:w-[25%] rounded-md flex flex-col items-center mb-8 sm:mb-0">
          <img
            src="/public/pic.png"
            alt="Yasir Malik"
            className="w-52 h-auto rounded-md object-cover mb-4"
          />
          <p className="text-white sm:text-sm md:text-2xl font-semibold mb-3 sm:tracking-wide">
            Yasir Malik
          </p>
          <p className="text-white text-center text-sm mb-3 tracking-wider font-normal capitalize">
            Full stack developer and UI designer
          </p>
          <p className="text-white text-center text-sm mb-4 tracking-wide font-normal">
            <i className="ri-map-pin-2-line"></i> Mianwali, Pakistan
          </p>
          <div className="flex gap-4 mb-4">
            <a
              href="https://web.facebook.com/profile.php?id=100022254347226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1877F2] transition-colors"
            >
              <i className="ri-facebook-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-yasir3233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0077B5] transition-colors"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="https://github.com/malikcancode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black transition-colors"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              href="https://www.instagram.com/immalik_32/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[red] transition-colors"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </div>
          <a
            href="https://wa.me/923029144398"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-sm text-[10px] sm:text-sm px-4 tracking-wider py-2 md:px-10 md:py-2 mt-4 bg-[#8B48E8]"
          >
            <i className="ri-whatsapp-line mr-1 text-lg"></i>
            Let's Talk
          </a>
        </div>

        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-5xl sm:text-5xl md:text-6xl leading-snug md:leading-[5rem] text-white font-bold">
            Website Developer <br />
            <span className="text-[#8B48E8] font-semibold">&</span>
          </h1>
          <h1 className="text-5xl sm:text-5xl md:text-6xl leading-snug md:leading-[5rem] text-white mb-7 font-bold">
            Website Designer
          </h1>
          <h3 className="text-sm font-light sm:text-lg text-white mb-6">
            Passionate about building intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products
            with expertise in Full Stack development and UI Designing.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923029144398"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start text-white bg-[#8B48E8] rounded-sm text-md tracking-wider px-6 py-2  transition-all"
            >
              <i className="ri-whatsapp-line mr-1 text-lg"></i>
              Let's Talk
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
            <Link
              to="/projects"
              className="flex items-center justify-center sm:justify-start text-white bg-transparent rounded-sm text-md px-6 py-2 tracking-wider transition-all"
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
      <Footer />
    </>
  );
}

export default HeroSection;

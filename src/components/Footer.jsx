function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-full sm:h-[10rem] py-4 text-[#8B48E8]">
      <p className="text-center text-lg tracking-wider mb-4">
        Made by Muhammad Yasir
      </p>

      <div className="flex space-x-6">
        <a
          href="https://web.facebook.com/profile.php?id=100022254347226"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B48E8] hover:text-[#1877F2] transition-colors"
        >
          <i className="ri-facebook-line"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-yasir3233/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B48E8] hover:text-[#0077B5] transition-colors"
        >
          <i className="ri-linkedin-line"></i>
        </a>
        <a
          href="https://github.com/malikcancode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B48E8] hover:text-black transition-colors"
        >
          <i className="ri-github-line"></i>
        </a>
        <a
          href="https://www.instagram.com/immalik_32/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B48E8] hover:text-[red] transition-colors"
        >
          <i className="ri-instagram-line"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

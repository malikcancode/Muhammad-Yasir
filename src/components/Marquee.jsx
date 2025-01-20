function Marquee() {
  return (
    <>
      <div className="relative w-full h-auto overflow-hidden bg-transparent mt-20 p-8">
        <h2 className="sm:text-5xl md:text-6xl text-4xl text-start leading-snug md:leading-[5rem] text-white mb-14 md:mx-16">
          Top-Tier Skills for
          <span className="text-[#8B48E8] ml-2">Exceptional Results</span>
        </h2>
        <div className="flex animate-marquee space-x-16">
          <img src="/html-5.png" alt="icon2" className="h-10" />
          <img src="/css-3.png" alt="icon3" className="h-10" />
          <img src="/icons8-bootstrap-240.png" alt="icon3" className="h-10" />
          <img src="/tailwind.png" alt="icon3" className="h-10" />
          <img src="/js.png" alt="icon4" className="h-10" />
          <img src="/react.png" alt="icon1" className="h-10" />
          <img src="/pngwing.com (1).png" alt="icon3" className="h-10" />
          <img src="/node.png" alt="icon1" className="h-10" />
          <img src="/1.png" alt="icon2" className="h-10" />
          <img src="/mongodb.png" alt="icon3" className="h-10" />
          <img src="/adobe-photoshop.png" alt="icon4" className="h-10" />
          <img src="/illustrator.png" alt="icon4" className="h-10" />
        </div>
      </div>
    </>
  );
}

export default Marquee;

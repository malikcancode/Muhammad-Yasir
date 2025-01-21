function Collaborate() {
  return (
    <div className="flex h-full justify-center items-center p-7">
      <a
        href="mailto:malikoffical32@gmail.com"
        className="relative group p-6 border rounded-lg bg-transparent hover:bg-[#8B48E8] transition-transform duration-300 transform hover:scale-105 text-center max-w-[30rem] sm:max-w-[40rem]"
      >
        <h2 className="text-5xl sm:text-6xl sm:leading-none leading-[4rem] text-[#F4F4F5] text-start font-semibold mb-2">
          Let’s Collaborate
        </h2>
        <p className="text-gray-400 group-hover:text-white">
          Unlock the potential of your product with expert design and
          development services. Let’s collaborate to create user-centered
          solutions that not only meet your goals but also delight your users.
        </p>
        <div className="absolute top-2 sm:top-4 right-4 hover:scale-125 transition-transform duration-300 mb-6">
          <i className="ri-arrow-right-up-line border text-sm rounded-full p-1 text-white group-hover:text-black group-hover:bg-white group-hover:text-[#8B48E8]"></i>
        </div>
      </a>
    </div>
  );
}

export default Collaborate;

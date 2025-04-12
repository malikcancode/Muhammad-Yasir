const projectData = [
  {
    id: 1,
    title: "Priceoye",
    subheading: "Ecommerce store clone",
    link: "https://price-oye-clone-xi.vercel.app/",
  },
  {
    id: 2,
    title: "EnhanceX",
    subheading: "Upscale your Image",
    link: "https://enhance-x-image-upscaler.vercel.app/",
  },
  {
    id: 3,
    title: "PawsAndClaws",
    subheading: "Small-town clinic",
    link: "https://paws-and-claws-vet.vercel.app/",
  },
  {
    id: 4,
    title: "AppleVision",
    subheading: "Welcome to spatial computing",
    link: "https://apple-vision-henna.vercel.app/",
  },
  {
    id: 5,
    title: "Golf Website",
    subheading: "Eat Drink Play",
    link: "https://sidcup-family-golf-topaz.vercel.app/",
  },
  {
    id: 6,
    title: "FlavorFusion",
    subheading: "Flavors that Tell a Story",
    link: "https://flavor-fusion-hslh.vercel.app/",
  },
  {
    id: 7,
    title: "Wibe Studio",
    subheading: "Inspire Creative Belief",
    link: "https://wibe-studio-rho.vercel.app/",
  },
  {
    id: 8,
    title: "FarAway",
    subheading: "List your items for Trip",
    link: "https://faraway-travellistapp.netlify.app/",
  },
  {
    id: 9,
    title: "Magma",
    subheading: "Experience Real Estate Agility",
    link: "https://magma-animated-website.netlify.app/",
  },
  {
    id: 10,
    title: "Movie Search",
    subheading: "Search Your Movie",
    link: "https://movie-search-app-five-delta.vercel.app/",
  },
];

function Projects() {
  return (
    <>
      <div className="flex flex-col items-end p-8">
        <h2 className="sm:text-5xl leading-[3rem] sm:leading-none md:text-6xl text-4xl text-white mb-16">
          Recent Projects and{" "}
          <span className="text-[#8B48E8]">Achievements</span>
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-[#272829] hover:bg-[#006d77] rounded-lg overflow-hidden shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-end justify-end">
                  <i className="ri-arrow-right-up-line rounded-full border bg-transparent p-2 hover:bg-[#8B48E8] text-white text-xl transition-transform duration-300 hover:scale-125"></i>
                </div>
                <h3 className="text-3xl tracking-wider font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <h4 className="text-[16px] px-2 font-light tracking-wider mt-8 bg-[#8B48E8] text-white mb-4">
                  {project.subheading}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;

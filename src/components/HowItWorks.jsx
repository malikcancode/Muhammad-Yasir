function HowItWorks() {
  const steps = [
    {
      step: "1",
      description: "Understand your goals and requirements.",
      icon: "ri-focus-2-line",
    },
    {
      step: "2",
      description: "Plan the design and development process.",
      icon: "ri-draft-line",
    },
    {
      step: "3",
      description: "Build and refine the solution.",
      icon: "ri-tools-line",
    },
    {
      step: "4",
      description: "Deliver and support your product.",
      icon: "ri-rocket-line",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center p-6 h-full mt-12 mb-8">
        <h2 className="text-5xl mb-16 text-start sm:leading-[0rem] leading-[4rem] capitalize text-white">
          We will go through with{" "}
          <span className="text-[#8B48E8]">these 4 easy steps</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start p-6 bg-zinc-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <i
                className={`${item.icon} absolute top-4 right-4 text-purple-600 text-2xl`}
              ></i>
              <div className="text-9xl font-bold text-center text-purple-600 mb-4">
                {item.step}
              </div>
              <p className="text-start text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HowItWorks;

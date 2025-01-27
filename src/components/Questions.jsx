import React, { useState } from "react";
import Collaborate from "./Collaborate";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "What services do you offer?",
      questions: [
        {
          answer:
            "I offer responsive web design, interactive user interfaces, MERN stack development, and custom animations tailored to clients' needs.",
        },
      ],
    },
    {
      category: "What is your design process?",
      questions: [
        {
          answer:
            "I follow a structured process: understanding client needs, creating wireframes, designing responsive layouts, integrating animations, and ensuring seamless user experience.",
        },
      ],
    },
    {
      category: "How do you handle project timelines?",
      questions: [
        {
          answer:
            "I break projects into manageable milestones, prioritize tasks, and maintain clear communication to ensure on-time delivery.",
        },
      ],
    },
    {
      category: "Can you work with existing teams?",
      questions: [
        {
          answer:
            "Yes, I excel in collaborating with teams, integrating seamlessly into workflows, and adapting to established processes.",
        },
      ],
    },
    {
      category: "What tools do you use?",
      questions: [
        {
          answer:
            "I use tools like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, GSAP and React.js for Website designing and Node.js Express.js MongoDb for backend solutions.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row mx-8 py-10">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-9xl text-[#8B48E8] mb-4">FAQ</h2>
          <p className="text-sm text-gray-300">
            Find answers to common questions about web development and
            designing.
          </p>
        </div>

        <div className="w-full md:w-3/4 space-y-6">
          {faqData.map((category, index) => (
            <div
              key={index}
              className="bg-[#272829] rounded-lg p-4 shadow-lg transition-all duration-300"
            >
              <button
                className="w-full flex justify-between tracking-wider items-center text-white text-[1rem] font-semibold"
                onClick={() => toggleDropdown(index)}
              >
                {category.category}
                <i
                  className={`ri-arrow-${
                    activeIndex === index ? "down" : "right"
                  }-s-line text-2xl text-[#8B48E8]`}
                ></i>
              </button>
              {activeIndex === index && (
                <div className="mt-4 space-y-2">
                  {category.questions.map((q, i) => (
                    <div key={i}>
                      <p className="text-gray-300 tracking-wide">{q.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <Collaborate />
      </div>
    </>
  );
}

export default Questions;

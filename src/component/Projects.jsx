import React from "react";
import LeftIcon from "../assets/left-arrow.png";
import RightIcon from "../assets/right-arrow.png";
import { projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 w-10 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={LeftIcon} alt="Previous" />
        </button>

        <button
          className="p-3 w-10 bg-gray-200 rounded"
          aria-label="Next Project"
        >
          <img src={RightIcon} alt="Next" />
        </button>
      </div>

      {/* Project slider */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-500">{project.location}</p>
              <p className="text-black font-bold">{project.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

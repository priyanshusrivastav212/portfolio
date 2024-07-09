import React from 'react';
import "@/assets/css/font.css";

import { FaPython, FaRProject, FaGithub, FaTensorflow, FaDatabase } from "react-icons/fa";
import { SiJupyter, SiScikitlearn, SiPowerbi, SiPandas, SiNumpy, SiSeaborn } from "react-icons/si";
import { AiOutlineFileExcel } from "react-icons/ai";

const techstack = [
  { icon: <FaPython className="w-12 h-12 text-white" />, title: "Python", description: "A programming language used for web development, data science, and more.", skillLevel: "Advanced" },
  { icon: <FaDatabase className="w-12 h-12 text-white" />, title: "SQL", description: "A domain-specific language used in programming for managing data.", skillLevel: "Intermediate" },
  { icon: <FaRProject className="w-12 h-12 text-white" />, title: "R", description: "A programming language for statistical computing and graphics.", skillLevel: "Intermediate" },
  { icon: <SiJupyter className="w-12 h-12 text-white" />, title: "Jupyter", description: "An open-source web application for creating and sharing documents.", skillLevel: "Advanced" },
  { icon: <FaGithub className="w-12 h-12 text-white" />, title: "GitHub", description: "A platform for version control and collaboration.", skillLevel: "Advanced" },
  { icon: <FaTensorflow className="w-12 h-12 text-white" />, title: "TensorFlow", description: "An open-source library for machine learning.", skillLevel: "Intermediate" },
  { icon: <SiScikitlearn className="w-12 h-12 text-white" />, title: "Scikit Learn", description: "A machine learning library for Python.", skillLevel: "Advanced" },
  { icon: <SiPowerbi className="w-12 h-12 text-white" />, title: "PowerBI", description: "A business analytics service by Microsoft.", skillLevel: "Intermediate" },
  { icon: <SiPandas className="w-12 h-12 text-white" />, title: "Pandas", description: "A data manipulation and analysis library for Python.", skillLevel: "Advanced" },
  { icon: <SiNumpy className="w-12 h-12 text-white" />, title: "NumPy", description: "A library for numerical computing in Python.", skillLevel: "Advanced" },
  { icon: <SiSeaborn className="w-12 h-12 text-white" />, title: "Seaborn", description: "A Python visualization library based on matplotlib.", skillLevel: "Intermediate" },
  { icon: <AiOutlineFileExcel className="w-12 h-12 text-white" />, title: "Excel", description: "A spreadsheet application for data analysis and visualization.", skillLevel: "Advanced" },
];

const TechstackItem = ({ icon, title, description, skillLevel }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {icon}
      <h3 className="my-3 text-3xl font-semibold">{title}</h3>
      <p className="text-gray-400 mb-2 text-center">{description}</p>
      <p className="text-gray-400 mb-2">Skill Level: {skillLevel}</p>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="container w-full px-8 mx-auto overflow-hidden md:h-screen flex flex-col justify-center">
      <div className="flex flex-col w-full h-full">
        <div className="h-[90%] flex flex-row-reverse max-md:flex-col items-center justify-center">
        </div>
        <div className="flex flex-col items-center w-full my-16 flex-grow justify-center">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="relative w-full">
            <div className="absolute border-l-2 border-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-8 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray-500">{exp.date}</p>
                    <p className="text-sm text-gray-700">{exp.company}</p>
                  </div>
                </div>
                <div className="w-0.5 h-4 bg-gray-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import "@/assets/css/font.css";
import Link from "next/link";
import Image from "next/image";

"use client";
import "@/assets/css/font.css";

const experiences = [
  {
    role: "Programmer Analyst Intern",
    company: "Cognizant",
    date: "Apr 2025 – Present",
    description: "Delivering automated and AI-powered quality engineering solutions using Java, Selenium, and Jira within the QEA team.",
  },
  {
    role: "Data Analyst Intern",
    company: "Great Value Fuels Pvt. Ltd.",
    date: "Nov 2023 – Dec 2023",
    description: "Analyzed operational data from 600+ buses and reduced penalties by 91.4% via route optimization and defaulter detection.",
  },
  {
    role: "AI Prompt Engineer Intern",
    company: "Saraswati Vidyamandir",
    date: "Oct 2023 – Nov 2023",
    description: "Improved question quality for JEE/NEET by 93% and developed prompt engineering pipelines using NLP techniques.",
  },
];

export default function Experience() {
  return (
    <section className="bg-[#0e0e0e] text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full -ml-2.5 mt-1.5"></div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-400 mb-1">{exp.company} • {exp.date}</p>
            <p className="text-base text-gray-200">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/*const experiences = [
  {
    role: "Programmer Analyst Intern",
    company: "Cognizant",
    date: "April 2025 - Present",
    description: "Working with the QEA team to deliver automated and AI-powered quality engineering solutions using Java, Selenium, and Jira."
  },
  {
    role: "Data Analyst Intern",
    company: "Great Value Fuels Pvt. Ltd.",
    date: "November 2023 - December 2023",
    description: "Analyzed operational data from 600+ buses, reducing penalties by 91.4% through route optimization and defaulter detection."
  },
  {
    role: "AI Prompt Engineer Intern",
    company: "Saraswati Vidyamandir",
    date: "October 2023 - November 2023",
    description: "Created and refined natural language prompts, improving JEE/NEET question quality by 93% with 83.4% accuracy in validation."
  }
];


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
}*/

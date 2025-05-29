import "@/assets/css/font.css";
import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
    role: 'Programmer Analyst Intern',
    date: 'April 2025 - Present',
    company: 'Cognizant'
  },
  {
    role: 'Data Analyst Intern',
    date: 'November 2023 - December 2023',
    company: 'Great Value Fuels Pvt. Ltd.'
  },
  {
    role: 'AI Prompt Engineer Intern',
    date: 'October 2023 - November 2023',
    company: 'Saraswati Vidyamandir'
  }
];


/*export default function Contact() {
  return (
    <section className="container w-full px-8 mx-auto overflow-hidden md:h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="h-[90%] flex flex-row-reverse max-md:flex-col items-center justify-center">
        </div>
        <div className="flex flex-col items-center w-full my-16">
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

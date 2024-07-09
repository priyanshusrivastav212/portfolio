import "@/assets/css/font.css";

import { FaPython, FaRProject, FaGithub, FaTensorflow, FaDatabase } from "react-icons/fa";
import { SiJupyter, SiScikitlearn, SiPowerbi, SiPandas, SiNumpy, SiSeaborn } from "react-icons/si";
import { AiOutlineFileExcel } from "react-icons/ai";

const techStack = [
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

const TechStackItem = ({ icon, title, description, skillLevel }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {icon}
      <h3 className="my-3 text-3xl font-semibold">{title}</h3>
      <p className="text-gray-400 mb-2 text-center">{description}</p>
      <p className="text-gray-400 mb-2">Skill Level: {skillLevel}</p>
    </div>
  );
}

export default function Techstack() {
  return (
    <div id="techstack" className="h-fit w-full">
      <section className="bg-zinc-900 py-5 flex flex-col justify-center items-center w-full text-gray-100 h-fit">
        <div className="container p-4 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Tech Stack</h2>
          <p className="text-gray-400">To make me a superhero</p>
        </div>
        <div className="container mx-auto grid justify-center gap-7 sm:grid-cols-4">
          {techStack.map((tech, index) => (
            <TechStackItem
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
              skillLevel={tech.skillLevel}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

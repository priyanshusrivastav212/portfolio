import "@/assets/css/font.css";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

/*export default function Contact() {
  return (
    <section className="container w-full px-8 mx-auto overflow-hidden md:h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="h-[90%] flex flex-row-reverse max-md:flex-col items-center justify-center">
          <div>
            <Image src="/me_.jpg" width="560" height="560" alt="me.jpg" className="max-md:w-64 max-md:pb-5" />
          </div>
          <div className="text-center max-md:text-sm max-md:mb-3">
            <p>
              if you&apos;re interested in working on a project together, have
              any questions, or just want to connect.
            </p>
            <Link href="mailto:priyanshu.0702@gmail.com" className="font-medium underline">priyanshu.0702@gmail.com</Link>
          </div>
        </div>
      <div className="max-md:mt-16">
        <Footer />
      </div>
      </div>
    </section>
  );
}*/

interface Experience {
  role: string;
  date: string;
  company: string;
}

const experiences: Experience[] = [
  { role: 'Frontend Intern', date: 'MAY 2024', company: 'Trust Millennia' },
  { role: 'Frontend Developer', date: 'APRIL 2024', company: 'RestooAI' },
  { role: 'Front end Developer', date: 'MARCH 2024', company: 'PixelMize Infotech' },
  { role: 'Frontend Developer', date: 'JUNE 2023', company: 'FilmyBugs Entertainment' },
];

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div className={styles.experience} key={index}>
            <div className={styles.dot}></div>
            <div className={styles.details}>
              <h2 className={styles.role}>{exp.role}</h2>
              <p className={styles.date}>{exp.date}</p>
              <p className={styles.company}>{exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

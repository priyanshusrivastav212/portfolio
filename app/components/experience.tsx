/*import "@/assets/css/font.css";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
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
}
*/
import "@/assets/css/font.css";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

const experiences = [
  { role: 'Frontend Intern', date: 'May 2024', company: 'Trust Millennia' },
  { role: 'Frontend Developer', date: 'April 2024', company: 'RestooAI' },
  { role: 'Frontend Developer', date: 'March 2024', company: 'PixelMize Infotech' },
  { role: 'Frontend Developer', date: 'June 2023', company: 'FilmyBugs Entertainment' },
];

export default function Contact() {
  return (
    <section className="container w-full px-8 mx-auto overflow-hidden md:h-screen">
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
        <div className="max-md:mt-16">
          <Footer />
        </div>
      </div>
    </section>
  );
}

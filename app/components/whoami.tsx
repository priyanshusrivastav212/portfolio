import "@/assets/css/icons.css";
import "@/assets/css/font.css";

export default function Whoami() {
  return (
    <section className="overflow-hidden md:h-screen max-lg:h-full max-md:px-5 max-xl:px-8 max-md:pt-28">
      <div className="container flex flex-col justify-center h-full mx-auto max-md:pb-16">
        <div className="pt-3 max-sm:pt-0 text-8xl font-bold max-md:text-center text-[#181a1b] max-md:text-6xl max-md:mb-2">
          Hello, <br /> I am <br /> Mohamed Ali.
        </div>
        <div className="font-inter pb-20 max-md:pb-1 pl-1 flex items-center text-lg max-lg:text-base max-md:text-center text-[#212121]">
          Highly motivated and goal-oriented Final-Year engineering student <br />specializing in AI & ML. 
          Strong programming skills in Python and implementing libraries such <br />
          as TensorFlow, Keras, OpenCV, Pytorch, etc. As I progress in my academic journey, <br />
          I am actively seeking internship opportunities to further develop my skills and <br />
          gain practical experience in the industry. If you are searching for a motivated and <br />
          adaptable engineering student with a passion for sustainable innovation, I would be delighted to connect with you.
        </div>
        <div className="relative max-md:hidden">
          {/* https://codepen.io/mikewagz/pen/PGXqOg */}
          <div className="scroll-down-dude"></div>
        </div>
      </div>
    </section>
  );
}

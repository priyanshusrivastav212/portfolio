import "@/assets/css/icons.css";
import "@/assets/css/font.css";

export default function Whoami() {
  return (
    <section className="overflow-hidden md:h-screen max-lg:h-full max-md:px-5 max-xl:px-8 max-md:pt-28">
      <div className="container flex flex-col justify-center h-full mx-auto max-md:pb-16">
        <div className="pt-3 max-sm:pt-0 text-8xl font-bold max-md:text-center text-[#181a1b] max-md:text-6xl max-md:mb-2">
          Hello, <br /> I am <br /> Priyanshu Srivastav.
        </div>
        <div className="font-inter pb-20 max-md:pb-1 pl-1 flex items-center text-lg max-lg:text-base max-md:text-center text-[#212121]">
          <br /> CSE graduate and passionate ML enthusiast, aspiring to be a <br /> skilled and innovative data scientist.
        </div>
        <div className="relative max-md:hidden">
          {/* https://codepen.io/mikewagz/pen/PGXqOg */}
          <div className="scroll-down-dude"></div>
        </div>
      </div>
    </section>
  );
}

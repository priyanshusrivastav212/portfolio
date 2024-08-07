import "@/assets/css/navbar.css";
import "@/assets/css/icons.css";
import "@/assets/css/main.css";
import { NavElement, NavProps } from "@/app/interfaces/navbar";
import Link from "next/link";

const navElements: NavElement[] = [
  { label: "Whoami", link: "#whoami", external: false },
  { label: "Projects", link: "#projects", external: false },
  { label: "Experience", link: "#experience", external: false },
  //{ label: "Techstack", link: "#techstack", external: false },
  { label: "Contact", link: "#contact", external: false },
];

export default function Navbar({ handleLinkClick }: NavProps) {
  return (
    <header className="fixed top-0 left-0 z-10 w-full">
      <nav className="container mx-auto max-md:px-5 max-xl:px-8 bg-[#f6f5f4]">
        <div className="container flex justify-between w-full py-5 xl:absolute xl:top-0">
          <div className="flex items-center gap-5 pl-1 max-md:w-full max-sm:justify-center max-sm:gap-4 max-lg:pl-0">
            {navElements.map((navItem, index) => (
              <a
                key={navItem.label}
                className="cursor-pointer section"
                href={navItem.link}
                target={navItem.external ? "_blank" : ""}
                onClick={(e) => {
                  navItem.external ? '' : handleLinkClick(e)
                }}
              >
                {navItem.label}
                {navItem.external ? ( <span className="external-link-icon"></span> ) : ( "" )}
              </a>
            ))}
          </div>
          <div>
            <Link href="https://drive.google.com/file/d/1VR_D-dAAZzkLHkh7Jgd9fOIqMZtqH5Ei/view?usp=drive_link" target="_blank" className="w-full">
              <div className="text-center max-sm:hidden">
                Priyanshu Srivastav's Resume
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

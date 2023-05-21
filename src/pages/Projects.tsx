import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

import { Container } from "../components/Container";
import { AllProjects } from "../components/Projects";

import flower from "../assets/bg-flower.jpg";

export function Projects() {
  return (
    <Container bgImage={flower}>
      <section className="w-full h-4/5 flex items-center justify-center animate-changeOpDire">
        <AllProjects />
      </section>
      <div className="max-w-[1680px] flex flex-col px-4 -mt-8 text-gray-500">
        <div className="flex flex-row flex-wrap gap-1 items-center justify-end">
          <p className="text-xs">{"{ "}Esse portifólio foi criado com</p>
          <DiReact size={19} className="text-blue-400 opacity-70" />
          <SiTailwindcss size={19} className="text-blue-400 opacity-70" />
        </div>
        <div className="flex justify-end">
          <p className="text-xs">
            Para ver o repositório{" "}
            <a
              href="https://github.com/Lokeon22/Portfolio"
              target="_blank"
              className="text-blue-400 opacity-80 hover:text-blue-500 hover:duration-200"
            >
              clique aqui
            </a>
            {" }"}
          </p>
        </div>
      </div>
    </Container>
  );
}

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { motion } from "framer-motion";

import { ProjectType } from "../types/ProjectsType";
import { getAllProjects } from "../services/apiCMS";
import { AnimationMotion } from "../animations";

import { Container } from "../components/Container";
import { Carousel } from "../components/Carousel";
import { Loading } from "../components/Loading";

import japan from "../assets/japan.jpg";
import github from "../assets/icons/github.svg";
import live from "../assets/icons/live.svg";

export function ProjectDetails() {
  const [projetos, setProjetos] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const { arrowAnimate } = AnimationMotion({});

  useEffect(() => {
    getAllProjects({ setProjetos, setLoading });
  }, []);

  const [projectFiltered] = projetos.filter(
    (project) => project.cardTitle == name
  );

  return (
    <Container bgImage={japan}>
      <section className="w-full h-4/5 flex flex-col items-center justify-center">
        <Link
          to={"/projects"}
          className="mr-auto xl:pl-6 2xl:pl-[4.5rem] pl-4 hover:text-red-900 hover:duration-300"
        >
          Voltar
        </Link>
        {loading && <Loading text="Carregando projeto..." />}
        {projectFiltered && (
          <>
            <div className="flex flex-col mx-auto my-0 px-2 py-2 text-white animate-modifyScale">
              <div className="flex flex-wrap items-center sm:gap-4 gap-2 mb-2 sm:mt-12 mt-14 max-[340px]:mt-4">
                <h2 className="sm:text-4xl text-3xl font-Noto-Sans">
                  {projectFiltered.cardTitle}
                </h2>
                <a href={projectFiltered.githubPreview} target="_blank">
                  <img
                    src={github}
                    className="sm:w-[22px] sm:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                  />
                </a>
                <a href={projectFiltered.livePreview} target="_blank">
                  <img
                    src={live}
                    className="sm:w-[22px] sm:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                  />
                </a>
              </div>
              <p className="max-w-[500px] sm:text-base text-sm text-gray-300">
                {projectFiltered.cardDescription}
              </p>
              <footer className="flex flex-wrap items-center mt-4 mb-4">
                <h2 className="font-Noto-Sans sm:text-base text-sm">
                  Tech Stack:
                </h2>
                <span className="text-slate-300 sm:text-sm text-xs font-mono bg-slate-700 rounded-md px-2 py-[2px] sm:ml-2 ml-1">
                  {projectFiltered.stackPreview}
                </span>
              </footer>
            </div>
            <Carousel>
              {projectFiltered.galeryProjects.length > 0 &&
                projectFiltered.galeryProjects.map((foto, index) => (
                  <div
                    key={index}
                    className="px-2 py-2 flex-none md:max-w-[800px] w-full animate-modifyScale"
                  >
                    <img
                      src={foto.url}
                      className="w-full rounded shadow-md shadow-red-500/30"
                    />
                  </div>
                ))}
            </Carousel>
            <motion.div
              className="md:hidden flex justify-center items-center mt-2"
              variants={arrowAnimate}
              initial="initial"
              animate="animate"
              transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
            >
              <AiOutlineDoubleRight size={22} />
            </motion.div>
          </>
        )}
      </section>
    </Container>
  );
}

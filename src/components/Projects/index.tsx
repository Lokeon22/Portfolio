import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllProjects } from "../../services/apiCMS";
import { ProjectType } from "../../types/ProjectsType";
import { Loading } from "../Loading";

import github from "../../assets/icons/github.svg";
import live from "../../assets/icons/live.svg";

export function AllProjects() {
  const [projetos, setProjetos] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProjects({ setProjetos, setLoading });
  }, []);

  return (
    <>
      {loading && <Loading text="Carregando Projetos..." />}
      <div className="max-w-[1440px] 2xl:h-auto sm:h-3/4 h-[430px] max-[346px]:h-[350px] font-medium overflow-y-auto scrollbar-hide scroll-smooth scrollbar-thin scrollbar-thumb-[#660000] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="text-slate-200 bg-gray-900 rounded-2xl bg-opacity-10 px-2 py-2 md:px-4 md:py-4 w-full h-full"
            >
              <Link to={`/projects/${projeto.cardTitle}`}>
                <img
                  src={projeto.cardImage.url}
                  className="rounded-xl mb-1 w-full xl:h-[220px] h-auto hover:scale-105 duration-200 cursor-pointer"
                />
              </Link>
              <div className="flex items-center gap-3">
                <h2 className="text-lg md:text-xl">{projeto.cardTitle}</h2>
                <a href={projeto.githubPreview} target="_blank">
                  <img
                    src={github}
                    className="md:w-[22px] md:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                  />
                </a>
                <a href={projeto.livePreview} target="_blank">
                  <img
                    src={live}
                    className="md:w-[22px] md:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                  />
                </a>
              </div>
              <p className="text-slate-300 mt-1 mb-2 sm:text-sm text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                {projeto.cardDescription}
              </p>
              <label className="mt-2 text-sm sm:text-base">
                <ul className="flex items-center flex-wrap gap-2">
                  <li className="text-slate-300 sm:text-sm text-xs font-mono bg-slate-700 rounded-md px-2 py-[2px] max-[340px]:text-[10px]">
                    {projeto.stackPreview}
                  </li>
                </ul>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

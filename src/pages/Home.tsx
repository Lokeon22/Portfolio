import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container } from "../components/Container";
import { AnimationMotion } from "../animations";
import { Socials } from "../components/Socials";
import { useIsSmall } from "../hooks/useMediaQuery";

import flower from "../assets/bg-flower.jpg";
import dragon from "../assets/icons/double-dragon.svg";
import sword from "../assets/shortVideo/sword.mp4";

export function Home() {
  const [handlerDom, setHandlerDom] = useState<boolean>(false);

  const doubleDragon = useRef<HTMLImageElement>(null);
  const isSmall = useIsSmall();

  const { borderAnimate, dragonMovement, videoAnimate, projectsAnimate } =
    AnimationMotion({
      handlerDom,
      isSmall,
    });

  function handleDragon() {
    setHandlerDom(!handlerDom);
    doubleDragon.current?.classList.toggle("animate-spin");
  }

  return (
    <Container bgImage={flower}>
      <section style={{ display: handlerDom ? "block" : "none" }}>
        <motion.div
          variants={borderAnimate}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 30,
            delay: 0.5,
          }}
          initial="initial"
          animate="animate"
          className="w-[71%] grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:border-4 border-[1px] md:border-slate-200 rounded opacity-80"
        >
          <div className="px-8 text-gray-100 md:col-span-2 col-span-2 font-Noto-Sans">
            <h2 className="md:text-[55px] text-2xl md:mt-0 mt-2 leading-none 2xl:text-center text-start">
              Oi, me chamo{" "}
              <strong className="font-bold text-red-800">Gabriel Felipe</strong>
            </h2>
            <p className="2xl:text-center text-start md:mt-4 mt-2 text-sm md:text-base">
              Sou um desenvolvedor web estudando frontend com React + TypeScript
              e backend com Node.
            </p>
            <p className="2xl:text-center text-start md:mt-0 mt-1 md:text-base text-sm">
              Na parte acadêmica, estou cursando o último semestre de Análise e
              Desenvolvimento de Sistemas.
            </p>
          </div>
          <motion.video
            variants={videoAnimate}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 20,
              delay: 1.3,
            }}
            initial="initial"
            animate="animate"
            src={sword}
            autoPlay
            playsInline
            loop
            muted
            className="opacity-80 lg:mx-0 mx-[50%] max-[340px]:hidden lg:border-l-4 lg:border-slate-200 border-l-0"
          />
        </motion.div>
      </section>

      <div className="flex flex-col h-4/5 items-center justify-center sm:py-6 sm:px-12 py-4 px-4">
        <motion.img
          onClick={handleDragon}
          className="sm:w-52 w-36 mb-4 cursor-pointer bg-red-900 rounded-full animate-spin"
          src={dragon}
          alt="dois dragoes"
          ref={doubleDragon}
          variants={dragonMovement}
          animate="animate"
          transition={{
            transition: { type: "tween", stiffness: 10, duration: 10 },
          }}
        />
        <span
          style={{ display: handlerDom ? "none" : "block" }}
          className="text-xs sm:text-sm font-Noto-Sans text-gray-300"
        >
          Clique aqui!
        </span>
      </div>
      <Link
        className="fixed rotate-90 text-xl md:text-4xl font-semibold hover:scale-110 cursor-pointer max-[340px]:top-3/4 top-1/2 xl:left-[92%] md:left-[87%] left-[82%]"
        to="/projects"
      >
        <motion.p variants={projectsAnimate} initial="hidden" animate="show">
          Projetos
        </motion.p>
      </Link>
      <Socials />
    </Container>
  );
}

interface AnimationProps {
  isSmall: boolean;
  handlerDom: boolean;
}

export function AnimationMotion({ isSmall, handlerDom }: AnimationProps) {
  const dragonMovement = isSmall
    ? {
        animate: {
          y: handlerDom ? window.innerHeight / 2 - window.innerHeight / 12 : 0,
          width: handlerDom ? 80 : 220,
        },
      }
    : {
        animate: {
          y: handlerDom ? window.innerHeight / 2 - window.innerHeight / 8 : 0,
          width: handlerDom ? 80 : 150,
        },
      };

  const videoAnimate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: handlerDom ? 0.8 : 0,
    },
  };

  const borderAnimate = {
    initial: {
      opacity: 0,
      width: "1%",
    },
    animate: {
      opacity: handlerDom ? 0.8 : 0,
      width: handlerDom ? "71%" : 0,
    },
  };

  const projectsAnimate = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { type: "spring", stiffness: 30, delay: 1.25 },
    },
  };

  return { dragonMovement, videoAnimate, borderAnimate, projectsAnimate };
}

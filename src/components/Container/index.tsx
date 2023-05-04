import { useState } from "react";

import { Header } from "../Header";
import { Modal } from "../ContactModal";

interface ContainerProps {
  bgImage: string;
  children: React.ReactNode;
}

export function Container({ bgImage, children }: ContainerProps) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <main
      className="relative w-full h-screen bg-no-repeat bg-center lg:bg-cover z-40 font-Noto-Sans"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute w-full h-full bg-black opacity-80 -z-10" />
      <Header setModal={setModal} />
      {modal && <Modal setModal={setModal} />}
      {children}
    </main>
  );
}

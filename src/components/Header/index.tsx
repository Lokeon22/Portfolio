import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeaderProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setModal }: HeaderProps) {
  function handleModal() {
    setModal(true);
  }

  return (
    <header className="flex justify-between items-center sm:py-6 xl:px-6 2xl:px-[4.5rem] py-4 px-4 text-slate-100 font-Noto-Sans">
      <div className="flex items-center gap-10">
        <Link className="text-2xl md:text-4xl" to="/">
          GJ
        </Link>
        <span className="text-2xl">...</span>
      </div>
      <motion.h2
        className="text-xl md:text-3xl cursor-pointer lg:hover:text-4xl hover:duration-100"
        onClick={handleModal}
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 40, delay: 1 }}
      >
        Contato
      </motion.h2>
    </header>
  );
}

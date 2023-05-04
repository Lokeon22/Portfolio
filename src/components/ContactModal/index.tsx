import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ setModal }: ModalProps) {
  const form = useRef<HTMLFormElement>(null);

  function handleOutsideModal(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (e.target === e.currentTarget) setModal(false);
    return;
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.current)
      emailjs
        .sendForm(
          "gmailMessage",
          import.meta.env.VITE_TEMPLATE_KEY,
          form.current,
          import.meta.env.VITE_EMAILJS_KEY
        )
        .then(
          () => {
            alert(
              "Mensagem enviada com sucesso! Obrigado por entrar em contato"
            );
            setModal(false);
          },
          (error) => {
            alert(error.message);
          }
        );
    const target = e.target as HTMLFormElement;
    target.reset();
  }

  return (
    <section
      className="fixed w-full h-full top-0 left-0 bg-black-rgba z-[999] animate-modifyScale"
      onClick={(e) => handleOutsideModal(e)}
    >
      <div className="fixed max-w-[310px] sm:max-w-[550px] w-full h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 z-50 rounded-md">
        <AiOutlineClose
          className="w-6 h-6 ml-auto mt-3 mr-4 cursor-pointer"
          onClick={() => setModal(false)}
        />
        <form
          className="flex flex-col gap-3 p-4 md:p-8 text-black"
          ref={form}
          onSubmit={sendEmail}
        >
          <p className="text-gray-100 text-xs sm:text-sm">Entre em contato!</p>
          <input
            required
            type="text"
            name="name"
            className="p-2 h-10 rounded outline-none bg-gray-100"
            placeholder="Nome"
          />
          <input
            required
            type="email"
            name="email"
            className="p-2 h-10 rounded outline-none bg-gray-100"
            placeholder="Email"
          />
          <textarea
            className="p-2 h-24 resize-none rounded outline-none bg-gray-100"
            name="message"
            placeholder="Mensagem"
            required
          />
          <button
            className="h-10 hover:brightness-75 hover:duration-300 bg-red-800 text-gray-200 rounded"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

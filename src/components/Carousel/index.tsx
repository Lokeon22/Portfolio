import { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const divCarousel = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (divCarousel.current)
      divCarousel.current.scrollLeft += divCarousel.current.offsetWidth;
  };

  const previusSlide = () => {
    if (divCarousel.current)
      divCarousel.current.scrollLeft -= divCarousel.current.offsetWidth;
  };

  return (
    <section className="flex justify-center items-center mx-auto my-0 max-w-[900px] gap-2 px-4">
      <button
        className="hidden md:block hover:opacity-50 hover:text-red-500 hover:transition-all hover:ease-in"
        onClick={previusSlide}
      >
        <AiOutlineLeft size={32} />
      </button>
      <div
        className="flex overflow-x-auto max-w-[800px] mx-auto my-0 scroll-smooth scrollbar-hide"
        ref={divCarousel}
      >
        {children}
      </div>
      <button
        className="hidden md:block hover:opacity-50 hover:text-red-500 hover:transition-all hover:ease-in"
        onClick={nextSlide}
      >
        <AiOutlineLeft size={32} className="rotate-180" />
      </button>
    </section>
  );
};

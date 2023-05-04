import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingProps {
  text: string;
}

export function Loading({ text }: LoadingProps) {
  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <AiOutlineLoading3Quarters className="w-8 h-8 animate-spin" />
      <h2 className="text-lg">{text}</h2>
    </div>
  );
}

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

export function CarouselButton({ direction, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "fixed bottom-1/2 z-10 hidden bg-zinc-950 p-4 text-sm text-white active:opacity-90 md:block",
        direction == "right" && "right-10",
        direction == "left" && "left-10"
      )}
    >
      {direction == "right" ? (
        <ChevronRightIcon className="h-6 w-6 text-white" />
      ) : (
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}

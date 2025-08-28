import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { experiences, experienceImages } from "../data/expdata";
import { useEffect, useState } from "react";

interface Props {
  animate: boolean;
}

export default function Pengalaman({ animate }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const [btnActive, setBtnActive] = useState({ prev: false, next: false });
  const [isMobile, setIsMobile] = useState(false);
  const total = experiences.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    if (isMobile) return [experiences[startIndex % total]];
    return [
      experiences[startIndex % total],
      experiences[(startIndex + 1) % total],
      experiences[(startIndex + 2) % total],
    ];
  };

  const getImage = (idx: number) =>
    experienceImages[idx % experienceImages.length];

  const next = () => {
    setBtnActive((prev) => ({ ...prev, next: true }));
    setTimeout(() => setBtnActive((prev) => ({ ...prev, next: false })), 150);
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setBtnActive((prev) => ({ ...prev, prev: true }));
    setTimeout(() => setBtnActive((prev) => ({ ...prev, prev: false })), 150);
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div
      className={`transition-opacity duration-700 ease-out transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      {/* Tombol mobile */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        {/* Tombol mobile */}
        {isMobile && (
          <>
            <button
              onClick={prev}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full shadow-lg transition-colors duration-200 ${btnActive.prev
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white hover:bg-yellow-500"
                }`}
            >
              <HiChevronLeft className="text-3xl" />
            </button>
            <button
              onClick={next}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full shadow-lg transition-colors duration-200 ${btnActive.next
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white hover:bg-yellow-500"
                }`}
            >
              <HiChevronRight className="text-3xl" />
            </button>
          </>
        )}

        {/* Card wrapper */}
        <div className="flex overflow-hidden w-full max-w-md sm:max-w-none sm:space-x-6 justify-center">
          {getVisibleCards().map((exp, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-neutral-900 border border-[#ddc6a1] rounded-2xl shadow-lg w-full sm:w-[360px] md:w-[400px] flex-shrink-0"
            >
              <div className="absolute inset-0 z-0 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-yellow-200 before:transition-all before:duration-500 group-hover:before:w-full before:z-[-1]" />

              <div className="flex flex-col sm:flex-row sm:h-[420px] relative z-10">

                {/* Gambar 1:1 (mobile) */}
                <div className="block sm:hidden w-full aspect-square overflow-hidden border-b border-[#ddc6a1]">
                  <img
                    src={getImage(startIndex + i)}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Konten */}
                <div className="p-6 flex flex-col justify-between flex-1 text-center">
                  <div className="flex justify-center mb-2">{exp.icon}</div>
                  <h3 className="text-2xl font-semibold mb-1 group-hover:text-black transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 group-hover:text-black transition-colors duration-300">
                    {exp.company}
                  </p>
                  <p className="text-xs italic mt-2 text-gray-500 group-hover:text-black transition-colors duration-300">
                    {exp.duration}
                  </p>
                  <p className="mt-2 text-gray-300 text-sm group-hover:text-black transition-colors duration-300">
                    {exp.shortDescription}
                  </p>
                </div>

                {/* Gambar samping (desktop) */}
                <div className="w-[160px] md:w-[200px] h-full hidden sm:block border-l border-[#ddc6a1]">
                  <img
                    src={getImage(startIndex + i)}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol desktop */}
        {!isMobile && (
          <>
            <button
              onClick={prev}
              className={`absolute left-0 sm:-left-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full shadow-lg transition-colors duration-200 ${btnActive.prev
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white hover:bg-yellow-500"
                }`}
            >
              <HiChevronLeft className="text-3xl sm:text-4xl" />
            </button>
            <button
              onClick={next}
              className={`absolute right-0 sm:-right-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full shadow-lg transition-colors duration-200 ${btnActive.next
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white hover:bg-yellow-500"
                }`}
            >
              <HiChevronRight className="text-3xl sm:text-4xl" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

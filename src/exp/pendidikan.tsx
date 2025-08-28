import { education } from "../data/expdata";

interface Props {
  animate: boolean;
}

export default function Pendidikan({ animate }: Props) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto transition-opacity duration-700 ease-out transform ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {education.map((edu, i) => (
        <div
          key={i}
          className="group relative overflow-hidden bg-neutral-900 border border-[#ddc6a1] rounded-2xl p-6 shadow-lg"
        >
          {/* Background animasi dari kiri ke kanan */}
          <div className="absolute inset-0 z-0 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-yellow-200 before:transition-all before:duration-500 group-hover:before:w-full before:z-[-1]" />

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-4">{edu.icon}</div>
            <h3 className="text-2xl font-semibold mb-1 group-hover:text-black transition-colors duration-300">
              {edu.degree}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-black transition-colors duration-300">
              {edu.school}
            </p>
            <p className="text-xs italic mt-2 text-gray-500 group-hover:text-black transition-colors duration-300">
              {edu.duration}
            </p>
            <p className="mt-4 text-gray-300 text-sm group-hover:text-black transition-colors duration-300 whitespace-pre-line">
              {edu.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

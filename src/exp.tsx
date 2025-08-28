import { useRef, useEffect, useState } from "react";
import Pengalaman from "./exp/pengalaman";
import Pendidikan from "./exp/pendidikan";

// Generic useOnScreen hook yang mendukung HTMLHeadingElement
function useOnScreen<T extends Element>(
  ref: React.RefObject<T | null>,
  rootMargin = "0px"
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export default function ExperiencePage() {
  const experienceRef = useRef<HTMLHeadingElement | null>(null);
  const educationRef = useRef<HTMLHeadingElement | null>(null);

  const experienceVisible = useOnScreen<HTMLHeadingElement>(experienceRef, "-100px");
  const educationVisible = useOnScreen<HTMLHeadingElement>(educationRef, "-100px");

  const [experienceAnimate, setExperienceAnimate] = useState(false);
  const [educationAnimate, setEducationAnimate] = useState(false);

  useEffect(() => {
    if (experienceVisible) setExperienceAnimate(true);
  }, [experienceVisible]);

  useEffect(() => {
    if (educationVisible) {
      const timer = setTimeout(() => setEducationAnimate(true), 600);
      return () => clearTimeout(timer);
    }
  }, [educationVisible]);

  return (
    <div className="min-h-screen bg-black py-12 px-6 lg:px-24 text-gray-100">
      <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-2 font-semibold">
        Pengalaman Karir Dan Pendidikan
      </p>

      <h2
        ref={experienceRef}
        className={`text-4xl md:text-5xl font-extrabold text-center mb-10 transition-opacity duration-700 ease-out transform ${experienceAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transformOrigin: "top" }}
      >
        Pengalaman Karir
      </h2>

      <Pengalaman animate={experienceAnimate} />

      <h2
        ref={educationRef}
        className={`text-4xl md:text-5xl font-extrabold text-center mt-24 mb-10 transition-opacity duration-700 ease-out transform ${educationAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transformOrigin: "top" }}
      >
        Pendidikan
      </h2>

      <Pendidikan animate={educationAnimate} />
    </div>
  );
}

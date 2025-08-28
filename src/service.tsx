import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="relative group w-64 min-h-[320px] rounded-xl overflow-hidden border"
      style={{ borderColor: "#ddc6a1" }}
      variants={cardVariants}
    >
      {/* Animasi latar dari bawah ke atas */}
      <div className="absolute inset-0 bg-yellow-200 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Konten Card */}
      <div className="relative z-10 bg-neutral-900 group-hover:bg-transparent text-white group-hover:text-black px-6 py-10 transition-colors duration-300 ease-in-out text-left h-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold opacity-40 mb-2">0{number}.</h3>
          <h4 className="text-lg font-semibold mb-3">{title}</h4>
          <p className="text-sm opacity-70">{description}</p>
        </div>
        <div className="mt-6 w-8 h-1 bg-[#ddc6a1] group-hover:bg-black transition duration-300"></div>
      </div>
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Services() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // animasi trigger saat hampir muncul

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const services = [
    {
      number: 1,
      title: "UI / UX DESIGN",
      description:
        "Merancang antarmuka pengguna yang intuitif dan menarik secara visual menggunakan Figma untuk memastikan pengalaman pengguna yang mulus.",
    },
    {
      number: 2,
      title: "FRONT-END DEVELOPER",
      description:
        "Membangun situs web yang cepat, responsif, dengan bahasa pemrograman React, Vue, Tailwind, Bootstrap dan mudah diakses menggunakan teknologi modern.",
    },
    {
      number: 3,
      title: "BACK-END DEVELOPER",
      description:
        "Membangun dan mengelola server, database, dan API menggunakan bahasa pemrograman seperti Laravel, PHP, dan Node.js untuk memastikan performa dan skalabilitas aplikasi.",
    },
    {
      number: 4,
      title: "GAME DEVELOPER",
      description:
        "Mengerjakan pengembangan game menggunakan Scratch, Construct, dan Godot untuk menciptakan pengalaman bermain yang menarik dan interaktif.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-black text-white py-20 text-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h2 id="services" className="scroll-mt-35 text-center text-sm text-gray-400 uppercase tracking-widest mb-3 font-semibold">
        SERVICES
      </h2>

      <h2 className="text-5xl font-bold mb-10">What I Do?</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </motion.div>
  );
}

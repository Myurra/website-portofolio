import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaGamepad,
  FaJs,
  FaPhp,
  FaReact,
  FaBootstrap,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiGodotengine,
  SiScratch,
  SiConstruct3,
  SiTailwindcss,
} from "react-icons/si";

type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

type Skill = {
  title: string;
  icon: React.ReactNode;
  rating: number;
  description: string;
  gallery: GalleryItem[];
};

const skills: Skill[] = [
  {
    title: "Front-End",
    icon: <FaCode />,
    rating: 4,
    description:
      "Developing responsive, user-friendly interfaces using React, Tailwind CSS, and modern JavaScript.",
    gallery: [
        {
          image:
            "/src/assets/webpro1.png",
          title: "API Development",
          description: "RESTful API with Express and Node.js.",
        },
      {
        image:
          "/src/assets/webpro.png",
        title: "Tailwind Styling",
        description: "Fully responsive Tailwind design.",
      },
    ],
  },
  {
    title: "Back-End",
    icon: <FaServer />,
    rating: 3,
    description:
      "Building robust APIs and server-side logic with Node.js, Express, and databases.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1555949963-258b1f0f5ca6?auto=format&fit=crop&w=800&q=80",
        title: "API Development",
        description: "RESTful API with Express and Node.js.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        title: "Database Design",
        description: "Schema design for relational and NoSQL databases.",
      },
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    rating: 4.5,
    description:
      "Crafting intuitive and beautiful user experiences with design tools and user research.",
    gallery: new Array(10).fill(0).map((_, i) => ({
      image: `https://picsum.photos/seed/uiux${i}/400/300`,
      title: `UIUX ${i + 1}`,
      description: `Deskripsi UIUX ${i + 1}`,
    })),
  },
  {
    title: "Game Development",
    icon: <FaGamepad />,
    rating: 3.5,
    description: "Creating engaging 2D and 3D games using Unity and C#.",
    gallery: new Array(6).fill(0).map((_, i) => ({
      image: `https://picsum.photos/seed/game${i}/400/300`,
      title: `Game ${i + 1}`,
      description: `Deskripsi Game ${i + 1}`,
    })),
  },
];

// ...lanjut seperti kode kamu semula, tanpa perubahan lain


const languages = [
  { name: "JavaScript", icon: <FaJs size={32} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
  { name: "PHP", icon: <FaPhp size={32} color="#777BB4" /> },
  { name: "React", icon: <FaReact size={32} color="#61DAFB" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={32} color="#7952B3" /> },
  { name: "Laravel", icon: <FaLaravel size={32} color="#FF2D20" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} color="#38B2AC" /> },
  { name: "Godot", icon: <SiGodotengine size={32} color="#478CBF" /> },
  { name: "Scratch", icon: <SiScratch size={32} color="#F0C419" /> },
  { name: "Construct", icon: <SiConstruct3 size={32} color="#6B7280" /> },
  { name: "Figma", icon: <FaFigma size={32} color="#A78BFA" /> },
];

const SkillsAndExpertise = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] =
    useState<GalleryItem | null>(null);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          id="skills"
          className="scroll-mt-35 text-center text-sm text-gray-400 uppercase tracking-widest mb-5 font-semibold"
        >
          KEAHLIHAN
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Keahlian Saya
        </h1>
        <p className="text-xl md:text-2xl text-[#ddc6a1] text-center mb-12">
          Berikut adalah beberapa keahlian saya beserta projek yang telah saya
          kerjakan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className="group relative p-6 rounded-xl text-center border bg-neutral-900 border-[#ddc6a1] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#ddc6a1] rounded-xl scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-4xl mb-3 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-black">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-black">
                  {skill.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <section className="relative max-w-5xl mx-auto">
          <div
            className="grid grid-cols-4 gap-6"
            style={{ marginTop: "-1px", minHeight: "4rem" }}
          >
            {skills.map((_, i) => (
              <div key={i} className="flex justify-center">
                <div
                  className="w-[2px] bg-[#ddc6a1]"
                  style={{ height: "4rem" }}
                />
              </div>
            ))}
          </div>

          <div
            className="absolute bottom-0 h-[2px] bg-[#ddc6a1]"
            style={{
              left: "11.5%",
              width: "77%",
            }}
          />

          <div
            className="absolute bottom-0 w-[2px] bg-[#ddc6a1]"
            style={{
              height: "4rem",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "-4rem",
            }}
          />
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-center text-[#ddc6a1] text-2xl mb-8 font-semibold pt-16">
          Bahasa Pemrograman & Tools
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6 text-center text-white">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-3 border bg-neutral-900 border-[#ddc6a1] rounded-lg transition-transform duration-300 hover:scale-105"
            >
              {lang.icon}
              <span className="font-semibold">{lang.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {selectedSkill && !selectedGalleryItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4 overflow-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 p-6 rounded-lg max-w-5xl w-full relative"
          >
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-white text-2xl absolute top-4 right-6 hover:text-red-500"
              aria-label="Close skill gallery modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedSkill.title} Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2">
              {selectedSkill.gallery.map((item, i) => (
                <div
                  key={i}
                  className="cursor-pointer bg-neutral-800 rounded p-2 hover:bg-neutral-700 transition-colors duration-300"
                  onClick={() => setSelectedGalleryItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-cover rounded"
                    loading="lazy"
                  />
                  <h4 className="mt-2 text-center font-semibold">{item.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {selectedGalleryItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 p-6 rounded-lg max-w-xl w-full text-white relative"
          >
            <button
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
              aria-label="Close gallery item modal"
            >
              &times;
            </button>

            <img
              src={selectedGalleryItem.image}
              alt={selectedGalleryItem.title}
              className="rounded mb-4 max-h-[60vh] w-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{selectedGalleryItem.title}</h3>
            <p>{selectedGalleryItem.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default SkillsAndExpertise;

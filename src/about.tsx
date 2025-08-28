import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import vy from './assets/vy.jpg';
import { FaEye  } from 'react-icons/fa';
import CV from './assets/CVATSDavy.pdf';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  { label: 'Nama', value: 'Davy Arviandi Hermawan' },
  { label: 'Email', value: 'davyarvian@gmail.com' },
  { label: 'Alamat', value: 'Citra Indah, Kab. Bogor, Jawa Barat' },
  { label: 'No Tlp.', value: '+62 821 2933 2098' },
];

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      className="mt-10 mb-10 min-h-screen bg-black text-white py-10 px-4 sm:px-6 md:px-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2
        id="about"
        className="scroll-mt-30 text-center text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-3 font-semibold"
        variants={fadeUp}
      >
        BIOGRAFI
      </motion.h2>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
        variants={fadeUp}
      >
        Siapa Saya?
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div className="md:w-1/2 flex justify-center" variants={fadeUp}>
          <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[500px] aspect-square border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_50px_15px_rgba(255,255,255,0.1)]">
            <img
              src={vy}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Details */}
        <motion.div className="md:w-1/2 relative pl-6 sm:pl-8" variants={fadeUp}>
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col items-center justify-center gap-2">
            <div className="w-[2px] bg-[#ddc6a1] h-full relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ddc6a1] font-bold text-xs sm:text-sm select-none">
                H
              </span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Tentang Saya</h3>
          <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Perkenalkan Saya Davy</h4>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            Saya adalah seorang pengembang web yang bersemangat dengan fokus kuat pada pembuatan aplikasi web yang dinamis dan responsif. Dengan keahlian dalam teknologi modern seperti React.js, TypeScript, dan TailwindCSS, saya berusaha memberikan pengalaman pengguna yang mulus dan desain yang menarik secara visual. Perjalanan saya dalam pengembangan web dimulai dari rasa ingin tahu terhadap pemrograman, yang kini berkembang menjadi komitmen mendalam untuk membangun solusi inovatif. Saya menikmati menghadapi tantangan, mempelajari alat baru, dan berkolaborasi dengan tim untuk mewujudkan ide-ide. Baik itu pengembangan front-end, integrasi back-end, atau proyek full-stack, saya berdedikasi untuk menciptakan kode yang berkualitas tinggi, skalabel, dan mudah dikelola.
          </p>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm"
            variants={containerVariants}
          >
            {cards.map((info, i) => (
              <motion.div
                key={i}
                className="bg-neutral-900 p-4 rounded relative overflow-hidden cursor-pointer group"
                variants={fadeUp}
              >
                <span className="absolute left-0 top-0 h-full w-full bg-[#ddc6a1] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></span>
                <p className="text-gray-400 relative z-10 group-hover:text-black transition-colors duration-300">
                  {info.label}
                </p>
                <p className="relative z-10 group-hover:text-black transition-colors duration-300">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Download CV */}
          <motion.a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
          >
            <button className="bg-[#ddc6a1] border border-[#ddc6a1] text-black font-medium mt-6 px-6 py-3 flex items-center gap-2 rounded-md text-sm transition-colors duration-300 ease-in-out hover:bg-black hover:text-[#ddc6a1]">
              <FaEye  /> Lihat CV
            </button>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

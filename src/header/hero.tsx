import { motion } from "framer-motion";
import { FaEye, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { socialIcons } from "../data/iconheader";
import w from "../assets/w.png";
import CV from "../assets/CVATSDavy.pdf";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white font-sans">
      {/* === Mobile Layout === */}
      <div className="md:hidden flex flex-col items-center text-center gap-4 px-6 pt-[4rem] pb-[6rem] z-10 relative">
        {/* Foto bulat */}
        <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-[#ddc6a1]">
          <img
            src={w}
            alt="Davy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nama dan perkenalan */}
        <h1 className="text-4xl font-bold text-white">
          Hello<span className="text-yellow-200">.</span>
        </h1>
        <p className="text-lg font-semibold text-[#ddc6a1]">I'm Davy</p>
        <p className="text-white text-sm">Web or Fullstack Developer</p>

        {/* Tombol Lihat CV */}
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#ddc6a1] border border-[#ddc6a1] text-black font-medium px-5 py-2 rounded-md hover:bg-black hover:text-[#ddc6a1] transition">
            <FaEye className="inline-block mr-2" /> Lihat CV
          </button>
        </a>

        {/* Deskripsi */}
        <p className="text-sm text-white mt-4 px-2 leading-relaxed">
          Saya adalah seorang Web Developer yang memiliki semangat tinggi dalam menciptakan website yang ramah pengguna dan menarik secara visual.
        </p>

        {/* Sosial media icons */}
        <div className="flex gap-4 mt-4 text-xl justify-center">
          {socialIcons.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} hover:scale-110 transition`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Tombol scroll ke bawah */}
        <button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-[#ddc6a1] mt-6 text-lg font-semibold flex items-center gap-2"
        >
          Mari Lihat <FaArrowDown />
        </button>
      </div>

      {/* === Desktop Layout === */}
      <div className="hidden md:grid grid-cols-3 w-full max-w-7xl h-[calc(100vh-6rem)] mx-auto">
        {/* Left */}
        <motion.div
          className="col-span-1 flex flex-col justify-center pl-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4 text-left">
            <h1 className="text-7xl font-bold text-white ml-0">
              Hello<span className="text-yellow-200">.</span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-[#ddc6a1]"></div>
              <p className="text-xl text-[#ddc6a1] font-semibold">I'm Davy</p>
            </div>
            <p className="text-lg text-white">Web or Fullstack Developer</p>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-[#ddc6a1] border border-[#ddc6a1] text-black font-medium px-6 py-3 flex items-center gap-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-black hover:text-[#ddc6a1] hover:border-[#ddc6a1]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye /> Lihat CV
              </motion.button>
            </a>
            <div className="flex gap-4 mt-4 text-2xl">
              {socialIcons.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.color} transition-colors duration-200`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="col-span-1 flex justify-center items-end bg-[#ddc6a1] h-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={w}
            alt="Davy"
            className="w-auto h-[100%] object-contain scale-130 filter brightness-110"
          />
        </motion.div>

        {/* Right */}
        <motion.div
          className="col-span-1 flex flex-col justify-center pr-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-sm ml-auto text-left">
            <h2 className="text-lg font-light text-white leading-relaxed max-w-xs">
              Saya adalah seorang Web Developer yang memiliki semangat tinggi dalam menciptakan website yang ramah pengguna dan menarik secara visual.
            </h2>
            <div className="pt-4 flex justify-start">
              <motion.button
                className="relative text-[#ddc6a1] font-semibold text-lg flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
              >
                <span
                  className="relative cursor-pointer"
                  onClick={() =>
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Mari Lihat!
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#ddc6a1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
                <span className="inline-block group-hover:translate-y-2 transition-transform duration-300">
                  <FaArrowDown size={20} />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll To Top */}
      <motion.div
        className="fixed bottom-10 right-10 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#ddc6a1] text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-300"
        >
          <FaArrowUp className="hover:-translate-y-2 transition-transform duration-300" />
        </button>
      </motion.div>

      {/* Bottom shadow */}
      <div className="absolute bottom-4 left-0 w-full h-8 shadow-[0_-15px_25px_-5px_rgba(0,0,0,0.7)] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#ddc6a1] z-0" style={{ boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.7)" }}></div>
    </section>
  );
};

export default Hero;

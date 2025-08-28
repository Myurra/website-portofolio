import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Tentang Saya", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <motion.div
      className="sticky top-0 z-50 bg-black w-full flex flex-col items-center"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Navbar Container */}
      <nav className="relative text-[#ddc6a1] flex justify-between items-center px-6 py-8 text-3xl h-24 w-full max-w-7xl">
        {/* Hamburger - Left */}
        <div className="md:hidden text-2xl z-50">
          <button onClick={() => setIsOpen(true)}>
            <FiMenu />
          </button>
        </div>

        {/* Logo in center */}
        <motion.div
          className="text-5xl font-bold text-center absolute left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Davy
        </motion.div>

        {/* Spacer kanan untuk mobile */}
        <div className="w-6 md:hidden" />

        {/* Desktop Nav Left */}
        <ul className="hidden md:flex gap-10 font-medium">
          {navItems.slice(0, 2).map((item, i) => (
            <motion.li
              key={item.label}
              className="relative cursor-pointer before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-[#ddc6a1] before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <a href={item.href}>{item.label}</a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Nav Right */}
        <ul className="hidden md:flex gap-10 font-medium ml-auto">
          {navItems.slice(2).map((item, i) => (
            <motion.li
              key={item.label}
              className="relative cursor-pointer before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-[#ddc6a1] before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <a href={item.href}>{item.label}</a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Full Height */}
      <motion.div
        className={`fixed top-0 left-0 w-64 h-screen bg-black text-[#ddc6a1] border-r border-[#ddc6a1] p-6 z-[999] transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Portofolio Davy</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Shadow bawah */}
      <div className="w-full max-w-8xl h-4 shadow-[0_5px_12px_-4px_rgba(255,255,255,0.2)] z-40" />
    </motion.div>
  );
};

export default Navbar;

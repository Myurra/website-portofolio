import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#ddc6a1] text-black w-full py-8 px-6 text-lg">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        {/* Kiri: Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-2xl font-bold flex justify-center sm:justify-start items-center gap-2">
            <span className="text-3xl">&copy;</span> 2025 All Rights Reserved
          </p>
        </div>

        {/* Kanan: Social Icons */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 bg-black text-white hover:text-neutral-300 rounded-full flex items-center justify-center text-xl sm:text-2xl transition duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/arvyndai/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 bg-black text-[#E1306C] hover:text-[#b92659] rounded-full flex items-center justify-center text-xl sm:text-2xl transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Myurra"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 bg-black text-white hover:text-gray-300 rounded-full flex items-center justify-center text-xl sm:text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/6282129332098"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 bg-black text-[#25D366] hover:text-[#1c9a4d] rounded-full flex items-center justify-center text-xl sm:text-2xl transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="w-11 h-11 sm:w-12 sm:h-12 bg-black text-[#EA4335] hover:text-[#b3362a] rounded-full flex items-center justify-center text-xl sm:text-2xl transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

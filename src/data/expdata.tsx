import { FaBriefcase, FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";

import p1 from "../assets/pLSKK.jpeg";
import p2 from "../assets/pKG.jpeg";
import p3 from "../assets/pJobfair.jpeg";
import p4 from "../assets/pLomba.jpeg";

export const experienceImages: string[] = [p1, p2, p3, p4];

export const experiences = [
  {
    title: "Magang Di PT. LSKK",
    company: "Langgeng Sejahtera Kreasi Komputasi",
    duration: "Maret 2025 - Sekarang",
    shortDescription: "Magang dibagian front-end dengan React dan Tailwind CSS untuk UI responsif dan interaktif.",
    icon: <FaChalkboardTeacher className="text-4xl text-pink-400 group-hover:text-black transition-colors duration-300" />,
  },
  {
    title: "Sekretaris Komunitas Game BM3",
    company: "SMK BM3",
    duration: "Sept 2023 - Jan 2025",
    shortDescription: "Bertanggung jawab atas pencatatan rapat dan koordinasi kegiatan komunitas.",
    icon: <FaBriefcase className="text-4xl text-purple-400 group-hover:text-black transition-colors duration-300" />,
  },
  {
    title: "Mengikuti Pameran Di Job Fair",
    company: "Stebis Bina Mandiri",
    duration: "Juni 2024",
    shortDescription: "Mewakili sekolah dalam memperkenalkan karya murid SMK BM3 di Job Fair.",
    icon: <FaComputer className="text-4xl text-green-400 group-hover:text-black transition-colors duration-300" />,
  },
  {
    title: "Menang Lomba Game 2023",
    company: "SMK BM3",
    duration: "Des 2023",
    shortDescription: "Juara lomba game dengan konsep Sekolah dan pengembangan kreatif.",
    icon: <IoGameController className="text-4xl text-blue-400 group-hover:text-black transition-colors duration-300" />,
  },
];

export const education = [
  {
    degree: "SMK BM3",
    school: "SMK Bina Mandiri Multimedia",
    duration: "2023 - 2026",
    description:
      "Selama menempuh pendidikan di SMK Bina Mandiri, saya mempelajari berbagai dasar-dasar teknologi informasi...",
    icon: <FaSchool className="text-4xl text-yellow-500 group-hover:text-black transition-colors duration-300" />,
  },
  {
    degree: "SMPN 2 Jonggol",
    school: "SMP Negeri 2 Jonggol",
    duration: "2020 - 2023",
    description:
      "Selama masa pendidikan di SMP Negeri 2 Jonggol, saya mendapatkan pendidikan dasar yang kuat...",
    icon: <FaSchool className="text-4xl text-green-700 group-hover:text-black transition-colors duration-300" />,
  },
  {
    degree: "SDN Citra Indah",
    school: "SD Negeri Citra Indah",
    duration: "2014 - 2020",
    description:
      "Selama masa pendidikan di SD Negeri Citra Indah, saya memperoleh dasar-dasar pengetahuan yang penting...",
    icon: <FaSchool className="text-4xl text-red-600 group-hover:text-black transition-colors duration-300" />,
  },
];

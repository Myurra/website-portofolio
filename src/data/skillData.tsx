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
import type { ReactNode } from "react";

export type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

export type Skill = {
  title: string;
  icon: ReactNode;
  rating: number;
  description: string;
  gallery: GalleryItem[];
};

export const skills: Skill[] = [
  {
    title: "Front-End",
    icon: <FaCode />,
    rating: 4,
    description:
      "Developing responsive, user-friendly interfaces using React, Tailwind CSS, and modern JavaScript.",
    gallery: [
      {
        image: "/src/assets/webpro.png",
        title: "Website Komunitas Game BM3",
        description:
          "Website ini dibuat untuk mendukung komunitas game di SMK BM3. Dibuat menggunakan React, Vite, Tailwind CSS, dan TypeScript.",
      },
      {
        image: "/src/assets/webpro1.png",
        title: "Website Jasa Travel",
        description:
          "Website bertema travel untuk membantu turis mengenal destinasi wisata dan memesan tiket. Dibuat menggunakan HTML, CSS, dan Bootstrap 5.",
      },
      {
        image: "/src/assets/webpro6.png",
        title: "Website Pusat Kue Bandung",
        description:
          "Website pusat kue Bandung yang menyajikan berbagai pilihan kue lezat dan kekinian. Dibuat dengan React, Vite, Tailwind CSS, dan TypeScript.",
      },
      {
        image: "/src/assets/webpro5.png",
        title: "Website Portofolio Tokoh Publik",
        description:
          "Website portofolio tokoh publik yang dirancang untuk menampilkan profil, karya, dan pencapaian secara profesional. Dibuat dengan HTML, CSS dan Bootstrap 5.",
      },
      {
        image: "/src/assets/webpro3.png",
        title: "Website Prototype GameDevBM3",
        description:
          "Website showcase GameDevBM3 yang menampilkan berbagai proyek game edukatif dan kreatif. Dibuat dengan HTML, CSS dan Bootstrap 5.",
      },
      {
        image: "/src/assets/webpro4.png",
        title: "Website Petani Kode",
        description:
          "Website edukasi Petani Kode yang berisi tutorial pemrograman dan pengembangan web untuk pemula. Dibuat dengan HTML, CSS dan Bootstrap 5.",
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
        image: "/src/assets/php1.png",
        title: "Web Crud Stok Barang",
        description:
          "Aplikasi CRUD untuk mengelola stok barang menggunakan PHP dan MySQL.",
      },
      {
        image: "/src/assets/php2.png",
        title: "Web CRUD Kasir",
        description:
          "Aplikasi CRUD untuk sistem kasir dengan fitur manajemen transaksi. Menggunakan PHP dan MySQL",
      },
      {
        image: "/src/assets/php3.png",
        title: "Web Login",
        description:
          "Membuat Tampilan dan Fungsi Login menggunakan PHP dan MySQL.",
      },
      {
        image: "/src/assets/php4.png",
        title: "Web Blog",
        description:
          "Membuat Tampilan dan Fungsi Login pada Website Blog menggunakan PHP dan MySQL.",
      },
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    rating: 4.5,
    description:
      "Crafting intuitive and beautiful user experiences with design tools and user research.",
    gallery: [
      {
        image: "/src/assets/jam.png",
        title: "Desain Web Jam Tangan",
        description:
          "Desain website bertema jam tangan untuk mempermudah akses informasi produk. Dibuat menggunakan Figma.",
      },
      {
        image: "/src/assets/figma2.png",
        title: "Desain Web Online Bioskop",
        description:
          "Desain website bertema bioskop online untuk memberikan pengalaman pengguna yang menarik. Dibuat menggunakan Figma.",
      },
      {
        image: "/src/assets/figma1.png",
        title: "Desain Web Perpustakaan Online",
        description:
          "Desain website bertema perpustakaan online untuk mempermudah akses informasi buku. Dibuat menggunakan Figma.",
      },
      {
        image: "/src/assets/pkb.png",
        title: "Desain Web Pusat Kue Bandung",
        description:
          "Desain website bertema pusat kue untuk mempermudah akses informasi produk. Dibuat menggunakan Figma.",
      },
      {
        image: "/src/assets/Compro.png",
        title: "Desain Web Komunitas Game BM3",
        description:
          "Desain website untuk komunitas game BM3 yang memberikan informasi tentang event, berita, dan forum diskusi. Dibuat menggunakan Figma.",
      },
    ],
  },
  {
    title: "Game Development",
    icon: <FaGamepad />,
    rating: 3.5,
    description: "Creating engaging 2D and 3D games using Unity and C#.",
    gallery: [
      {
        image: "/src/assets/game2.png",
        title: "Game Ujian di SMK BM3",
        description:
          "Game bertema siswa bernama Kevin yang harus menyelesaikan ujian di sekolah. Dibuat menggunakan Construct.",
      },
      {
        image: "/src/assets/game1.png",
        title: "Game Detektif",
        description:
          "Game bertema Detektif ini yang mengharuskan player menebak pelakunya dengan Tense Inggris. Dibuat menggunakan Construct 2.",
      },
      {
        image: "/src/assets/game4.png",
        title: "Game Platform",
        description:
          "Game bertema platform yang mana Pemain harus menyelesaikan berbagai tantangan di dunia 2D. Dibuat menggunakan Godot",
      },
    ],
  },
];

export const languages = [
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

import I1 from '../assets/webpro1.png';
import I from '../assets/webpro.png';
import I2 from '../assets/game2.png';
import I3 from '../assets/game3.png';
import I4 from '../assets/figma2.png';
export type Item = {
  title: string;
  description: string;
  image: string;
};

// nge import gambar
export const items: Item[] = [
  { title: "Website Komunitas Game BM3", description: "Website ini dibuat untuk mendukung komunitas game di SMK BM3. Dibuat menggunakan React, Vite, Tailwind, dan TypeScript.", image: I },
  { title: "Website Jasa Travel", description: "Website bertema travel untuk membantu turis mengenal destinasi wisata dan memesan tiket. Dibuat menggunakan HTML, CSS, dan Bootstrap 5.", image: I1 },
  { title: "Game Ujian di SMK BM3", description: "Game bertema siswa bernama Kevin yang harus menyelesaikan ujian di sekolah. Dibuat menggunakan Scratch 2.", image: I2 },
  { title: "Kalkulator Geometri", description: "Aplikasi kalkulator untuk membantu siswa menghitung geometri. Dibuat menggunakan Visual Studio 2012.", image: I3 },
  { title: "Desain Website Bioskop", description: "Desain website bertema bioskop online untuk memberikan pengalaman pengguna yang menarik. Dibuat menggunakan Figma.", image: I4 },
];

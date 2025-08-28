import { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, useInView } from "framer-motion";

import { items, type Item } from "./foto/fotoP";

type CardProps = {
  item: Item;
  isActive: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  position: "prev" | "active" | "next";
};

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const total = items.length;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // cek pertama
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => setActiveIndex(prevIndex);
  const handleNext = () => setActiveIndex(nextIndex);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    enter: { opacity: 0, y: 40, scale: 0.9 },
    center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -40, scale: 0.9 },
  };

  const Card = ({ item, isActive, onClick, style, position }: CardProps) => {
    const isCardMobile = isMobile && isActive;
    const cardSize = isCardMobile
      ? { width: 300, height: 300 }
      : isActive
      ? { width: 450, height: 450 }
      : { width: 350, height: 350 };

    const animate = isActive
      ? "center"
      : {
          opacity: 0.6,
          scale: 0.9,
          filter: "blur(2px)",
          transition: { duration: 0.3 },
        };

    return (
      <motion.div
        onClick={onClick}
        className="border rounded-xl overflow-hidden shadow-lg select-none bg-black"
        style={{
          borderColor: "#dec6a2",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          ...cardSize,
          ...style,
        }}
        initial="enter"
        animate={animate}
        variants={cardVariants}
        key={`${position}-${item.title}`}
      >
        {/* Gambar */}
        <div style={{ flex: "1 1 auto", position: "relative" }}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "0.75rem",
              borderTopRightRadius: "0.75rem",
              display: "block",
            }}
          />
        </div>

        {/* Judul */}
        <div
          className="bg-neutral-900 bg-opacity-80 flex items-center justify-center rounded-b-xl"
          style={{
            padding: "0.75rem",
            marginTop: "-1.5rem",
            zIndex: 10,
            position: "relative",
          }}
        >
          <h3
            className={`text-white font-semibold ${
              isActive ? "text-2xl" : "text-xl"
            } text-center`}
            style={{ margin: 0 }}
          >
            {item.title}
          </h3>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div
        id="portofolio"
        ref={ref}
        className="scroll-mt-20 w-full max-w-7xl mx-auto py-16 flex flex-col items-center bg-black"
      >
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-2"
        >
          Portofolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-12"
        >
          Projek Terbaru
        </motion.h1>

        {/* Carousel */}
        <div className="relative w-full flex items-center justify-center">
          {/* Tombol Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:-left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 text-white hover:bg-yellow-500"
            aria-label="Previous"
          >
            <HiChevronLeft className="text-3xl" />
          </button>

          {/* Kartu */}
          <div className="flex justify-center items-center gap-6 sm:gap-10 w-full px-4 sm:px-10 relative">
            {isMobile ? (
              <Card
                position="active"
                item={items[activeIndex]}
                isActive={true}
                onClick={() => setSelectedItem(items[activeIndex])}
              />
            ) : (
              <>
                <Card
                  position="prev"
                  item={items[prevIndex]}
                  isActive={false}
                  onClick={handlePrev}
                  style={{
                    transformOrigin: "center right",
                    transform: "rotateY(15deg)",
                    zIndex: 10,
                  }}
                />
                <Card
                  position="active"
                  item={items[activeIndex]}
                  isActive={true}
                  onClick={() => setSelectedItem(items[activeIndex])}
                  style={{ zIndex: 20 }}
                />
                <Card
                  position="next"
                  item={items[nextIndex]}
                  isActive={false}
                  onClick={handleNext}
                  style={{
                    transformOrigin: "center left",
                    transform: "rotateY(-15deg)",
                    zIndex: 10,
                  }}
                />
              </>
            )}
          </div>

          {/* Tombol Next */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:-right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 text-white hover:bg-yellow-500"
            aria-label="Next"
          >
            <HiChevronRight className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Modal Detail */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900 rounded-xl shadow-2xl max-w-2xl w-full p-6 relative"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-white hover:text-red-500 text-4xl font-bold leading-none"
              aria-label="Close"
            >
              &times;
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="rounded-lg w-full max-h-[400px] object-cover mb-4"
            />
            <h2 className="text-white text-2xl font-bold mb-2">
              {selectedItem.title}
            </h2>
            <p className="text-white">{selectedItem.description}</p>
          </motion.div>
        </div>
      )}

      {/* Garis bawah */}
      <div
        className="h-4 w-full bg-[#ddc6a1] pointer-events-none"
        style={{
          boxShadow:
            "0 -10px 25px -5px rgba(255, 255, 255, 0.6), 0 10px 25px -5px rgba(255, 255, 255, 0.6)",
        }}
      />
    </>
  );
}

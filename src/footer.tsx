import { IoMdSend } from "react-icons/io";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Mengirim...");
  
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "c99ef8a4-eec9-4784-82b8-23601e1cf162");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Pesan terkirim! Terima kasih.");
        form.reset(); // 👈 pakai ini
      } else {
        setResult(data.message || "Gagal mengirim pesan, silakan coba lagi.");
      }
    } catch (error) {
      console.error("Request Error:", error);
      setResult("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div ref={ref} className="bg-black text-white px-6 md:px-20 py-16">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.div className="text-center mb-6" variants={itemVariants}>
          <p id="contact" className="scroll-mt-30 uppercase text-sm tracking-widest text-gray-400">
            Info Kontak
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hubungi Saya</h1>
        </motion.div>

        {/* Form Section */}
        <motion.div className="space-y-5 text-center" variants={itemVariants}>
          <h3 className="text-base md:text-xl text-[#ddc6a1] font-bold">
            Ada yang ingin dibicarakan? Silakan kirimkan pesan melalui formulir kontak di bawah. Saya akan dengan senang hati berdiskusi dengan Anda.
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-xl mx-auto text-left"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="name"
                type="text"
                placeholder="Nama"
                className="w-full md:w-1/2 p-3 bg-[#1e1e1e] text-white rounded"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full md:w-1/2 p-3 bg-[#1e1e1e] text-white rounded"
                required
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Judul"
              className="w-full p-3 bg-[#1e1e1e] text-white rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Pesan"
              rows={4}
              className="w-full p-3 bg-[#1e1e1e] text-white rounded"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#ddc6a1] text-black px-6 py-3 rounded hover:bg-black hover:text-[#ddc6a1] border border-[#ddc6a1] transition flex items-center gap-2 mx-auto"
            >
              <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
              <IoMdSend />
            </button>
          </form>

          {result && (
            <p className="mt-4 text-center text-sm text-yellow-400">{result}</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

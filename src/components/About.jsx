import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const festivalInfo = [
  {
    id: 1,
    title: "The Ultimate Elvis Experience",
    description: "Step into the world of the King of Rock and Roll. Our festival celebrates Elvis's legacy with live performances, tribute artists, and authentic memorabilia.",
    image: "https://imgs.search.brave.com/v5uWLHtBWMyaLzZB4zOn_R9IPwKczJp2rbxWsGj15eo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU5/Mzk0MzE1L3Bob3Rv/L2VsdmlzLXByZXNs/ZXktcG9zdGFnZS1z/dGFtcC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VGtlMW1J/R3NpNVBKX2NfcUln/Yk5SUkhjV3lLbGhX/ZnhpNVY3amdtd3VK/ST0",
    align: "right"
  },
  {
    id: 2,
    title: "Live Performances",
    description: "Experience world-class Elvis tribute artists performing his greatest hits on multiple stages. From 'Jailhouse Rock' to 'Can't Help Falling in Love', relive the magic.",
    image: "https://imgs.search.brave.com/EDi2TxMT3uYBpk3cqvUUizXJYYUy5afGAR5wkz7tTSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWN0/b3J5YXRmcmFua2xp/bi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTIvTmFz/aHZpbGxlLUVMdmlz/LmpwZw",
    align: "left"
  },
  {
    id: 3,
    title: "Vintage Car Show",
    description: "Marvel at Elvis's legendary car collection, including his famous pink Cadillac. Plus, see other classic cars from the golden age of rock and roll.",
    image: "https://imgs.search.brave.com/SBAd9HVzcpzH_GRDdSVAv2-OCYNz-xcCP3cbbGGhMWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFya2VzZWx2aXNm/ZXN0aXZhbC5jb20u/YXUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjAyMy1w/YXJrZXMtZWx2aXMt/ZmVzdGl2YWwtbWVy/Y2hhbmRpc2UtOTAw/cHguanBn",
    align: "right"
  },
  {
    id: 4,
    title: "50's Style Dining",
    description: "Enjoy Elvis's favorite dishes at our themed diners. From peanut butter and banana sandwiches to Southern comfort food, taste the King's preferred cuisine.",
    image: "https://imgs.search.brave.com/q6iSXOFmR03Yk6ElvmciPtA5-XV8UN7qIPMnticPmso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2VjdXJlbTIuY29t/L2NvbW1vbmltYWdl/cy9wYWdlcy8yMDIy/LzIvZWx2aXMtYXJ0/aXN0LWRvdy5qcGc",
    align: "left"
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="bg-black py-20">
      <div className="container mx-auto px-4 py-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-5xl font-elvis text-center my-80"
        >
          V4V Presents - Elvis Fest 2025
        </motion.h2>

        <div className="space-y-32">
          {festivalInfo.map((info, index) => {
            const targetScale = 1 - (index * 0.05);
            return (
              <Section 
                key={info.id}
                info={info}
                progress={scrollYProgress}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Section({ info, progress, targetScale }) {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, targetScale]);

  return (
    <motion.div
      ref={sectionRef}
      className={`flex items-center gap-8 ${
        info.align === "left" ? "flex-row" : "flex-row-reverse"
      }`}
      style={{
        scale
      }}
    >
      <motion.div 
        className="w-1/2"
        style={{ y }}
      >
        <motion.img
          src={info.image}
          alt={info.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          style={{
            rotate,
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        />
      </motion.div>

      <motion.div 
        className="w-1/2 space-y-6"
        initial={{ opacity: 0, x: info.align === "left" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-gold text-3xl font-elvis">{info.title}</h3>
        <p className="text-gold/80 text-lg leading-relaxed">{info.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-gold/90 transition-colors"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
} 
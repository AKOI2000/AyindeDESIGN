import { motion, AnimatePresence } from "motion/react";

function ImageSlideShow({ images, index, alt = "Ayinde Taiwo Courage" }) {
  return (
    <AnimatePresence mode="wait">
      <motion.img
        alt={alt}
        key={index}
        src={images[index]}
        className="slide"
        initial={{ filter: "blur(5px)", scale: 1.1 }}
        animate={{ filter: "blur(0)", scale: 1 }}
        exit={{ filter: "blur(5px)", scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}

export default ImageSlideShow;

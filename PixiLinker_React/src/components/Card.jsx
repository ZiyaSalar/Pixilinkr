import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        backdrop-blur-lg 
        bg-white/10 
        border border-white/20 
        hover:border-purple-400/40 
        hover:bg-white/20 
        transition-all 
        duration-300 
        rounded-xl 
        p-5 
        shadow-lg 
        hover:shadow-purple-500/20 
        hover:-translate-y-2
      "
    >
      <h1 className="text-purple-200 text-xl font-bold tracking-wide drop-shadow">
        {title}
      </h1>

      <p className="text-gray-300 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default Card;

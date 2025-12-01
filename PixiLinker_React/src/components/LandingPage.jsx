import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    if (token) navigate("/dashboard");
    else navigate("/login");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0d0d12] text-white overflow-hidden lg:px-14 sm:px-8 px-4">
      
      {/* --- BEAUTIFUL GRADIENT BACKGROUND BLOBS --- */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/25 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 blur-[130px] rounded-full"></div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="lg:flex-row flex-col lg:py-10 pt-20 lg:gap-10 gap-8 flex justify-between items-center relative z-10"
      >
        {/* LEFT SIDE CONTENT */}
        <div className="flex-1">
          <motion.h1
            variants={itemVariants}
            className="font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-roboto md:text-6xl sm:text-5xl text-4xl leading-tight drop-shadow-lg"
          >
            PixiLinker – Smarter, Faster & Beautiful URL Shortening
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base my-5 leading-relaxed max-w-[600px]"
          >
            Turn long URLs into beautiful, smart, trackable links.  
            PixiLinker gives you speed, analytics, and control — all wrapped in a stunning interface.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <button
              onClick={dashBoardNavigateHandler}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-all w-44 text-white rounded-xl py-2 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            >
              Manage Links
            </button>

            <button
              onClick={dashBoardNavigateHandler}
              className="border border-purple-500 text-purple-400 hover:bg-purple-600/20 hover:text-white transition-all w-44 rounded-xl py-2"
            >
              Create Short Link
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div variants={itemVariants} className="flex-1 flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover drop-shadow-2xl rounded-xl"
            src="/images/img2.png"
            alt="PixiLinker dashboard"
          />
        </motion.div>
      </motion.div>

      {/* --- FEATURES SECTION --- */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="sm:pt-20 pt-10 relative z-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-gray-200 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center drop-shadow-md"
        >
          Trusted by professionals & creators worldwide  
        </motion.p>

        {/* GRID OF FEATURES */}
        <motion.div
          variants={containerVariants}
          className="pt-4 pb-12 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6"
        >
          <motion.div variants={itemVariants}>
            <Card
              dark
              title="Simple URL Shortening"
              desc="Create stylish, short URLs instantly with PixiLinker's modern UI."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card
              dark
              title="Powerful Analytics"
              desc="Understand user behavior with click tracking, devices, and referrer insights."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card
              dark
              title="Enhanced Security"
              desc="Encrypted, secure, and reliable — your links stay protected."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card
              dark
              title="Fast & Reliable"
              desc="99.9% uptime & lightning-fast redirects ensuring smooth performance."
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;

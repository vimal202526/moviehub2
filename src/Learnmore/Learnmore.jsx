import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Code, Database, Zap, BookOpen, HelpCircle, Layers } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function LearnMore() {
  const images = [
    "/Assets/learnmore1.jpg",
    "/Assets/learnmore2.jpg",
    "/Assets/learnmore3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const features = [
    { icon: <Code className="w-6 h-6" />, text: "100+ Curated Coding Problems (Growing)" },
    { icon: <Database className="w-6 h-6" />, text: "30 Essential SQL Problems with Compiler" },
    { icon: <HelpCircle className="w-6 h-6" />, text: "AI-Powered Assistance (Mrs. Bee)" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Clear Theory Notes for Strong Foundations" },
    { icon: <Layers className="w-6 h-6" />, text: "1000+ MCQs for Concept Mastery" },
    { icon: <Zap className="w-6 h-6" />, text: "Weekly Updated Mini Project Ideas" }
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 text-amber-900">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="text-center py-16 px-6"
      >
        <motion.div variants={item} className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium">
          Why Choose Us
        </motion.div>
        <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
          The <span className="text-amber-600">Buddle Code</span> Advantage
        </motion.h1>
        <motion.p variants={item} className="text-xl text-amber-700 max-w-3xl mx-auto">
          A beginner-friendly coding platform that makes learning programming sweet and engaging
        </motion.p>
      </motion.section>

      {/* About Section */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl md:flex overflow-hidden"
        >
          <div className="p-8 md:p-12 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-amber-800">What is Buddle Code?</h2>
            <p className="text-lg text-amber-700 mb-6">
              Buddle Code is a beginner-friendly coding platform for school and college students that focuses on simple examples, fun learning, and real-time assistance with AI-powered features.
            </p>
            <p className="text-lg text-amber-700">
              It's your first step into programming, made easy, engaging, and as sweet as honey!
            </p>
          </div>

          <div className="md:w-1/2 relative min-h-[400px]">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={images[currentIndex]}
              alt="Learn More"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-amber-600 w-6' : 'bg-amber-200'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Discover the <span className="text-amber-600">Buddle Code</span> Difference
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Here's what makes learning with us so effective and enjoyable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all"
            >
              <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-800">{feature.text}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Zap className="w-12 h-12 mx-auto mb-6 text-amber-200 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Coding Adventure?</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students learning the sweet way with Buddle Code.
            </p>
            <Link to="/student-login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-xl shadow-lg transition-all font-semibold text-lg flex items-center gap-2 mx-auto"
              >
                🍯 Start Your Journey Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LearnMore;
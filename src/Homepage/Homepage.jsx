import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, Brain, Code, Zap, ChevronRight } from "lucide-react";

function Homepage() {
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

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 text-amber-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-[90vh] text-center px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-300 opacity-10 blur-3xl"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="relative z-10 max-w-4xl"
        >
          <motion.h1 variants={item} className="text-5xl md:text-6xl font-extrabold text-amber-800 mb-6 leading-tight">
            Welcome to <span className="text-amber-600">Buddle Code!</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto">
            Learn coding the sweet way – with interactive tools, smart AI, and buzzing community vibes.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/student-login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-200 transition-all font-semibold text-lg"
              >
                🍯 Get Started <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/learnmore">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl transition-all font-semibold text-lg"
              >
                Learn More <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating bee animation on the right */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}

          className="absolute bottom-10 right-10 md:right-20"
        >
          <img
            src="/Assets/logo2.png"
            alt="Floating Bee"
            className="w-16 h-16 opacity-90"
          />
        </motion.div>

        {/* Floating bee animation on the left */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}

          className="absolute bottom-10 left-10 md:left-20"
        >
          <img
            src="/Assets/logo2.png"
            alt="Floating Bee"
            className="w-16 h-16 opacity-90"
          />
        </motion.div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4 font-medium">
            🐝 Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800">Why You'll Love <span className="text-amber-600">Buddle Code</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all"
          >
            <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <BookOpen className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-amber-800">Fun Coding Tutorials</h3>
            <p className="text-amber-700 text-center">
              Interactive bite-sized lessons that make learning feel like playing. Our honey-sweet approach keeps you engaged.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all"
          >
            <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Brain className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-amber-800">MCQ Playground</h3>
            <p className="text-amber-700 text-center">
              Buzz through fun quizzes and sharpen your brain with a tap. Instant feedback helps you learn faster.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all"
          >
            <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Code className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-amber-800">Mini Projects</h3>
            <p className="text-amber-700 text-center">
              Build cool stuff, apply what you learn, and level up like a coding superhero. Real-world skills from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-200"
        >
          <img
            src="/Assets/logo.png"
            alt="Buddle Code Learning"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Zap className="w-12 h-12 mx-auto mb-6 text-amber-200" />
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Join thousands of students learning the sweet way with Buddle Code.
            </p>
            <Link to="/student-login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-xl shadow-lg transition-all font-semibold text-lg flex items-center gap-2 mx-auto"
              >
                🍯 Get Started Now <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Calendar, Lock } from "lucide-react";
import { motion } from "framer-motion";

function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const validDomains = ['.edu', '.school.in'];
    return validDomains.some(domain => email.endsWith(domain));
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !dob || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please use a valid .edu or .school.in email address");
      setIsLoading(false);
      return;
    }

    const age = calculateAge(dob);
    if (age >= 18) {
      setError("You must be under 18 to use student login.");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md mx-4 border border-amber-100"
      >
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <img src="/Assets/logo1.png" alt="Bee Mascot" className="w-20 h-20" />
        </motion.div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-600 mb-2">Student Login</h2>
          <p className="text-amber-700">Sign in with your school credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-amber-500" />
            </div>
            <input
              type="email"
              placeholder="School Email (.edu or .school.in)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none bg-amber-50/50"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-amber-500" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none bg-amber-50/50"
              required
            />
          </div>

          {/* <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Calendar className="h-5 w-5 text-amber-500" />
            </div>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full pl-10 px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none bg-amber-50/50"
              required
            />
          </div> */}

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* 👇 Register Now Link */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have a student account?{" "}
          <Link
            to="/signup"
            className="text-amber-600 hover:underline font-semibold"
          >
            Register Now
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default StudentLogin;

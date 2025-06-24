import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Check, School } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function StudentSignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Password validation feedback
    if (name === 'password') {
      setRequirements({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        number: /\d/.test(value),
        specialChar: /[!@#$%^&*]/.test(value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[\w.-]+@[\w.-]+\.(edu\.in|school\.in)$/;

    if (!form.name) {
      setError('Please enter your full name');
    } else if (!emailPattern.test(form.email)) {
      setError('Please use a valid school email (.edu or .school.in)');
    } else if (!requirements.length || !requirements.uppercase ||
             !requirements.number || !requirements.specialChar) {
      setError('Password does not meet all requirements');
    } else if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      setSuccess(true);
      setShowSuccessPopup(true);
      setTimeout(() => {
        navigate('/'); // Navigate to Homepage.jsx
      }, 2000); // Adjust the delay as needed
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-xl max-w-sm w-full mx-4 text-center"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Account Created!</h3>
            <p className="text-gray-600 mb-4">You have successfully created your account. Happy coding!</p>
          </motion.div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-amber-100"
      >
        {/* Header with animated icon */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="bg-amber-100 p-3 rounded-full mb-4">
            <School className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-center text-amber-800">
            Student Registration
          </h2>
          <p className="text-amber-600 mt-2">
            Join our learning community today!
          </p>
        </motion.div>

        {/* Success message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
          >
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Registration successful! Welcome to our platform.</span>
            </div>
          </motion.div>
        )}

        {/* Error message */}
        {error && !success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-5 w-5 text-amber-500 group-focus-within:text-amber-600" />
            </div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none transition bg-amber-50/30"
            />
          </div>

          {/* Email Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-amber-500 group-focus-within:text-amber-600" />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your.email@school.edu"
              className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none transition bg-amber-50/30"
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-amber-500 group-focus-within:text-amber-600" />
            </div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Create Password"
              className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none transition bg-amber-50/30"
            />
          </div>

          {/* Password Requirements */}
          <div className="grid grid-cols-2 gap-2 text-sm text-amber-700">
            <div className={`flex items-center ${requirements.length ? 'text-green-600' : ''}`}>
              <Check className={`w-4 h-4 mr-1 ${requirements.length ? 'block' : 'opacity-0'}`} />
              <span>8+ characters</span>
            </div>
            <div className={`flex items-center ${requirements.uppercase ? 'text-green-600' : ''}`}>
              <Check className={`w-4 h-4 mr-1 ${requirements.uppercase ? 'block' : 'opacity-0'}`} />
              <span>Uppercase letter</span>
            </div>
            <div className={`flex items-center ${requirements.number ? 'text-green-600' : ''}`}>
              <Check className={`w-4 h-4 mr-1 ${requirements.number ? 'block' : 'opacity-0'}`} />
              <span>Number</span>
            </div>
            <div className={`flex items-center ${requirements.specialChar ? 'text-green-600' : ''}`}>
              <Check className={`w-4 h-4 mr-1 ${requirements.specialChar ? 'block' : 'opacity-0'}`} />
              <span>Special character</span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-amber-500 group-focus-within:text-amber-600" />
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none transition bg-amber-50/30"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={success}
            className={`w-full py-3 rounded-xl font-medium text-white transition ${
              success ? 'bg-green-500' : 'bg-amber-500 hover:bg-amber-600'
            }`}
          >
            {success ? 'Registration Complete!' : 'Create Account'}
          </motion.button>
        </form>

        <div className="text-center text-sm mt-6 text-amber-700">
          Already have an account?{' '}
          <Link
            to="/student-login" // 👈 Updated path here
            className="font-medium text-amber-600 hover:text-amber-800 hover:underline transition"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
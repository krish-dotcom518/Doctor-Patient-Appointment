import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const checkoutSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6 animate-pulse">
          <CheckCircle size={80} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-green-700 mb-3">Payment Successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you! Your transaction was completed successfully.
        </p>
        <Link
          to="/home"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition duration-300"
        >
          Go back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default checkoutSuccess;


import React from 'react';
import { motion } from 'framer-motion';
import { GameController, Users, MessageSquare } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Welcome to GamesRus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Your ultimate gaming destination
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <GameController className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Latest Games</h3>
            <p className="text-gray-400">Discover and play the newest games</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <Users className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-400">Connect with fellow gamers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <MessageSquare className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-400">Chat with players in real-time</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
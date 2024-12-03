import React from 'react';
import { Star } from 'lucide-react';
import { Game } from '../types/game';
import { motion } from 'framer-motion';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img 
        src={game.imageUrl} 
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{game.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
            {game.genre}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-white">{game.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
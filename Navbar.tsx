import React from 'react';
import { Link } from 'react-router-dom';
import { GameController, Users, MessageSquare, Menu } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GameController className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              GamesRus
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/games" className="hover:text-purple-400 transition-colors">
              Games
            </Link>
            <Link to="/community" className="hover:text-purple-400 transition-colors">
              Community
            </Link>
            <Link to="/chat" className="hover:text-purple-400 transition-colors">
              Chat
            </Link>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/games" className="hover:text-purple-400 transition-colors">
                Games
              </Link>
              <Link to="/community" className="hover:text-purple-400 transition-colors">
                Community
              </Link>
              <Link to="/chat" className="hover:text-purple-400 transition-colors">
                Chat
              </Link>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
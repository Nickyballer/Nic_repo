import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ChatBox } from './components/ChatBox';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
        
        {/* Fixed Chat Button */}
        <div className="fixed bottom-4 right-4">
          <ChatBox />
        </div>
      </div>
    </Router>
  );
}

export default App;
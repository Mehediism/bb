import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import InstructorsPage from './pages/InstructorsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-transparent absolute top-0 left-0 w-full z-10">
          <nav className="container mx-auto py-4 px-6">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold text-white">
                <Link to="/">Black Bulls</Link>
              </div>
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-gray-300 hover:text-blue-500">Home</Link></li>
                <li><Link to="/courses" className="text-gray-300 hover:text-blue-500">Pricing</Link></li>
                <li><Link to="/features" className="text-gray-300 hover:text-blue-500">Features</Link></li>
                <li><Link to="/enterprise" className="text-gray-300 hover:text-blue-500">Enterprise</Link></li>
                 <li><Link to="/blog" className="text-gray-300 hover:text-blue-500">Blog</Link></li>
                  <li><Link to="/forum" className="text-gray-300 hover:text-blue-500">Forum</Link></li>
              </ul>
              <div className="flex space-x-4">
                <button className="bg-transparent hover:bg-blue-500 text-white py-2 px-4 rounded border border-gray-700 hover:border-blue-500">Sign In</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download</button>
              </div>
            </div>
          </nav>
        </header>

        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

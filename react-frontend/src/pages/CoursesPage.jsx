import React from 'react';

function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-white mb-4">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-300 mb-2">Web Development</h2>
            <p className="text-gray-400">Learn the fundamentals of web development.</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-300 mb-2">Data Science</h2>
            <p className="text-gray-400">Explore the world of data analysis and machine learning.</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-300 mb-2">Mobile App Development</h2>
            <p className="text-gray-400">Build native mobile apps for iOS and Android.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;

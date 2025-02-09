import React from 'react';

function InstructorsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-white mb-4">Our Expert Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Instructor 1"
              className="rounded-full mx-auto mb-2"
            />
            <h2 className="text-xl font-semibold text-gray-300 mb-2 text-center">John Doe</h2>
            <p className="text-gray-400 text-center">Web Development Expert</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Instructor 2"
              className="rounded-full mx-auto mb-2"
            />
            <h2 className="text-xl font-semibold text-gray-300 mb-2 text-center">Jane Smith</h2>
            <p className="text-gray-400 text-center">Data Science Specialist</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Instructor 3"
              className="rounded-full mx-auto mb-2"
            />
            <h2 className="text-xl font-semibold text-gray-300 mb-2 text-center">David Lee</h2>
            <p className="text-gray-400 text-center">Mobile App Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorsPage;

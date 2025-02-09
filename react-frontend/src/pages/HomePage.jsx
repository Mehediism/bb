import React from 'react';

function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="overflow-x-auto">
        <img
          src="https://plus.unsplash.com/premium_vector-1711987353813-68a5bdb6f207?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coding Illustration"
          className="w-full h-auto max-h-[80vh] object-cover opacity-30 rounded-3xl"
        />
      </div>

      <div className="relative container mx-auto py-32 px-6">
        <section className="text-center">
          <div className="flex justify-center">
          </div>
        </section>

        <section className="mt-24 py-12">
          <h1 className="text-3xl font-semibold text-white mb-6 text-center">
            The AI-Integrated Learning Management System
          </h1>
          <p className="text-gray-300 leading-relaxed mb-6 text-center">
            Built to make you extraordinarily productive, Black Bulls is the best way to learn with AI.
          </p>
        </section>

        <section className="mt-24 py-12">
          
          <div className="flex items-center justify-center">
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;

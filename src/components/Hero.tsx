import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-800 py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Generate QR Codes Effortlessly</h2>
        <p className="text-gray-400 mb-6">Create QR codes for your links in just a few clicks!</p>
        <a href="/generate" className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-500 text-lg">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;

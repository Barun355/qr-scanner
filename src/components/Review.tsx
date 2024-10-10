import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">What Our Users Say</h2>
        <div className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          <blockquote className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-400">“This QR code generator is fantastic! Super easy to use.”</p>
            <cite className="block text-white font-semibold mt-4">- User 1</cite>
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-400">“I love how I can customize the QR codes!”</p>
            <cite className="block text-white font-semibold mt-4">- User 2</cite>
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-400">“The dual link feature is a game changer!”</p>
            <cite className="block text-white font-semibold mt-4">- User 3</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

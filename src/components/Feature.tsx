import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Single Link QR Code</h3>
            <p className="text-gray-400">Generate a QR code that links to a single URL.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Dual Link QR Code</h3>
            <p className="text-gray-400">Create a QR code that directs users to different links based on their device.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Customizable QR Codes</h3>
            <p className="text-gray-400">Customize the color and design of your QR codes to match your brand.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

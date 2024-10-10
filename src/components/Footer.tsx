import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-400">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} QR Code Generator. Built with ❤️ by <span className="text-white font-semibold">RF-Automation</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

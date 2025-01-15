import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-2 text-gray-400 border-t border-white/5 container flex justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} QR Code Generator. Built with ❤️ by <span className="font-semibold">RF-Automation</span>.
        </p>
    </footer>
  );
};

export default Footer;

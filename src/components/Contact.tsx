import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
            rows={4}
            required
          ></textarea>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

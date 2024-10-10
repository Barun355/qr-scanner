import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Sponsored By</h2>
        <div className="flex justify-center flex-wrap space-x-6">
          <img src="/images/sponsor1.png" alt="Sponsor 1" className="h-10 mb-4" />
          <img src="/images/sponsor2.png" alt="Sponsor 2" className="h-10 mb-4" />
          <img src="/images/sponsor3.png" alt="Sponsor 3" className="h-10 mb-4" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

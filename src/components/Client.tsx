import React from 'react';

const Clients: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Clients</h2>
        <div className="flex justify-center flex-wrap space-x-6">
          <img src="/images/client1.png" alt="Client 1" className="h-10 mb-4" />
          <img src="/images/client2.png" alt="Client 2" className="h-10 mb-4" />
          <img src="/images/client3.png" alt="Client 3" className="h-10 mb-4" />
        </div>
      </div>
    </section>
  );
};

export default Clients;

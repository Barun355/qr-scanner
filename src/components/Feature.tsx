import React from "react";
import CustomQR from "../assets/images/customize-icon.png";
import AdvanceAnalytics from "../assets/vectors/advace-analytics.svg";
import { HiLink } from "react-icons/hi";
import SectionTitle from "./SectionTitle";

const Features: React.FC = () => {
  return (
    <section className="pt-32 pb-20" id="#features">
      <div className="container mx-auto text-center flex justify-center items-center flex-col">
        <SectionTitle title="Features." />
        <div className="flex flex-col justify-center items-center w-[44rem]">
          <h2 className="text-4xl font-bold text-text mb-8">
            Get your QR today.
          </h2>
          <p className="text-text">
            One stop solution for all your needs related to QR's. Smart Scan has
            all the necessary tools and integration related to QR you need in
            events, campagion, hackathons, etc.
          </p>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-12 px-8 py-16 *:min-h-[40rem] *:border-[1px] *:border-text/10">
          {/* Feature 1 */}
          <div className="col-start-1 col-end-7 flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-[10rem] w-full flex justify-center items-center">
              {/* Feature Icon */}
              <HiLink className="w-[6rem] h-[6rem] text-accent" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-start-7 col-end-12 flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-[10rem] w-full flex justify-center items-center">
              {/* Feature Icon */}
              <img src={CustomQR} alt="" className="w-[10rem]" />
            </div>
          </div>
          {/* Feature 5 */}
          <div className="col-start-1 col-end-12 flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-[10rem] w-full flex justify-center items-center">
              {/* Feature Icon */}
              <img src={AdvanceAnalytics} alt="" className="w-[10rem]" />
            </div>
          </div>
          {/* Feature 3 */}
          <div className="col-start-1 col-end-6 flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              {/* Feature Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Icon representing multifunctional QR */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18c-1.1 0-1.99-.89-1.99-2s.89-2 1.99-2 2 .89 2 2-.89 2-2 2zM12 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-text">Dynamic Update</h3>
            <p className="text-gray-600 mt-4">
              From linking websites to triggering digital actions, our QR codes
              offer flexible functionality to meet all your business needs.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="col-start-6 col-end-12 flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              {/* Feature Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Icon representing security */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18c-1.1 0-1.99-.89-1.99-2s.89-2 1.99-2 2 .89 2 2-.89 2-2 2zM12 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-text">
              Digital QR Code
            </h3>
            <p className="text-gray-600 mt-4">
              Our dynamic QR codes are designed with enhanced security to
              prevent unauthorized access and ensure safe content delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

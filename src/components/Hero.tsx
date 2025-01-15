import React from "react";
import Hero_Qr from "../assets/images/hero_qr.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Hero: React.FC = () => {


  const handleGuestLogin = async () => {
    toast.warning('Soon these feature will be implemented. Till then enjoy!')
    // await account.createAnonymousSession()
  }

  return (
    <section className="pt-24 pb-0 flex justify-center items-center container" id="#hero">
      <div className="flex flex-col w-[45rem] justify-between gap-10">
        <h1 className="text-5xl font-bold text-text mb-4">
          Create,{" "}
          <span
            className="italic text-transparent"
            style={{
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: "rgba(var(--text))",
            }}
          >
            Customize,
          </span>{" "}
          <br /> and Track your <br />{" "}
          <span className="bg-gradient-to-l from-primary to-[#96e6a1] text-transparent bg-clip-text animate-gradient-text-animate bg-[length:250%] bg-[-100%]">
            QR Code.
          </span>
        </h1>
        <p className="text-gray-400 mb-6 font-body">
          Enhance Brand Identity, Event Engagement, and Business Operations with
          Tailored QR Code Solutions – Streamline Information Sharing, Foster
          User Interaction, and Deliver a Superior User Experience through
          Customizable, Dynamic, and Multifunctional QR Codes.
        </p>
        <div className="flex gap-10">
          <button
            onClick={handleGuestLogin}
            className="bg-secondary text-text py-3 px-6 text-lg rounded-lg w-fit"
          >
            Login as Guest
          </button>
          <Link
            to="/signin"
            className="bg-primary text-[rgb(1, 1, 24)] py-3 px-6 text-lg rounded-lg w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="">
        <img src={Hero_Qr} alt="" className="h-[40rem]" />
      </div>
    </section>
  );
};

export default Hero;

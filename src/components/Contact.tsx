import React from "react";
import JogginGirl from "../assets/vectors/joggin-girl.svg";

const Contact: React.FC = () => {
  return (
    <section className="py-[10rem] container flex justify-center gap-[10rem] items-center" id="#contact">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center items-start py-4">
          <h1 className="text-4xl text-text font-bold mb-8">Connect with us</h1>
          <p className="text-base text-text">
            Just leave a message for us, if you have any query.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="relative border border-white/30 w-full h-[3rem] flex justify-start rounded-lg px-4">
            <label htmlFor="name" className="inline-block absolute font-body text-text top-[-9px] bg-background px-1 text-sm text-gray-600 left-[15px]">Name</label>
            <input type="text" placeholder="Alice" className="bg-transparent font-body placeholder:text-gray-800 outline-none border-none text-text" />
          </div>
          <div className="relative border border-white/30 w-full h-[3rem] flex justify-start rounded-lg px-4">
            <label htmlFor="email" className="inline-block absolute font-body text-text top-[-9px] bg-background px-1 text-sm text-gray-600 left-[15px]">E-mail</label>
            <input type="email" placeholder="alice@gmail.com" className="bg-transparent font-body placeholder:text-gray-800 outline-none border-none text-text" />
          </div>
          <div className="relative border border-white/30 w-full flex justify-start rounded-lg px-4 pt-4">
            <label htmlFor="message" className="inline-block absolute font-body text-text top-[-9px] bg-background px-1 text-sm text-gray-600 left-[15px]">Your message</label>
            <textarea placeholder="how can we help you?" className="bg-transparent w-full h-36 font-body placeholder:text-gray-800 outline-none border-none text-text" />
          </div>
          <button className="bg-primary text-background rounded-lg py-4">Submit</button>
        </div>
      </div>
      <div className="">
        <img src={JogginGirl} alt="" className="max-w-[60rem] w-[40rem]" />
      </div>
    </section>
  );
};

export default Contact;

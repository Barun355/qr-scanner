import React from "react";
import JogginGirl from "../assets/vectors/joggin-girl.svg";

const Contact: React.FC = () => {
  return (
    <section
      className="py-[10rem] container flex justify-center gap-[10rem] items-center"
      id="#contact"
    >
      <div
        className="flex flex-col gap-2 rounded-2xl  min-w-[40rem] shadow-[-15px_-30px_250px_#0055ff40] border-l border-r border-b border-t"
        style={{
          borderColor: "rgba(225, 225, 225, 0.1)",
          background:
            "radial-gradient(100% 50% at 0% 0%,rgba(0,85,255,.5) 0%,rgba(0,3,15,0) 100%)",
        }}
      >
        <div className="flex flex-col justify-center items-start px-10 py-6">
          <h1 className="text-4xl text-text font-bold">Connect us.</h1>
          <p className="text-base text-text">
            Just leave a message for <br /> us, if you have any query.
          </p>
        </div>
        <div className="flex flex-col gap-10 p-10 min-w-[30rem]">
          <div className="flex justify-between items-center gap-10">
            <div className="relative border border-white/30 w-full h-[2.3rem] flex justify-start rounded-lg px-4">
              <label
                htmlFor="name"
                className="inline-block absolute font-body text-text top-[-28px] bg-transparent px-1 text-sm text-white left-[1px]"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Alice"
                className="bg-transparent font-body placeholder:text-gray-400 outline-none border-none text-text"
              />
            </div>
            <div className="relative border border-white/30 w-full h-[2.3rem] flex justify-start rounded-lg px-4">
              <label
                htmlFor="email"
                className="inline-block absolute font-body text-text top-[-28px] bg-transparent px-1 text-sm text-white left-[1px]"
              >
                E-mail
              </label>
              <input
                type="email"
                placeholder="alice@gmail.com"
                className="bg-transparent font-body placeholder:text-gray-400 outline-none border-none text-text"
              />
            </div>
          </div>
          <div className="relative border border-white/30 w-full flex justify-start rounded-lg px-4 pt-4">
            <label
              htmlFor="message"
              className="inline-block absolute font-body text-text top-[-28px] bg-transparent px-1 text-sm text-white left-[1px]"
            >
              Your message
            </label>
            <textarea
              placeholder="how can we help you?"
              className="bg-transparent w-full h-36 font-body placeholder:text-gray-400 outline-none border-none text-text"
            />
          </div>
          <button className="bg-white text-black rounded-lg py-2">
            Submit
          </button>
        </div>
      </div>
      <div className="">
        <img src={JogginGirl} alt="" className="max-w-[60rem] w-[40rem]" />
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { LuMessageCircle } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

const Contact: React.FC = () => {
  return (
    <section
      className="py-[10rem] container flex flex-col-reverse grid-flow-col lg:flex-row justify-center gap-[10rem] items-center"
      id="#contact"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        <div
          className="col-start-1 col-end-2 row-span-2 flex flex-col gap-2 h-full rounded-2xl shadow-[-15px_-30px_250px_#0055ff40] border-l border-r border-b border-t"
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
                  className="bg-transparent font-body placeholder:text-slate-600 outline-none border-none text-text"
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
                  className="bg-transparent font-body placeholder:text-slate-600 outline-none border-none text-text"
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
                className="bg-transparent w-full h-64 font-body placeholder:text-slate-600 outline-none border-none text-text"
              />
            </div>
            <button className="bg-white text-black rounded-lg py-2">
              Submit
            </button>
          </div>
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 w-full rounded-lg border border-white/20 flex flex-col gap-20 justify-between items-start p-8 text-text">
          <div className="flex flex-col justify-around items-start gap-4 h-fit">
            <LuMessageCircle className="h-8 w-8" />
            <h1 className="text-xl font-heading font-bold text-white">Community Support</h1>
            <p className="font-body text-base text-text">Get help with your project <br />from the community.</p>
          </div>
          <button className="bg-primary rounded-lg w-full p-2 text-white">Join Community</button>
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-full rounded-lg border border-white/20 flex flex-col gap-20 justify-between items-start p-8 text-text">
          <div className="flex flex-col justify-around items-start gap-4 h-fit">
            <CiUser className="h-8 w-8" />
            <h1 className="text-xl font-heading font-bold text-white">Account Support</h1>
            <p className="font-body text-base text-text">Chat with us to resolve <br />account and billing issue.</p>
          </div>
          <button className="bg-primary rounded-lg w-full p-2 text-white">Start Chat</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

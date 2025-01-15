import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { MdCheckCircle } from "react-icons/md";

type PricingType = {
  subscriptionType: "Free Tier" | "Events" | "Bussiness";
  tagLine: string;
  price: {
    value: (number | null)[];
    currency: string;
  };
  credits: {
    qr: (number | null)[];
  };
  features: {
    singleQR: boolean;
    doubleQR: boolean;
    dynamicUpdate: number;
    qrEdit: {};
    analytics: "advance" | "basic" | "pro" | "full";
    content: string[];
  };
  idealFor: string;
};

const Pricing: React.FC = () => {
  const pricing: PricingType[] = [
    {
      subscriptionType: "Free Tier",
      tagLine: "Explore the Basics of QR Code Creation",
      price: {
        value: [0, 0],
        currency: "$",
      },
      credits: {
        qr: [5, 5],
      },
      features: {
        singleQR: true,
        doubleQR: false,
        dynamicUpdate: 2,
        qrEdit: {
          resize: true,
          color: false,
          addLogo: false,
          resizeLogo: false,
        },
        analytics: "basic",
        content: [
          "Single Link QR.",
          "Limited customization options.",
          "Basic editing (dynamic QR size only).",
          "2 dynamic updates per QR code per month.",
        ],
      },
      idealFor: "Individuals or small-scale users exploring QR code creation.",
    },
    {
      subscriptionType: "Events",
      tagLine: "Perfect for Event Organizers and Campaigns",
      price: {
        value: [15, 10],
        currency: "$",
      },
      credits: {
        qr: [10, 15],
      },
      features: {
        singleQR: true,
        doubleQR: true,
        dynamicUpdate: 20,
        analytics: "pro",
        qrEdit: {
          resize: true,
          color: true,
          addLogo: true,
          resizeLogo: true,
        },
        content: [
          "Single and Double Link QR.",
          "Basic QR customization to match your brand identity",
          "Add custom logos.",
          "20 Dynamic updates per QR code per month.",
          "Analytics dashboard to track scans and engagements.",
          "Modify foreground and background colors.",
        ],
      },
      idealFor: "Event promotions, ticketing, and branding campaigns.",
    },
    {
      subscriptionType: "Bussiness",
      tagLine: "Empower Small and Medium Businesses",
      price: {
        value: [50, 40],
        currency: "$",
      },
      credits: {
        qr: [-1, -1],
      },
      features: {
        singleQR: true,
        doubleQR: true,
        dynamicUpdate: -1,
        analytics: "advance",
        qrEdit: {
          resize: true,
          color: true,
          addLogo: true,
          resizeLogo: true,
        },
        content: [
          "Everthing in Free",
          "Full QR customization to reflect your brand.",
          "Unlimited Dynamic updates",
          "Access to Digital QR features (dynamic iframe QR for websites).",
          "Advanced analytics to monitor campaign performance.",
        ],
      },
      idealFor:
        "Small businesses running consistent campaigns or product promotions.",
    },
  ];

  const [monthlyPlan, setMonthlyPlan] = useState(true);

  return (
    <section
      id="pricing"
      className="py-24 container flex justify-center items-center flex-col"
    >
      <div className="flex flex-col justify-center items-center w-[50rem] text-center">
        <SectionTitle title="Pricing." />
        <h2 className="text-4xl font-bold text-text mb-8">
          Get your first QR.
        </h2>
        <p className="text-text">
          Our platform offers flexible plans tailored to personal use, events,
          small businesses, and enterprises. Whether you're a beginner or a
          high-volume user, we've got you covered.
        </p>
      </div>
      <div className="w-full h-fit pt-20 pb-6 px-10">
        <div className="w-full shadow-[-15px_-30px_250px_#0055ff40] rounded-2xl border border-white/10 flex flex-col justify-center items-center py-10 gap-8">
          <div className="flex gap-8">
            <span className="text-text text-xl font-body font-bold">
              Monthly
            </span>
            <div
              className={`flex justify-center items-center w-[4rem] rounded-full relative transition-colors duration-100 ${
                monthlyPlan ? "bg-text" : "bg-blue-700 ring-4 ring-offset-4"
              }`}
              onClick={() => setMonthlyPlan((prev) => !prev)}
            >
              <div
                className={`h-[1.5rem] w-[1.5rem] rounded-full absolute bg-white transition-all duration-300 ${
                  monthlyPlan ? " left-[6px]" : "left-[36px]"
                } `}
              ></div>
            </div>
            <span className="text-text text-xl font-body font-bold">
              Yearly
            </span>
          </div>
          <div className="flex justify-around items-center py-10 h-fit w-full">
            {pricing.length > 0 &&
              pricing.map((data) => (
                <div
                  className={`w-[28rem] min-h-[62rem] flex flex-col items-center rounded-2xl gap-8 py-6 px-8 ${
                    data.subscriptionType === "Events" && "scale-105"
                  }`}
                  style={{
                    background:
                      data.subscriptionType === "Events"
                        ? "radial-gradient(100% 50% at 0% 0%,rgba(0,85,255,.5) 0%,rgba(0,3,15,0) 100%)"
                        : "",
                  }}
                >
                  <div className="flex flex-col items-center gap-10 text-center">
                    <h1 className="text-3xl text-text">
                      {data.subscriptionType}
                    </h1>
                    <p className="text-text">{data.tagLine}</p>
                    <button className="w-[10rem] px-4 py-2 rounded-lg bg-gradient-to-l from-purple-600 to-pink-600">
                      Get Started
                    </button>
                    <span className="flex gap-2 justify-center items-center">
                      <span className="text-4xl text-text font-bold">
                        {data.price.currency}{" "}
                        {monthlyPlan
                          ? data.price.value[0]
                          : data.price.value[1]}
                      </span>
                      <span className="text-lg text-white mb-5">Per month</span>
                    </span>
                    <span className="flex flex-col gap-2">
                      <span className="text-xl font-bold font-heading text-text">
                        {monthlyPlan
                          ? data.credits.qr[0] !== -1
                            ? data.credits.qr[0]
                            : "Unlimited"
                          : data.credits.qr[1] !== -1
                          ? data.credits.qr[1]
                          : "Unlimited"}{" "}
                        QR credits per month{" "}
                      </span>
                      <span className="text-sm font-body text-slate-400">
                        (1 credit = 1 QR code)
                      </span>
                    </span>
                    <div className="border-t border-white/20 w-full my-10"></div>
                  </div>
                  <div className="flex flex-col justify-between h-[40rem] gap-20">
                    <div className="flex flex-col gap-8">
                      <h1
                        className={`text-3xl text-text ${
                          data.subscriptionType === "Events" &&
                          "bg-clip-text text-transparent bg-gradient-to-l from-purple-600 to-pink-600"
                        }`}
                      >
                        Features:
                      </h1>
                      <div className="flex flex-col gap-8">
                        {data.features.content.map((feat) => (
                          <div className="flex gap-4 items-center justify-start w-full">
                            <MdCheckCircle className={`rounded-full text-background h-5 w-5 ${data.subscriptionType !== 'Events' ? 'bg-white': 'bg-blue-600'}`} />
                            <span className="text-lg text-body text-slate-400 text-balance">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-white text-center">{data.idealFor}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

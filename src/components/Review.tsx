import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import SectionTitle from "./SectionTitle";
// import { TbStarHalfFilled } from "react-icons/tb";

type StarsType = {
  rate: number;
};

const Stars: React.FC<StarsType> = ({ rate }) => {
  switch (rate) {
    case 1:
      return (
        <div className="flex gap-2">
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
        </div>
      );
      break;
    case 2:
      return (
        <div className="flex gap-2">
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
        </div>
      );
      break;
    case 3:
      return (
        <div className="flex gap-2">
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
        </div>
      );
      break;
    case 4:
      return (
        <div className="flex gap-2">
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiOutlineStar className="h-8 w-8 text-accent" />
        </div>
      );
      break;
    case 5:
      return (
        <div className="flex gap-2">
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
          <AiFillStar className="h-8 w-8 text-accent" />
        </div>
      );
      break;
  }
};

const Reviews: React.FC = () => {
  const reviews_up = [
    {
      name: "John Doe",
      designation: "Marketing Manager",
      review:
        "The platform has revolutionized the way we manage QR codes. The analytics provide deep insights that are incredibly useful.",
      rating: 5,
      organization: "TechSolutions Inc.",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "Jane Smith",
      designation: "Product Designer",
      review:
        "I love the customization features. Being able to align QR codes with our brand colors has been a game-changer for us.",
      rating: 4,
      organization: "CreativeStudio",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Emily Johnson",
      designation: "Event Organizer",
      review:
        "Using the platform for events has made attendee engagement so much easier. The dynamic QR updates are super handy.",
      rating: 4,
      organization: "Eventify Co.",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "Michael Brown",
      designation: "Business Analyst",
      review:
        "The double-link feature is genius. It allows us to direct different audiences to the right content effortlessly.",
      rating: 4,
      organization: "Insight Analytics",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Sarah Davis",
      designation: "Freelancer",
      review:
        "For a free-tier user, the features provided are fantastic. It's perfect for small-scale personal projects.",
      rating: 4,
      organization: "Self-Employed",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "David Wilson",
      designation: "Operations Manager",
      review:
        "Managing QR codes for our organization is now seamless. The platform is user-friendly and packed with helpful tools.",
      rating: 4,
      organization: "Global Ventures",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Sophia Moore",
      designation: "Digital Marketer",
      review:
        "The analytics have helped us optimize our campaigns. Knowing how users interact with our QR codes is invaluable.",
      rating: 3,
      organization: "AdPro Agency",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "James Anderson",
      designation: "Software Engineer",
      review:
        "I appreciate the dynamic QR updates. They save us so much time when we need to change the content behind the code.",
      rating: 5,
      organization: "CodeWorks Ltd.",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Olivia Martinez",
      designation: "Brand Manager",
      review:
        "Customized QR codes have elevated our brand's visibility. It's a must-have tool for any marketing professional.",
      rating: 4,
      organization: "BrandElevate",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "William Taylor",
      designation: "Event Planner",
      review:
        "The platform's event solutions are a lifesaver. We can track engagement and make updates in real time with ease.",
      rating: 5,
      organization: "PlanIt Events",
      image: "https://avatar.iran.liara.run/public/boy",
    },
  ];

  const reviews_down = [
    {
      name: "John Doe",
      designation: "Marketing Manager",
      review:
        "The platform has revolutionized the way we manage QR codes. The analytics provide deep insights that are incredibly useful.",
      rating: 5,
      organization: "TechSolutions Inc.",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "Jane Smith",
      designation: "Product Designer",
      review:
        "I love the customization features. Being able to align QR codes with our brand colors has been a game-changer for us.",
      rating: 4,
      organization: "CreativeStudio",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Emily Johnson",
      designation: "Event Organizer",
      review:
        "Using the platform for events has made attendee engagement so much easier. The dynamic QR updates are super handy.",
      rating: 4,
      organization: "Eventify Co.",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "Michael Brown",
      designation: "Business Analyst",
      review:
        "The double-link feature is genius. It allows us to direct different audiences to the right content effortlessly.",
      rating: 4,
      organization: "Insight Analytics",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Sarah Davis",
      designation: "Freelancer",
      review:
        "For a free-tier user, the features provided are fantastic. It's perfect for small-scale personal projects.",
      rating: 4,
      organization: "Self-Employed",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "David Wilson",
      designation: "Operations Manager",
      review:
        "Managing QR codes for our organization is now seamless. The platform is user-friendly and packed with helpful tools.",
      rating: 4,
      organization: "Global Ventures",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Sophia Moore",
      designation: "Digital Marketer",
      review:
        "The analytics have helped us optimize our campaigns. Knowing how users interact with our QR codes is invaluable.",
      rating: 3,
      organization: "AdPro Agency",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "James Anderson",
      designation: "Software Engineer",
      review:
        "I appreciate the dynamic QR updates. They save us so much time when we need to change the content behind the code.",
      rating: 5,
      organization: "CodeWorks Ltd.",
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Olivia Martinez",
      designation: "Brand Manager",
      review:
        "Customized QR codes have elevated our brand's visibility. It's a must-have tool for any marketing professional.",
      rating: 4,
      organization: "BrandElevate",
      image: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "William Taylor",
      designation: "Event Planner",
      review:
        "The platform's event solutions are a lifesaver. We can track engagement and make updates in real time with ease.",
      rating: 5,
      organization: "PlanIt Events",
      image: "https://avatar.iran.liara.run/public/boy",
    },
  ];

  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const upControls = useAnimation();
  const downControls = useAnimation();

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let animationFrame: any;
    let startTime: any = null;
    const duration = 100000; // 30 seconds for a full cycle

    const animate = (timestamp: any) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      const scrollPositionUp = progress * scrollContainer.scrollWidth;
      const scrollPositionDown = progress * scrollContainer.scrollWidth;

      upControls.set({ x: -scrollPositionUp });
      downControls.set({ x: +scrollPositionDown });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-24 container flex justify-center items-center flex-col" id="#reviews">
      <div className="flex flex-col justify-center items-center w-[50rem] text-center">
        <SectionTitle title="Reivews." />
        <h2 className="text-4xl font-bold text-text mb-8">
          People love using Smart Scan.
        </h2>
        <p className="text-text">
          Most of the universities, colleges, companies, freelancer and individuals rely on us for their digital QR needs.
        </p>
      </div>
      <div className="overflow-hidden relative space-y-10">
        <div className="absolute left-0 top-0 bottom-0 w-[20rem] bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[20rem] bg-gradient-to-l from-background to-transparent z-10"></div>
        <motion.div
          className="flex gap-10 w-screen"
          ref={containerRef}
          whileInView="visible"
          viewport={{ once: true }}
          animate={upControls}
          transition={{ type: "tween", ease: "linear" }}
        >
          {reviews_up.length > 0 &&
            reviews_up.map((review, idx) => (
              <motion.div
                className="w-[25rem] h-fit p-4 rounded-lg border border-text/5 text-text flex-shrink-0"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">{review?.name}</h1>
                    <p className="text-sm text-primary">{review.designation}</p>
                  </div>
                  <img src={review?.image} alt="" className="h-16 w-16" />
                </div>
                <p className="py-8 line-clamp-3">{review.review}</p>
                <Stars rate={review?.rating} />
                <p className="text-sm pt-10 text-primary">
                  {review.organization}
                </p>
              </motion.div>
            ))}
        </motion.div>
        <motion.div
          className="flex gap-10 w-screen flex-row-reverse"
          ref={containerRef}
          animate={downControls}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "tween", ease: "linear" }}
        >
          {reviews_down.length > 0 &&
            reviews_down.map((review, idx) => (
              <motion.div
                className="w-[25rem] h-fit p-4 rounded-lg border border-text/5 text-text flex-shrink-0"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">{review?.name}</h1>
                    <p className="text-sm text-primary">{review.designation}</p>
                  </div>
                  <img src={review?.image} alt="" className="h-16 w-16" />
                </div>
                <p className="py-8 line-clamp-3">{review.review}</p>
                <Stars rate={review?.rating} />
                <p className="text-sm pt-10 text-primary">
                  {review.organization}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

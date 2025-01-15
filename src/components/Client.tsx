import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Clients: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const companies = [
    { company: "Google", logo: "https://via.placeholder.com/150?text=Google" },
    {
      company: "Microsoft",
      logo: "https://via.placeholder.com/150?text=Microsoft",
    },
    { company: "Apple", logo: "https://via.placeholder.com/150?text=Apple" },
    { company: "Amazon", logo: "https://via.placeholder.com/150?text=Amazon" },
    {
      company: "Facebook",
      logo: "https://via.placeholder.com/150?text=Facebook",
    },
    { company: "Tesla", logo: "https://via.placeholder.com/150?text=Tesla" },
    {
      company: "Samsung",
      logo: "https://via.placeholder.com/150?text=Samsung",
    },
    { company: "Intel", logo: "https://via.placeholder.com/150?text=Intel" },
    { company: "IBM", logo: "https://via.placeholder.com/150?text=IBM" },
    { company: "Cisco", logo: "https://via.placeholder.com/150?text=Cisco" },
    { company: "Oracle", logo: "https://via.placeholder.com/150?text=Oracle" },
    { company: "Adobe", logo: "https://via.placeholder.com/150?text=Adobe" },
    {
      company: "Salesforce",
      logo: "https://via.placeholder.com/150?text=Salesforce",
    },
    {
      company: "Netflix",
      logo: "https://via.placeholder.com/150?text=Netflix",
    },
    {
      company: "Spotify",
      logo: "https://via.placeholder.com/150?text=Spotify",
    },
    { company: "Slack", logo: "https://via.placeholder.com/150?text=Slack" },
    { company: "Zoom", logo: "https://via.placeholder.com/150?text=Zoom" },
    { company: "Airbnb", logo: "https://via.placeholder.com/150?text=Airbnb" },
    { company: "Uber", logo: "https://via.placeholder.com/150?text=Uber" },
    { company: "Lyft", logo: "https://via.placeholder.com/150?text=Lyft" },
    {
      company: "Twitter",
      logo: "https://via.placeholder.com/150?text=Twitter",
    },
    {
      company: "Pinterest",
      logo: "https://via.placeholder.com/150?text=Pinterest",
    },
    {
      company: "Dropbox",
      logo: "https://via.placeholder.com/150?text=Dropbox",
    },
    { company: "PayPal", logo: "https://via.placeholder.com/150?text=PayPal" },
    { company: "Square", logo: "https://via.placeholder.com/150?text=Square" },
    {
      company: "Shopify",
      logo: "https://via.placeholder.com/150?text=Shopify",
    },
    { company: "eBay", logo: "https://via.placeholder.com/150?text=eBay" },
    { company: "TikTok", logo: "https://via.placeholder.com/150?text=TikTok" },
    {
      company: "Snapchat",
      logo: "https://via.placeholder.com/150?text=Snapchat",
    },
    { company: "Baidu", logo: "https://via.placeholder.com/150?text=Baidu" },
    {
      company: "Alibaba",
      logo: "https://via.placeholder.com/150?text=Alibaba",
    },
    {
      company: "Tencent",
      logo: "https://via.placeholder.com/150?text=Tencent",
    },
    { company: "Dell", logo: "https://via.placeholder.com/150?text=Dell" },
    { company: "HP", logo: "https://via.placeholder.com/150?text=HP" },
    { company: "Lenovo", logo: "https://via.placeholder.com/150?text=Lenovo" },
    { company: "Sony", logo: "https://via.placeholder.com/150?text=Sony" },
    { company: "LG", logo: "https://via.placeholder.com/150?text=LG" },
    { company: "Asus", logo: "https://via.placeholder.com/150?text=Asus" },
    { company: "Acer", logo: "https://via.placeholder.com/150?text=Acer" },
    { company: "Nvidia", logo: "https://via.placeholder.com/150?text=Nvidia" },
  ];

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
      const scrollPosition = progress * scrollContainer.scrollWidth;

      controls.set({ x: -scrollPosition });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="">
      <div className="overflow-hidden relative space-y-10">
        <div className="absolute left-0 top-0 bottom-0 w-[20rem] bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[20rem] bg-gradient-to-l from-background to-transparent z-10"></div>
        <motion.div
          className="flex gap-10 w-screen"
          ref={containerRef}
          whileInView="visible"
          viewport={{ once: true }}
          animate={controls}
          transition={{ type: "tween", ease: "linear" }}
        >
          {companies.length > 0 &&
            companies.map((company) => (
              <div className="flex justify-start px-8 items-center min-w-[10rem] h-16 rounded-lg shadow-[4px_4px_12px_rgba(16, 25, 38, 0.08)] flex-shrink-0 gap-4" style={{
                backgroundImage: 'linear-gradient(104deg, rgba(var(--accent), 0), rgba(var(--background) 0) 100%)'
              }}>
                {/* <img src={company.logo} alt="" className="h-10 w-10" /> */}
                <span className="text-base text-text">{company.company}</span>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

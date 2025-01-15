import React from "react";

const SectionTitle: React.FC<{title: string}> = ({ title }) => {
  return (
    <div
      className="outline-none transform-none flex justify-center items-center flex-shrink-0 flex-col"
      style={{
        boxShadow: "0px 4px 18px rgba(0 130 217 0.85)",
      }}
    >
      <p>
        <span
          className="text-base bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(309deg, rgb(166, 221, 255) 2.25225%, rgb(51, 194, 255) 48.0785%, rgb(0, 119, 255) 100%)",
          }}
        >
          {title}
        </span>
      </p>
    </div>
  );
}

export default SectionTitle;

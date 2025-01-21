import React from "react";

const CircularTitle = () => {
  const title = "Kieron von Buchstab  "; // Include spaces for even spacing
  const radius = 38; // radius in vh units
                           // Positive values rotate clockwise
                           // Negative values rotate counter-clockwise

  return (
    <div className="xl:hidden absolute w-full h-full">
      <div
        className="absolute w-full h-full flex justify-center items-center"
        style={{
          animation: "rotate 10s linear infinite",
        }}
      >
        {title.split("").map((char, index) => {
          // Calculate the angle for this letter's position
          const angle = (360 / title.length) * index;
          
          // Calculate the rotation needed to make the letter face center
          // Now including the rotation offset for fine-tuning
          const letterRotation = angle + 90 - 17*index;
          
          return (
            <span
              key={index}
              className="absolute text-black font-headings text-[28vw]"
              style={{
                transform: `
                  rotate(${angle}deg) 
                  translate(${radius}vw) 
                  rotate(${letterRotation}deg)
                `,
                transformOrigin: "center",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CircularTitle;

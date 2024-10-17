"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 0.9,
    text: "Typescript quarter 1 score",
  },
  {
    num: 10,
    text: "Projects Completed",
  },
  {
    num: 11,
    text: "Node Projects",
  },
  {
    num: 5,
    text: "Clients Collaborated With",
  },
];

// When displaying the value:
export const Stats = () => {
  return (
    <section className="pt-10 pb-8 xl:pt-16 xl:pb-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <CountUp
                end={item.num * (item.text === "Typescript quarter 1 score" ? 100 : 1)} // Multiply by 100 for Typescript score
                duration={6} // Shortened duration for a quicker but smooth animation
                delay={0.5}  // Short delay to make it look more dynamic
                className="text-4xl xl:text-6xl font-bold text-[#00ff99]"
                suffix={item.text === "Typescript quarter 1 score" ? "%" : ""} // Add '%' for Typescript score
              />
              <p className="text-lg xl:text-xl mt-2 text-white opacity-80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

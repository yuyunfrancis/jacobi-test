import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 md:text-left md:py-16 lg:py-24">
      <h1 className="text-3xl text-center w-md md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
        {title}
      </h1>
      <p className="text-lg text-center md:max-w-2xl">{subtitle}</p>
    </div>
  );
};

export default Hero;

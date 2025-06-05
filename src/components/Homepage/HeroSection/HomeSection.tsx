import React from "react";
import Image from "next/image";
import Hero from "./Hero";
import Glass from "./Glass";

const HomeSection = () => {
  return (
    <section className="w-full h-auto relative">
      <Image
        src="/svgs/radial.svg"
        alt="Brain"
        width={500}
        height={200}
        className="w-full h-full -z-10 absolute top-0 "
      />
      {/* Start Of Hero Section */}
      <Hero />
      {/* End Of Hero Section */}

      {/* Start Of Glass Section */}
      <Glass />
      {/* End Of Glass Section */}
    </section>
  );
};

export default HomeSection;

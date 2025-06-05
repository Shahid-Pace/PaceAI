import React from "react";
import Features from "./Features";
import Agents from "./Agents";
import MoreInfo from "./MoreInfo";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="w-full h-auto py-10 mt-5 relative">
      <Image
        src="/svgs/radial.svg"
        alt="Brain"
        width={500}
        height={200}
        className="w-full h-full -z-10 absolute"
      />
      <Agents />
      <Features />
      <MoreInfo />
    </section>
  );
};

export default FeaturesSection;

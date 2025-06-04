import React from "react";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Image from "next/image";

const InquirySection = () => {
  return (
    <section className="w-full h-auto py-10 mt-5 relative">
      <Image
        src="/svgs/radial.svg"
        alt="Brain"
        width={500}
        height={200}
        className="w-full h-full -z-10 absolute bottom-50"
      />
      <Testimonials />
      <Faq />
    </section>
  );
};

export default InquirySection;

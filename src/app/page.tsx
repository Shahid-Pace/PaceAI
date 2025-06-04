import React from 'react';
import HomeSection from '@/components/Homepage/HomeSection';
import FeatureSection from '@/components/Homepage/FeaturesSection';
import InquirySection from '@/components/Homepage/InquirySection';

export default function Home() {
  return (
    <>
        <HomeSection />
        <FeatureSection/>
        <InquirySection/>
    </>
  );
}

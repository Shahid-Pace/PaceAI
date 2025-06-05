import React from 'react';
import HomeSection from '@/components/Homepage/HeroSection/HomeSection';
import FeatureSection from '@/components/Homepage/Featurespage/FeaturesSection';
import InquirySection from '@/components/Homepage/Inquirypage/InquirySection';

export default function Home() {
  return (
    <>
        <HomeSection/>
        <FeatureSection/>
        <InquirySection/>
    </>
  );
}

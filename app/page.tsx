import AboutSection from '@/components/AboutSection'
import DonationSection from '@/components/DonationSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <DonationSection />
      <AboutSection />
    </div>
  )
}

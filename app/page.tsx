import AboutSection from '@/components/AboutSection'
import DonationSection from '@/components/DonationSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <DonationSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

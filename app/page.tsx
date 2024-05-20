import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

const getDonations = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/donations`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getCategories = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/categories`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function page() {
  const donationsPromise: Promise<Donation[]> = getDonations();
  const categoriesPromise: Promise<Category[]> = getCategories();

  const [donations, categories] = await Promise.all([
    donationsPromise,
    categoriesPromise,
  ]);

  return (
    <div>
      <HeroSection />
      <DonationSection donations={donations} categories={categories} />
      <AboutSection />
      <Footer />
    </div>
  );
}

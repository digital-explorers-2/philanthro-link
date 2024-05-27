import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

export type DonationsObject = {
  donations: Donation[];
  count: number;
};

const getDonations = async (page: number) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/donations?page=${page}`,
    {
      next: { revalidate: 0 },
    }
  );

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

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams.page
    ? parseInt(searchParams.page as string, 10)
    : 1;
  const donationsPromise: Promise<DonationsObject> = getDonations(page);
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

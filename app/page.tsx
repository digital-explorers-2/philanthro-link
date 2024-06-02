import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

export type DonationsObject = {
  donations: Donation[];
  count: number;
};

const getDonations = async (
  page: number | null,
  category: number | null,
  q: string | null,
) => {
  let searchQuery = "?";
  if (page) {
    searchQuery += `&page=${page}`;
  }
  if (category) {
    searchQuery += `&category=${category}`;
  }
  if (q) {
    searchQuery += `&q=${q}`;
  }

  const res = await fetch(
    `${process.env.BASE_URL}/api/donations${searchQuery}`,
    {
      next: { revalidate: 0 },
    },
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
    : null;
  const category = searchParams.category
    ? parseInt(searchParams.category as string, 10)
    : null;

  const q = searchParams.q ? (searchParams.q as string) : null;

  const donationsPromise: Promise<DonationsObject> = getDonations(
    page,
    category,
    q,
  );
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

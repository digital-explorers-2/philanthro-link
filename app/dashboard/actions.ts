export const getDonationsByUser = async (): Promise<UserDonation[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/users/${"bc4e02e4-c916-44f8-b418-76c7290ec0e7"}/donations`, // TODO: Replace with the actual user ID
    { next: { revalidate: 0 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

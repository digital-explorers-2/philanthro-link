import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const getDonationsByUser = async (
  uid: string,
): Promise<UserDonation[]> => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/users/${uid}/donations`,
    { next: { revalidate: 0 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const checkUserLoggedIn = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return redirect("/login");
  }

  return data.user;
};

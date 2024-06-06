type Status = "pending" | "verified" | "rejected";
type Donation = {
  id: number;
  title: string;
  description_id: number;
  descriptions: Description;
  donation_count: number;
  amount_needed: number;
  amount_currency: string;
  user_id: string;
  category_id: number;
  verification_status: Status;
  created_at: Date;
  updated_at: Date;
  amount_received: number;
};

type UserDonation = {
  id: number;
  user_id: string;
  donation_id: number;
  created_at: Date;
  updated_at: Date;
  amount: number;
  currency: string;
};

type Reject = {
  id: number;
  donation_id: string;
  reason: string;
  created_at: Date;
};

type Description = {
  id: number;
  subtitle: string;
  image: string | null;
  summary: string | null;
  solution: string | null;
  challenge: string | null;
  usage: string | null;
};

type User = {
  id: string;
  created_at: Date;
  first_name: string;
  last_name: string;
  email_address: string;
  role: string;
};

type Category = {
  id: number;
  name: string;
  desc: string | null;
  created_at: Date;
};

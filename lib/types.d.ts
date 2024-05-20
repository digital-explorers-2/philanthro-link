type Status = "pending" | "verified" | "rejected";
type Donation = {
  id: number;
  title: string;
  description_id: number;
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
  image: string;
  summary: string;
  solution: string;
  challenge: string;
  usage: string;
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

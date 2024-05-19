type Donation = {
  id: number;
  title: string;
  description_id: int;
  donation_count: number;
  amount_needed: number;
  amount_currency: string;
  user_id: number;
  category_id: number;
  verification_status: string;
  created_at: Date;
  updated_at: Date;
  amount_received: number;
};

type UserDonation = {
  id: number;
  user_id: number;
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
  desc: string;
  created_at: Date;
};

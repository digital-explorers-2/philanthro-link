import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

type Params = {
  id: string;
};

type Input = {
  donation_id: number;
  amount: number;
  currency: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  const { id } = params;
  const supabase = createClient();

  const { data: userDonations, error } = await supabase
    .from("user_donations")
    .select("*, donations(title, descriptions(image), categories(name))")
    .eq("user_id", id);

  if (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new NextResponse(JSON.stringify(userDonations), {
    status: 200,
  });
}

export async function POST(request: Request, { params }: { params: Params }) {
  const { id: user_id } = params;
  const { donation_id, amount, currency }: Input = await request.json();

  const supabase = createClient();

  const { data: existing_user_donation, error: existing_user_donation_error } =
    await supabase
      .from("user_donations")
      .select()
      .eq("donation_id", donation_id)
      .eq("user_id", user_id)
      .single();

  if (!existing_user_donation_error && existing_user_donation) {
    const { error } = await supabase
      .from("user_donations")
      .update({ amount: existing_user_donation.amount + amount })
      .eq("id", existing_user_donation.id)
      .select()
      .single();

    if (error) {
      return new NextResponse(JSON.stringify({ error }), {
        status: 500,
      });
    }

    const { data: donation, error: donation_error } = await supabase.rpc(
      "update_donation_and_return",
      {
        donation_id: existing_user_donation.id,
        amount: amount,
      },
    );

    if (donation_error) {
      return new NextResponse(JSON.stringify({ donation_error }), {
        status: 500,
      });
    }

    return new NextResponse(JSON.stringify(donation), {
      status: 200,
    });
  }

  const { data: user_donation, error: user_donation_error } = await supabase
    .from("user_donations")
    .insert([
      {
        donation_id,
        user_id,
        amount,
        currency,
      },
    ])
    .select()
    .single();

  if (user_donation_error) {
    return new NextResponse(JSON.stringify({ user_donation_error }), {
      status: 500,
    });
  }

  const { data: donation, error: donation_error } = await supabase.rpc(
    "update_donation_and_return",
    {
      donation_id: user_donation.donation_id,
      amount: amount,
    },
  );

  if (donation_error) {
    return new NextResponse(JSON.stringify({ donation_error }), {
      status: 500,
    });
  }

  return new NextResponse(JSON.stringify(donation), {
    status: 201,
  });
}

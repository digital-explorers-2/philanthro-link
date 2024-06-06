import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

type Input = {
  donation_id: string;
  user_id: number;
  amount: number;
  currency: string;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let page = searchParams.get("page") || 1;
  page = parseInt(page as string, 10);

  let category = searchParams.get("category") || 0;
  category = parseInt(category as string, 10);

  const q = searchParams.get("q");

  const limit = 6;
  const supabase = createClient();

  let query = supabase
    .from("donations")
    .select(`*, descriptions(*)`)
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (category != 0) {
    query = query.eq("category_id", category);
  }

  if (q) {
    query = query.ilike("title", `%${q}%`);
  }

  const { data: donations, error } = await query;

  if (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }

  const { count } = await supabase
    .from("donations")
    .select("id", { count: "exact" });

  return new NextResponse(JSON.stringify({ donations, count }), {
    status: 200,
  });
}

// TODO: optimize search using https://supabase.com/docs/guides/database/full-text-search

export async function POST(request: Request) {
  const { donation_id, user_id, amount, currency }: Input =
    await request.json();

  const supabase = createClient();

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

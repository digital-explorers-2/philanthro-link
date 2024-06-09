import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

type Input = {
  first_name: string;
  last_name: string;
  email_address: string;
};

export async function POST(request: Request) {
  const { first_name, last_name, email_address }: Input = await request.json();
  const supabase = createClient();

  const { data: user, error } = await supabase
    .from("users")
    .insert({ first_name, last_name, email_address })
    .single();

  if (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new NextResponse(JSON.stringify(user), {
    status: 200,
  });
}

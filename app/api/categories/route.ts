import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();

  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new NextResponse(JSON.stringify(categories), {
    status: 200,
  });
}
